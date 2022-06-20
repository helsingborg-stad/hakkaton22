import { UserActivity } from "./UserActivity";

export interface IPointsProgram {
  queryUserActivities: () => Promise<UserActivity[]>;
  registerUserActivity: (name: string) => Promise<boolean>;
}
