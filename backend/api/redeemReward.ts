import { dynamoDb, getByName } from "./libs";
import getEvents from "./getEvents";
import getAllRewards from "./getAllRewards";
import Event from "./types/event";
import Reward from "./types/reward";

export default async function redeemReward(rewardName: string): Promise<Event[]> {

  const dateNow = Date.now();
  const rewardList = await getAllRewards() as Reward[];
  const reward = getByName(rewardName, rewardList) as Reward;

  const putEventParams = {
    TableName: process.env.EVENTS_TABLE as string,
    Item: {
      id: dateNow.toString(),
      name: reward.name,
      points: -reward.points,
      date: new Date(dateNow).toISOString(),
    },
  };

  await dynamoDb.put(putEventParams).promise();

  const eventList = await getEvents() as Event[];
  return eventList.sort((a, b) => ~~a.id - ~~b.id);
}
