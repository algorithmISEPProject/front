import React from "react";
import Image, { StaticImageData } from "next/image";

import userIcon from "../../../public/userIcon.svg";
import moreIcon from "../../../public/moreIcon.svg";
import commentIcon from "../../../public/commentIcon.svg";
import likeIcon from "../../../public/likeIcon.svg";
import friendIcon from "../../../public/friendIcon.svg";

export interface FriendProps {
  userName?: string;
  userImage?: StaticImageData | undefined;
}

export default function Friend(props: FriendProps) {
  return (
    <div>
      <div className="flex flex-col bg-componentBackground my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="flex flex-row items-center m-2">
          <div className="flex flex-row space-x-2 items-center w-full">
            {props.userImage ? (
              <Image
                alt="userIcon"
                src={props.userImage}
                height={40}
                width={40}
              />
            ) : (
              <Image alt="userIcon" src={userIcon} height={40} width={40} />
            )}
            <div className="text-white">{props.userName}</div>
            <div>became your friend</div>
          </div>
          <button className="right-0 mr-2">
            <Image alt="moreIcon" src={friendIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
