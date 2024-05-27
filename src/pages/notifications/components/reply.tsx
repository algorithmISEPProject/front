import React from "react";
import Image, { StaticImageData } from "next/image";

import userIcon from "../../../assets/userIcon.svg";
import moreIcon from "../../../assets/moreIcon.svg";
import commentIcon from "../../../assets/commentIcon.svg";
import likeIcon from "../../../assets/likeIcon.svg";
import { defaultProfilPicture } from "@/utils/defaultImages";

export interface ReplyProps {
  firstName: string;
  username: string;
  avatar: string;
  content: string;
  aggregateLikes: any;
  aggregateComments: any;
}

export default function Reply(props: ReplyProps) {
  return (
    <div>
      <div className="flex flex-col bg-componentBackground gap-5 p-5 rounded-xl border-1 border-componentOutline text-subTitle">
        <div className="flex items-center gap-5">
          <div className="flex space-x-3 items-center w-full">
            <img
              alt="userIcon"
              src={props.avatar || defaultProfilPicture}
              height={40}
              width={40}
              className="border border-btn-outline rounded w-10 h-10"
            />

            <div className="flex-col">
              <div className="flex items-center space-x-2">
                <div className="text-white">Dimitar</div>
                <div>@Dimitroweb</div>
                <div className="text-subtileText">-</div>
                <div className="text-subtileText">1h</div>
              </div>
              <div className="flex flex-row space-x-1 text-sm">
                <div>Replying to</div>
                <div className="text-green-500">@vic_dub</div>
              </div>
            </div>
          </div>
          <div className="right-0 mr-2">
            <Image alt="moreIcon" src={moreIcon} />
          </div>
        </div>

        <div className=" text-white text-xl">
          <div>Bonjour c'est moi</div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Image alt="commentIcon" src={commentIcon} />
            <div className="text-white">40</div>
          </div>
          <div className="flex items-center gap-2">
            <Image alt="likeIcon" src={likeIcon} />
            <div className="text-white">40</div>
          </div>
        </div>
      </div>
    </div>
  );
}
