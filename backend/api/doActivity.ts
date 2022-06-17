import { dynamoDb, getByName } from "./libs";
import getEvents from "./getEvents";
import getAllActivities from "./getAllActivities";
import Event from "./types/event";
import Activity from "./types/activity";

export default async function doActivity(activityName: string): Promise<Event[]> {

  const dateNow = Date.now();
  const activityList = await getAllActivities() as Activity[];
  const activity = getByName(activityName, activityList) as Activity;

  const putEventParams = {
    TableName: process.env.EVENTS_TABLE as string,
    Item: {
      id: dateNow.toString(),
      name: activity.name,
      points: activity.points,
      date: new Date(dateNow).toISOString(),
    },
  };

  await dynamoDb.put(putEventParams).promise();

  const eventList = await getEvents() as Event[];
  return eventList.sort((a, b) => ~~a.id - ~~b.id);
}
