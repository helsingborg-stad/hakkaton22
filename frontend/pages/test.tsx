import React from "react";
import Head from "next/head";
import { useContext } from "react";
import { PointsProgramContext } from "../services/pointsProgram/pointsProgram";

export default function Home(): JSX.Element {
  const { isLoading, events, activities, rewards, doActivity, redeemReward } =
    useContext(PointsProgramContext);

  return (
    <div className="bg-green-background">
      <Head>
        <title>Invånarpoängen</title>
        <meta name="description" content="Invånarpoängen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isLoading && <span>Loading...</span>}
        <br />

        <br />
        <h2>Events</h2>
        <ul>
          {events.map((event, i) => (
            <li key={`${event.name}${i}`}>
              {event.name} {event.points}p {event.date}
            </li>
          ))}
        </ul>

        <br />
        <h2>Activities</h2>
        <ul>
          {activities.map((activity, i) => (
            <li key={`${activity.name}${i}`} style={{ margin: 20 }}>
              <span>
                {activity.name} {activity.points}p {activity.frequency}
              </span>
              <br />
              <button onClick={() => doActivity(activity.name)}>
                doActivity
              </button>
            </li>
          ))}
        </ul>

        <br />
        <h2>Rewards</h2>
        <ul>
          {rewards.map((reward, i) => (
            <li key={`${reward.name}${i}`} style={{ margin: 20 }}>
              <span>
                {reward.name} {reward.points}p
              </span>
              <br />
              <button onClick={() => redeemReward(reward.name)}>
                redeemReward
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
