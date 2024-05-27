import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";

import { IEvent } from "@/interface/typeInterface";

export interface EventsProps {
  eventsName?: string;
  eventsNumber?: number;
  eventsDate?: string;
  eventImage?: StaticImageData | undefined;
  eventsPlace?: string;
}

export default function Event(props: IEvent) {
  const [eventParticipate, setEventParticipate] = useState(false);
  return (
    <div className="flex w-full flex-col space-y-4 p-5 bg-componentBackground border border-btn-outline rounded-xl">
      <div className="h-36 bg-white rounded"></div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <div className="flex space-x-2">
            <div className="text-white">{props.name}</div>
            <div className="text-subTitle">{props.description}</div>
          </div>
          <div className="text-subTitle">{props.location}</div>
        </div>

        {eventParticipate ? (
          <div className="flex items-center ">
            <div className="flex items-center w-full">
              <div className="text-subTitle ">
                {props!.attendees.length} members
              </div>
            </div>
            <button className="text-green-500 tracking-wide p-3 ">
              Participating
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="flex items-center w-full">
              <div className="text-subTitle">
                {props!.attendees.length} members
              </div>
            </div>

            <button className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg">
              Participate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
