import Activity from "../activity";
import getAllActivities from "../getAllActivities";

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    activity: Activity;
    activityId: string;
  };
};

export async function handler(
  appSyncEvent: AppSyncEvent
): Promise<Record<string, unknown>[] | Activity | string | null | undefined> {
  switch (appSyncEvent.info.fieldName) {
    case "getAllActivities":
      return await getAllActivities();
    default:
      return [];
  }
}
