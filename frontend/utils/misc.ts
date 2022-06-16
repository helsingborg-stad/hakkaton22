import dayjs from "dayjs";

export type Image = string; // Base64
export type Timestamp = number; // unix timestamp

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function dateToTimestamp(date: string): Timestamp {
  return dayjs(date, { utc: true }).unix();
}

export function getNowTimestamp(): Timestamp {
  return dayjs().unix();
}
