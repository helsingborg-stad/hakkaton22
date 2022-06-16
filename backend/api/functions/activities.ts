import Activity from "../types/activity";
import getAllActivities from "../getAllActivities";
import doActivity from "../doActivity";

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    activityName: string;
  };
};

export async function handler(
  appSyncEvent: AppSyncEvent
): Promise<Record<string, unknown>[] | Activity | string | null | undefined> {
  switch (appSyncEvent.info.fieldName) {
    case "getAllActivities":
      return await getAllActivities();
    case "doActivity":
      return await doActivity(appSyncEvent.arguments.activityName);
    default:
      return [];
  }
}
