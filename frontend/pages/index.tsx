import React, { useState } from "react";
import { Checklist } from "../components/Checklist";
import Layout from "../components/Layout";
import { useContext, useEffect } from "react";
import { PointsProgramContext } from "../services/pointsProgram/PointsProgramContext";
import { UserActivity } from "../services/pointsProgram/UserActivity";

const user = {
  firstName: "Petter",
  lastName: "Petterson",
  district: "Mariapark",
};

export default function Home(): JSX.Element {
  const { queryUserActivities, registerUserActivity } =
    useContext(PointsProgramContext);
  const [isLoading, setLoading] = useState(true);
  const [userActivities, setUserActivities] = useState<UserActivity[]>([]);

  useEffect(() => {
    setLoading(true);
    queryUserActivities()
      .then((activities) => {
        setUserActivities(activities);
        setLoading(false);
      })
      .catch((e) => setLoading(false) === null && console.error(e));
  }, [queryUserActivities]);

  const handleClickItem = (activityName: string) => {
    [isLoading]
      .filter((loading) => !loading)
      .forEach(() => {
        setLoading(true);
        registerUserActivity(activityName)
          .then(() => queryUserActivities())
          .then((activities) => {
            setUserActivities(activities);
            setLoading(false);
          })
          .catch((e) => setLoading(false) === null && console.error(e));
      });
  };

  const checklistItems = userActivities.map(
    ({ name, points, isDone, frequency }) => ({
      id: name,
      title: name,
      checked: isDone,
      point: points,
      frequency: frequency.toString(),
      tags: [],
      onClickHandler: !isDone ? handleClickItem : () => undefined,
    })
  );

  const points = checklistItems.reduce(
    (acc, item) => (item.checked ? acc + item.point : acc),
    0
  );

  return (
    <Layout>
      <div className="m-4 rounded-xl bg-white shadow-md flex flex-row justify-between p-4 text-neutral-800 items-center">
        <div>
          <p className="text-xl font-semibold">{user.firstName}</p>
          <p>{user.district}</p>
        </div>
        <p className="text-xs font-semibold">MINA POÄNG: {points}p</p>
      </div>

      <div className="m-4 rounded-xl bg-white shadow-md">
        <div className="border-b-4 border-green p-3">
          <h2 className="text-md font-semibold text-neutral-800">
            Tillgängliga aktiviteter
          </h2>
        </div>

        <div className="p-4">
          <Checklist>
            {checklistItems.map((checklistItem) => (
              <Checklist.Item {...checklistItem} key={checklistItem.id} />
            ))}
          </Checklist>
        </div>
      </div>
    </Layout>
  );
}
