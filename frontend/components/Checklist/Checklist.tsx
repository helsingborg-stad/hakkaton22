import React from "react";
import { ChecklistItem } from "./ChecklistItem";

interface BodyProps {
  children: React.ReactNode;
}

function Body({ children }: BodyProps): JSX.Element {
  return <div className="flex flex-col space-y-3">{children}</div>
}

interface ChecklistProps {
  children: React.ReactNode;
}

function Checklist({
  children,
}: ChecklistProps) {
  return (
    <Body>{children}</Body>
  );
};

Checklist.Item = ChecklistItem;
Checklist.Body = Body;

export { Checklist };
