import { dynamoDb } from "./libs";
import getEvents from "./getEvents";
import Event from "./types/event";
import Reward from "./types/reward";

async function getRewardList(): Promise<Reward[]> {

  const scanParams = {
    TableName: process.env.ACTIVITIES_TABLE as string,
  };

  const result = await dynamoDb.scan(scanParams).promise();
  return result.Items as Reward[]
}

function getRewardByName(name: string, list: Reward[]): Reward {
  return list.find(item => item.name === name) as Reward;
}

export default async function redeemReward(rewardName: string): Promise<Event[]> {

  const dateNow = Date.now();
  const rewardList = await getRewardList();
  const reward = getRewardByName(rewardName, rewardList);

  const putEventParams = {
    TableName: process.env.EVENTS_TABLE as string,
    Item: {
      id: dateNow.toString(),
      name: reward.name,
      points: reward.points,
      date: new Date(dateNow).toISOString(),
    },
  };

  await dynamoDb.put(putEventParams).promise();

  const eventList = await getEvents() as Event[];
  return eventList.sort((a, b) => ~~a.id - ~~b.id);
}
