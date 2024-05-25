import userIcon from "@/assets/userIcon.svg";

import Image, { StaticImageData } from "next/image";

import mockProfilPic from "@/assets/mockProfilPic.png";

import React from "react";

export interface SuggestionsProps {
  userName: string;
  userImage?: StaticImageData | undefined;
  hobby: string;
}

export default function SuggestionComp({ userName, hobby }: SuggestionsProps) {
  return (
    <div className="w-full flex min-w-96  bg-inputField-background rounded-md border border-componentOutline p-2 justify-center items-center">
      <div className="flex w-full items-center gap-3">
        <Image
          alt="userIcon"
          src={mockProfilPic}
          height={64}
          width={64}
          className="rounded"
        />
        <div className="flex flex-col text-subTitle ">
          <div className=" text-white">{userName}</div>
          <div className="flex flex-row gap-1">
            Loves <span className="text-green-500">{hobby}</span>
            like you
          </div>
        </div>
      </div>
      <button className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg">
        See
      </button>
    </div>
  );
}
