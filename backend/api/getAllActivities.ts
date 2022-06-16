import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function getAllActivities(): Promise<Record<string, unknown>[] | undefined> {
  const params = {
    TableName: process.env.ACTIVITIES_TABLE as string,
  };

  const data = await dynamoDb.scan(params).promise();
  return data.Items;
}
