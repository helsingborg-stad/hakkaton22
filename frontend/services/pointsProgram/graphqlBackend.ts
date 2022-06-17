import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GQL_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_GQL_KEY_APIKEY ?? "",
  },
  cache: new InMemoryCache(),
});

const GQL_GET_EVENTS = gql`
  {
    getEvents {
      name
      points
      date
    }
  }
`;

const GQL_GET_ACTIVITIES = gql`
  {
    getAllActivities {
      frequency
      name
      points
    }
  }
`;

const GQL_GET_REWARDS = gql`
  {
    getAllRewards {
      name
      points
    }
  }
`;

import { PointsProgramActions } from "./pointsProgram";

const Actions: PointsProgramActions = {
  async getEvents() {
    const res = await client.query({ query: GQL_GET_EVENTS });
    return res.data.getEvents;
  },
  async getActivities() {
    const res = await client.query({ query: GQL_GET_ACTIVITIES });
    return res.data.getAllActivities;
  },
  async getRewards() {
    const res = await client.query({ query: GQL_GET_REWARDS });
    return res.data.getAllRewards;
  },
  async doActivity(activityName) {
    return [];
  },
  async redeemReward(rewardName) {
    return [];
  },
};

export default Actions;
