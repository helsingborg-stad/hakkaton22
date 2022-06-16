import Reward from "../types/reward";
import Event from "../types/event";
import getAllRewards from "../getAllRewards";
import redeemReward from "../redeemReward";

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    rewardName: string;
  };
};

export async function handler(
  appSyncEvent: AppSyncEvent
): Promise<Record<string, unknown>[] | Reward[] | Event[] | undefined> {
  switch (appSyncEvent.info.fieldName) {
    case "getAllRewards":
      return await getAllRewards();
    case "redeemReward":
      return await redeemReward(appSyncEvent.arguments.rewardName);
    default:
      return [];
  }
}
