import { dynamoDb } from "./libs";

export default async function getAllRewards(): Promise<Record<string, unknown>[] | undefined> {
  const params = {
    TableName: process.env.REWARDS_TABLE as string,
  };

  const data = await dynamoDb.scan(params).promise();
  return data.Items;
}
