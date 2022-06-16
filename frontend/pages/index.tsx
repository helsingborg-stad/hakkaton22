import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import { Checklist } from "../components/Checklist";

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
    frequency: "MONTH"
  },
  {
    id: "3",
    title: "Checklist item 3",
    checked: false,
    point: 15,
    tags: ["Tag1", "Tag2"],
    frequency: "DAY"
  }
];

export default function Home(): JSX.Element {
  const [checklistItems, setChecklistItems] = useState(items);

  return (
    <div className="bg-green-background">
      <Head>
        <title>Invånarpoängen</title>
        <meta name="description" content="Invånarpoängen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <Header />

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
      </main>
    </div>
  );
}
