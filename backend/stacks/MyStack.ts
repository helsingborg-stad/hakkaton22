import { StackContext, Table, AppSyncApi } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const eventsTable = new Table(stack, "Events", {
    fields: {
      id: "string",
    },
    primaryIndex: { partitionKey: "id" },
  });

  const activitiesTable = new Table(stack, "Activities", {
    fields: {
      id: "string",
    },
    primaryIndex: { partitionKey: "id" },
  });

  const rewardsTable = new Table(stack, "Rewards", {
    fields: {
      id: "string",
    },
    primaryIndex: { partitionKey: "id" },
  });

  const api = new AppSyncApi(stack, "AppSyncApi", {
    schema: "api/graphql/schema.graphql",
    defaults: {
      function: {
        environment: {
          EVENTS_TABLE: eventsTable.tableName,
          ACTIVITIES_TABLE: activitiesTable.tableName,
          REWARDS_TABLE: rewardsTable.tableName,
        },
      },
    },
    dataSources: {
      events: "functions/events.handler",
      activities: "functions/activities.handler",
      rewards: "functions/rewards.handler",
    },
    resolvers: {
      "Query    getEvents": "events",
      "Query    getAllActivities": "activities",
      "Query    getAllRewards": "rewards",
      "Mutation doActivity": "activities",
      "Mutation redeemReward": "rewards",
    },
  });

  api.attachPermissions([eventsTable]);

  stack.addOutputs({
    ApiId: api.apiId,
    ApiKey: api.cdk.graphqlApi.apiKey ?? 'N/A',
    APiUrl: api.url,
  });
}
