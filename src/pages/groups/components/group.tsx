import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useState } from "react";

export interface GroupsProps {
  groupsName?: string;
  groupsNumber?: number;
  groupImage?: StaticImageData | undefined;
}

export default function Group(props: GroupsProps) {
  const [groupJoined, setGroupJoined] = useState(false);

  return (
    <div className="flex w-full flex-col p-5 space-y-4 bg-componentBackground border-1 border-btn-outline rounded-xl">
      <Image
        alt="groupIcon"
        src={props?.groupImage || ""}
        height={36}
        width={36}
        className="rounded"
      />
      <div className="text-white">{props.groupsName}</div>

      {groupJoined ? (
        <div className="flex items-center w-full">
          <div className="flex items-center w-full ">
            <div className="text-subTitle ">{props.groupsNumber} members</div>
          </div>
          <button className="text-subTitle bg-btn-background h-9 w-32 p-1 border-1 border-btn-outline rounded-xl">
            Leave Group
          </button>
        </div>
      ) : (
        <div className="flex items-center w-full">
          <div className="flex items-center w-full">
            <div className="text-subTitle">{props.groupsNumber} members</div>
          </div>
          <div className=" flex space-x-2">
            <button className="text-subTitle bg-btn-background h-9 w-32 p-1 border-1 border-btn-outline rounded-xl">
              Learn More
            </button>
            <button className="text-subTitle bg-btn-background  h-9 w-32 p-1 border-1 border-btn-outline rounded-xl">
              Join Group
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
