import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function getEvents(): Promise<Record<string, unknown>[] | undefined> {
  const params = {
    TableName: process.env.EVENTS_TABLE as string,
  };

  const data = await dynamoDb.scan(params).promise();
  return data.Items;
}
