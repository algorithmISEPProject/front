import React from "react";
import Image, { StaticImageData } from "next/image";

import mockProfilPic from "@/assets/mockProfilPic.png";
import { formatDate } from "@/utils/dateFormatter";

export interface EventsProps {
  id: string;
  name: string;
  eventImage: any;
  description: string;
  date: string;
  createdAt: Date;
  attendees: any;
  attendeesAggregate: any;
}

export default function EventComp(props: EventsProps) {
  return (
    <div className="w-full min-w-96 flex bg-inputField-background rounded-md border border-componentOutline p-2 justify-center items-center">
      <div className="flex w-full items-center gap-3">
        <Image
          alt="userIcon"
          src={mockProfilPic}
          height={64}
          width={64}
          className="rounded"
        />
        <div className="flex flex-col text-subTitle items-left">
          <div className=" text-white text-lg">{props.name}</div>
          <div className="flex flex-row ">{formatDate(props.date)}</div>
        </div>
      </div>
      <button className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg">
        Participate
      </button>
    </div>
  );
}
