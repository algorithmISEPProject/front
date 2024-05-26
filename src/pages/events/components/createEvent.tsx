import React from "react";

import plusIcon from "@/assets/plusIcon.svg";
import Image from "next/image";

export default function CreateEvent() {
  return (
    <div className="">
      <button className="rounded-xl flex items-center w-full border-1 bg-componentBackground border-componentOutline gap-5 p-5">
        <Image alt="plusIcon" src={plusIcon} width={10} height={10} />
        <div className="text-subTitle">Create a new event</div>
      </button>
    </div>
  );
}
