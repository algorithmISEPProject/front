import React from "react";
import Image, { StaticImageData } from "next/image";

import userIcon from "@/assets/userIcon.svg";
import moreIcon from "@/assets/moreIcon.svg";
import commentIcon from "@/assets/commentIcon.svg";
import likeIcon from "@/assets/likeIcon.svg";
import shareIcon from "@/assets/shareIcon.svg";

import mockProfilPic from "@/assets/mockProfilPic.png";

export interface FollowProps {
  userName?: string;
  userPseudo?: string;
  userImage?: StaticImageData | undefined;
  profileName?: string; //pas sûr de ça
}

export default function Follow(props: FollowProps) {
  return (
    <div>
      <div className="flex flex-col bg-componentBackground p-5 rounded-xl border border-componentOutline text-subTitle">
        <div className="flex items-center">
          <div className="flex space-x-2 items-center w-full">
            <Image
              alt="userIcon"
              src={mockProfilPic || userIcon}
              height={32}
              width={32}
              className="rounded"
            />
            <div className="text-white">{props.userName}</div>
            <div>followed you</div>
          </div>

          <Image alt="moreIcon" src={shareIcon} />
        </div>
      </div>
    </div>
  );
}
