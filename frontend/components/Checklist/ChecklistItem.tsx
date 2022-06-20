import React from "react";
import Image from "next/image";


export interface CheckListItemProps {
  id: string;
  title: string;
  checked: boolean;
  point: number;
  tags: string[];
  frequency: string;
  onClickHandler: (id : string) => void
}

function ChecklistItem({
  id,
  title,
  checked,
  point,
  tags,
  frequency,
  onClickHandler,
}: CheckListItemProps): JSX.Element {
  if (checked) {
    return (
      <div
        className="flex flex-row justify-between items-center border-2 border-green rounded-xl p-4 bg-green-lightest
        drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
        key={id}
      >
        <div className="flex flex-col space-y-1">
          <h3 className="text-md text-neutral-800">
            {title}
          </h3>
          <h3 className="text-xs text-neutral-500 font-bold">
            {tags}
          </h3>
          <h3 className="text-xs text-green font-bold">
            {point} poäng
          </h3>
          <h3 className="text-xs text-neutral-500 italic">
            giltighet: {frequency}
          </h3>
        </div>

        <Image src="/checked.svg" alt="check" width={25} height={20} />

      </div>
    );
  }

  return (
    <div
      className="flex flex-row justify-between items-center border-2 border-white rounded-xl p-4 bg-white
      drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
      key={id}
      onClick={() => onClickHandler(id)}
    >
      <div className="flex flex-col space-y-1">
        <h3 className="text-md text-neutral-800">
          {title}
        </h3>
        <h3 className="text-xs text-neutral-500 font-bold">
          {tags}
        </h3>
        <h3 className="text-xs text-green font-bold">
          {point} poäng
        </h3>
        <h3 className="text-xs text-neutral-500 italic">
          giltighet: {frequency}
        </h3>
      </div>

      <Image src="/unchecked.svg" alt="check" width={25} height={25} />
    </div>
  );
};

export { ChecklistItem };
