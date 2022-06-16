import { dynamoDb } from "./libs";
import getEvents from "./getEvents";
import Event from "./types/event";
import Activity from "./types/activity";

async function getActivityList(): Promise<Activity[]> {

  const scanParams = {
    TableName: process.env.ACTIVITIES_TABLE as string,
  };

  const result = await dynamoDb.scan(scanParams).promise();
  return result.Items as Activity[]
}

function getActivityByName(name: string, list: Activity[]): Activity {
  return list.find(item => item.name === name) as Activity;
}

export default async function doActivity(activityName: string): Promise<Event[]> {

  const dateNow = Date.now();
  const activityList = await getActivityList();
  const activity = getActivityByName(activityName, activityList);

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
