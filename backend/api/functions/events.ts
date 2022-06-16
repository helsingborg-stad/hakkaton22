import Event from "../types/event";
import getEvents from "../getEvents";

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    event: Event;
    eventId: string;
  };
};

export async function handler(
  appSyncEvent: AppSyncEvent
): Promise<Record<string, unknown>[] | Event | string | null | undefined> {
  switch (appSyncEvent.info.fieldName) {
    case "getEvents":
      return await getEvents();
    default:
      return [];
  }
}
