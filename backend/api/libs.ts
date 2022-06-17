import { DynamoDB } from "aws-sdk";
import Reward from "./types/reward";
import Activity from "./types/activity";
import Event from "./types/event";

const dynamoDb = new DynamoDB.DocumentClient();

function getByName(name: string, list: Activity[] | Event[] | Reward[]) {
  return list.find(item => item.name === name) as Activity | Event | Reward;
}

export { dynamoDb, getByName }
