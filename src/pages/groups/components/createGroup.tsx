import React from "react";

import plusIcon from "@/assets/plusIcon.svg";
import Image from "next/image";

export default function CreateGroup() {
  return (
    <button className="rounded-xl w-full flex items-center border-1 bg-componentBackground border-componentOutline gap-5 p-5">
      <Image alt="plusIcon" src={plusIcon} />
      <div className="text-subTitle">Create a new group</div>
    </button>
  );
}
