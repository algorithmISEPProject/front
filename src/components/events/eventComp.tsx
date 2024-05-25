import React from "react";
import Image, { StaticImageData } from "next/image";

import mockProfilPic from "@/assets/mockProfilPic.png";

export interface EventsProps {
  eventName: string;
  eventImage: StaticImageData | undefined;
  date: string;
}

export default function EventComp({ eventName, date }: EventsProps) {
  return (
    <div className="w-full min-w-96 flex bg-inputField-background rounded-md border border-componentOutline p-2 justify-center items-center">
      <div className="flex w-full items-center gap-2">
        <Image
          alt="userIcon"
          src={mockProfilPic}
          height={64}
          width={64}
          className="rounded"
        />
        <div className="flex flex-col text-subTitle items-left">
          <div className="ml-2 text-white">{eventName}</div>
          <div className="flex flex-row ml-2">{date}</div>
        </div>
      </div>
      <button className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg">
        Join
      </button>
    </div>
  );
}
