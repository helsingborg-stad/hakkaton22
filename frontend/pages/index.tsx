import React, { useState } from "react";
import { Checklist } from "../components/Checklist";
import Layout from "../components/Layout";

const items = [
  {
    id: "1",
    title: "Gå 10 000 steg",
    checked: false,
    point: 4,
    tags: ["Hälsa & välbefinnande"],
    frequency: "återkommande dagligen"
  },
  {
    id: "2",
    title: "Besök Dunkers kulturhus",
    checked: false,
    point: 10,
    tags: ["Kultur"],
    frequency: "återkommande dagligen"
  },
  {
    id: "3",
    title: "Lämna skräp på ÅVC",
    checked: false,
    point: 15,
    tags: ["Miljö"],
    frequency: "återkommande årligen"
  },
  {
    id: "4",
    title: "Åk kollektivt",
    checked: false,
    point: 12,
    tags: ["Kategori"],
    frequency: "återkommande dagligen"
  }
];

const user = {
  firstName: "Petter",
  lastName: "Petterson",
  district: "Mariapark",
};

export default function Home(): JSX.Element {
  const [checklistItems, setChecklistItems] = useState(items);
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
        <p className="text-xs font-semibold">
          MINA POÄNG: {points}p
        </p>
      </div>

      <div className="m-4 rounded-xl bg-white shadow-md">

        <div className="border-b-4 border-green p-3">
          <h2 className="text-md font-semibold text-neutral-800">
            Tillgängliga aktiviteter
          </h2>
        </div>

        <div className="p-4">
          <Checklist data={checklistItems} setData={setChecklistItems}>
            {checklistItems.map((checklistItem) => (
              <Checklist.Item
                {...checklistItem}
                key={checklistItem.id}
              />
            ))}
          </Checklist>
        </div>
      </div>
    </Layout >
  );
}
