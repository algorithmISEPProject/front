import React from "react";
import Image, { StaticImageData } from "next/image";

import userIcon from "@/assets/userIcon.svg";
import groupNumberIcon from "@/assets/groupNumberIcon.svg";

import mockProfilPic from "@/assets/mockProfilPic.png";

export interface GroupsProps {
  eventImage?: string;
  description?: number;
  createdAt?: boolean;
  id: string;
  name: string;
  members: any;
  membersAggregate: any;
}

export default function GroupComponent(props: GroupsProps) {
  return (
    <div className="w-full flex min-w-96 bg-inputField-background rounded-md border border-componentOutline p-2 justify-center items-center">
      <div className="flex w-full items-center gap-3">
        <Image
          alt="userIcon"
          src={mockProfilPic}
          height={64}
          width={64}
          className="rounded"
        />

        <div className="flex flex-col text-subTitle items-left">
          <div className="text-white">{props.name}</div>
          <div className="flex">
            Join {props.membersAggregate?.count} members
          </div>
        </div>
      </div>

      <button className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg">
        Join
      </button>
    </div>
  );
}
