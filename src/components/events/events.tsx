import React from "react";
import Image, { StaticImageData } from "next/image";

import userIcon from "../../../public/userIcon.svg";

export interface EventsProps {
  eventName: string;
  eventImage: StaticImageData | undefined;
  date: string;
}

export default function Events(props: EventsProps) {
  const Event = () => {
    return (
      <div className=" flex flex-row my-1 bg-inputField-background rounded-md border-2 border-componentOutline w-5/6 h-24  justify-center items-center">
        <div className="flex flex-row  w-full p-1 ">
          {props.eventImage ? (
            <Image
              alt="userIcon"
              src={props.eventImage}
              height={40}
              width={40}
            />
          ) : (
            <Image alt="userIcon" src={userIcon} height={40} width={40} />
          )}
          <div className="flex flex-col text-subTitle items-left">
            <div className="ml-2 text-white">{props.eventName}</div>
            <div className="flex flex-row ml-2">{props.date}</div>
          </div>
        </div>
        <div className="bg-btn-background text-subTitle m-2 w-3/6">
          <button className="pl-2 pr-4 py-2 border bg-btn-background w-full rounded-lg">
            Join
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col mt-3 center-items">
        <div className="flex flex-col">
          <div className="text-subTitle">Events for you</div>
          <Event />
          <Event />
          <Event />
          <div className="bg-background text-subTitle w-5/6 mt-2">
            <button className="pl-2 pr-4 py-2 border w-full rounded-lg">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
