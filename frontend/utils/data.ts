import dayjs from "dayjs";

export type Image = string; // Base64
export type Timestamp = number; // unix timestamp

export interface ActivityProgress {
  progress?: number;
  required?: number;
  completionDate?: Timestamp;
}

export interface Activity {
  id: number;
  name: string;
  points: number;
  startDate: Timestamp;
  endDate: Timestamp;
  progress: ActivityProgress;
  image?: Image;
  maxActivations?: number;
}

export interface Reward {
  id: number;
  name: string;
  description: string;
  icon: Image;
  cost: number;
  maxRedemptions?: number;
}

export function dateToTimestamp(date: string): Timestamp {
  return dayjs(date, { utc: true }).unix();
}

export async function getActivities(): Promise<Activity[]> {
  return [
    {
      id: 0,
      name: "Gå 10 000 steg",
      points: 30,
      startDate: dateToTimestamp("2022-06-14"),
      endDate: dateToTimestamp("2022-06-17"),
      progress: {
        progress: 2300,
        required: 10000,
      },
    },
    {
      id: 1,
      name: "Besök dunkers",
      points: 10,
      startDate: dateToTimestamp("2022-06-14"),
      endDate: dateToTimestamp("2022-06-17"),
      progress: {},
    },
    {
      id: 2,
      name: "Felanmäl i appen",
      points: 4,
      startDate: dateToTimestamp("2022-06-14"),
      endDate: dateToTimestamp("2022-06-17"),
      progress: {},
    },
    {
      id: 3,
      name: "Lämna skräp på ÅVC",
      points: 4,
      startDate: dateToTimestamp("2022-06-14"),
      endDate: dateToTimestamp("2022-06-17"),
      progress: {},
    },
    {
      id: 4,
      name: "Åk kollektivt",
      points: 10,
      startDate: dateToTimestamp("2022-06-14"),
      endDate: dateToTimestamp("2022-06-17"),
      progress: {},
    },
  ];
}

export interface User {
  name: string;
  image: Image;
  points: number;
}

export async function getDailyActivities() {
  return;
}

export async function getCompletedActivities() {
  return;
}

export async function getAvailablePoints() {
  return;
}

export async function getAvailableRewards() {
  return;
}

export async function buyReward() {
  return;
}

export async function getRedeemedRewards() {
  return;
}
