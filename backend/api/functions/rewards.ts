import Reward from "../types/reward";
import getAllRewards from "../getAllRewards";

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    reward: Reward;
    rewardId: string;
  };
};

export async function handler(
  appSyncEvent: AppSyncEvent
): Promise<Record<string, unknown>[] | Reward | string | null | undefined> {
  switch (appSyncEvent.info.fieldName) {
    case "getAllRewards":
      return await getAllRewards();
    default:
      return [];
  }
}
