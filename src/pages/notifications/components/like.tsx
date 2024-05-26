import React from "react";
import Image, { StaticImageData } from "next/image";

import userIcon from "../../../assets/userIcon.svg";
import moreIcon from "../../../assets/moreIcon.svg";
import commentIcon from "../../../assets/commentIcon.svg";
import likeIcon from "../../../assets/likeIcon.svg";
import likeRedIcon from "../../../assets/likeRedIcon.svg";

export interface LikeProps {
  username: string;
  avatar?: any;
  content: string;
}

export default function Like(props: LikeProps) {
  return (
    <div>
      <div className="flex flex-col bg-componentBackground gap-5 p-5 rounded-xl border-1 border-componentOutline text-subTitle">
        <div className="flex items-center gap-5">
          <div className="flex flex-col space-y-4 w-full space-x-2">
            <div className="flex items-center">
              <div className="flex space-x-2  items-center w-full">
                <Image
                  alt="userIcon"
                  src={props?.avatar || ""}
                  height={40}
                  width={40}
                />
                <div className="text-white">Dimitar</div>
                <div>Liked your reply</div>
              </div>
              <div className="">
                <Image
                  alt="moreIcon"
                  src={likeRedIcon}
                  height={30}
                  width={30}
                />
              </div>
            </div>
            <div>Bonjour c'est moi</div>
          </div>
        </div>
      </div>
    </div>
  );
}
