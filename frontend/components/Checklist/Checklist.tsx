import React from "react";
import { ChecklistProvider } from "./ChecklistContext";
import { ChecklistItem, ItemInterface } from "./ChecklistItem";

interface BodyProps {
  children: React.ReactNode;
}

function Body({ children }: BodyProps): JSX.Element {
  return <div className="flex flex-col space-y-3">{children}</div>
}

interface ChecklistProps {
  children: React.ReactNode;
  data: ItemInterface[];
  setData: (value: ItemInterface[]) => void;
}

function Checklist({
  data,
  setData,
  children,
}: ChecklistProps) {
  const checkItem = (id: string) => {
    const newData = data.map((item: ItemInterface) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setData(newData);
  };

  return (
    <ChecklistProvider value={{ checkItem }}>
      <Body>{children}</Body>
    </ChecklistProvider>
  );
};

Checklist.Item = ChecklistItem;
Checklist.Body = Body;

export { Checklist };
