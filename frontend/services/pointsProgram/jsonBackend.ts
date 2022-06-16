import { dateToTimestamp, getNowTimestamp, wait } from "../../utils/misc";
import { Activity, Event, PointsProgramActions, Reward } from "./pointsProgram";

const events: Event[] = [
  {
    name: "Besök Dunkers",
    date: dateToTimestamp("2022-06-12"),
    points: 30,
  },
  {
    name: "Gå 10 000 steg",
    date: dateToTimestamp("2022-06-13"),
    points: 5,
  },
  {
    name: "Kulturkort",
    date: dateToTimestamp("2022-06-14"),
    points: -8,
  },
];

const activitites: Activity[] = [
  {
    name: "Besök Dunkers",
    frequency: "month",
    points: 30,
  },
  {
    name: "Gå 10 000 steg",
    frequency: "day",
    points: 5,
  },
  {
    name: "Ta ett dopp",
    frequency: "day",
    points: 8,
  },
  {
    name: "Anmäl en skada",
    frequency: "year",
    points: 15,
  },
];

const rewards: Reward[] = [
  {
    name: "Kulturkort",
    points: 8,
  },
  {
    name: "3-rätters med Palle",
    points: 1337,
  },
];

const Actions: PointsProgramActions = {
  async getEvents() {
    await wait(1000);
    return events;
  },
  async getActivities() {
    await wait(1000);
    return activitites;
  },
  async getRewards() {
    await wait(1000);
    return rewards;
  },
  async doActivity(activityName) {
    console.log("doActivity", activityName);
    const newActivity = activitites.find(
      (activity) => activity.name === activityName
    );
    if (newActivity) {
      events.push({
        name: newActivity.name,
        points: newActivity.points,
        date: getNowTimestamp(),
      });
    }
    return events;
  },
  async redeemReward(rewardName) {
    console.log("redeemReward", rewardName);
    const newReward = rewards.find((reward) => reward.name === rewardName);
    if (newReward) {
      events.push({
        name: newReward.name,
        points: newReward.points,
        date: getNowTimestamp(),
      });
    }
    return events;
  },
};

export default Actions;
