import React from "react";
import Image, { StaticImageData } from "next/image";

import userIcon from "../../../assets/userIcon.svg";
import moreIcon from "../../../assets/moreIcon.svg";
import commentIcon from "../../../assets/commentIcon.svg";
import likeIcon from "../../../assets/likeIcon.svg";
import shareIcon from "../../../assets/shareIcon.svg";

export interface FollowProps {
  firstName?: string;
  username?: string;
  avatar?: any;
  profileName?: string; //pas sûr de ça
}

export default function Follow(props: FollowProps) {
  return (
    <div>
      <div className="flex flex-col bg-componentBackground gap-5 p-5 rounded-xl border-1 border-componentOutline text-subTitle">
        <div className="flex items-center">
          <div className="flex space-x-2 items-center w-full">
            <Image
              alt="userIcon"
              src={props.userImage || ""}
              height={40}
              width={40}
            />

            <div className="text-white">Dimitar</div>
            <div>followed you</div>
          </div>
          <div className="">
            <Image alt="moreIcon" src={shareIcon} width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
