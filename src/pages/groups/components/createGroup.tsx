import React from "react";

import plusIcon from "@/assets/plusIcon.svg";
import Image from "next/image";

export default function CreateGroup() {
  return (
    <button className="rounded-xl w-full flex items-center border bg-componentBackground border-componentOutline hover:bg-btn-background transition-all gap-5 p-3 group">
      <Image alt="plusIcon" src={plusIcon} width={12} height={12} />
      <div className="text-subTitle group-hover:text-white">
        Create a new group
      </div>
    </button>
  );
}
