import { IPointsProgram } from "../IPointsProgram";
import { IsOpenActivity } from "./IsOpenActivity";
import { LOCAL_ACTIVITIES_JSON } from "./json/LOCAL_ACTIVITIES_JSON";
import { LOCAL_TRANSACTIONS_JSON } from "./json/LOCAL_TRANSCATIONS_JSON";
import { LocalActivityType } from "./types/LocalActivityType";
import { LocalTransactionType } from "./types/LocalTransactionType";
import { UserActivity } from "../UserActivity";

export const localPointsProgram = (
  intialActivites: LocalActivityType[] = LOCAL_ACTIVITIES_JSON,
  initialTransactions: LocalTransactionType[] = LOCAL_TRANSACTIONS_JSON
): IPointsProgram => {
  
  const activities = [...intialActivites];
  let transactions = [...initialTransactions];

  const registerTransaction = (transaction: LocalTransactionType) => {
    transactions = [...transactions, transaction];
  };

  const queryUserActivities = async (): Promise<UserActivity[]> =>
    [...activities].map((activity) => ({
      name: activity.name,
      points: activity.points,
      frequency: activity.frequency,
      isDone: !IsOpenActivity(activity, transactions),
    }));

  const registerUserActivity = async (name: string) =>
    [...new Set(activities.filter((a) => a.name === name))]
      .filter((activity) => activity !== null)
      .reduce(
        (acc, { points }) =>
          registerTransaction({
            name,
            date: new Date().getTime(),
            value: points,
          }) === null && acc,
        true
      );

  return {
    queryUserActivities,
    registerUserActivity,
  };
};
