import { createContext, useEffect, useState } from "react";
import { Timestamp } from "../../utils/misc";

export interface Event {
  name: string;
  points: number;
  date: Timestamp;
}

type Frequency = "day" | "month" | "year";

export interface Activity {
  name: string;
  points: number;
  frequency: Frequency;
}

export interface Reward {
  name: string;
  points: number;
}

export interface PointsProgramActions {
  getEvents(): Promise<Event[]>;
  getActivities(): Promise<Activity[]>;
  getRewards(): Promise<Reward[]>;
  doActivity(activityName: string): Promise<Event[]>;
  redeemReward(rewardName: string): Promise<Event[]>;
}

export interface PointsProgramState {
  isLoading: boolean;
  events: Event[];
  activities: Activity[];
  rewards: Reward[];
  doActivity(activityName: string): Promise<void>;
  redeemReward(rewardName: string): Promise<void>;
}

const defaultState: PointsProgramState = {
  isLoading: true,
  events: [],
  activities: [],
  rewards: [],
  doActivity: async () => undefined,
  redeemReward: async () => undefined,
};

export const PointsProgramContext =
  createContext<PointsProgramState>(defaultState);

interface Props {
  children?: React.ReactNode;
  provider: PointsProgramActions;
}

export default function PointsProgramProvider({
  children,
  provider,
}: Props): JSX.Element {
  const [programState, setProgramState] = useState(defaultState);

  const doActivity = async (activityName: string) => {
    setProgramState((current) => ({ ...current, isLoading: true }));
    const events = await provider.doActivity(activityName);
    setProgramState((current) => ({ ...current, isLoading: false, events }));
  };

  const redeemReward = async (rewardName: string) => {
    setProgramState((current) => ({ ...current, isLoading: true }));
    const rewards = await provider.redeemReward(rewardName);
    setProgramState((current) => ({ ...current, isLoading: false, rewards }));
  };

  // fetch initial data
  useEffect(() => {
    void (async () => {
      const events = await provider.getEvents();
      const activities = await provider.getActivities();
      const rewards = await provider.getEvents();

      setProgramState({
        isLoading: false,
        events,
        activities,
        rewards,
        doActivity,
        redeemReward,
      });
    })();
  });

  return (
    <PointsProgramContext.Provider value={programState}>
      {children}
    </PointsProgramContext.Provider>
  );
}
