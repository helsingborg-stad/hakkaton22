import Event from "../types/event";
import getEvents from "../getEvents";

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
};

export async function handler(
  appSyncEvent: AppSyncEvent
): Promise<Record<string, unknown>[] | Event[] | undefined> {
  switch (appSyncEvent.info.fieldName) {
    case "getEvents":
      return await getEvents();
    default:
      return [];
  }
}
