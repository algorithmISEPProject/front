import React from "react";
import Image from "next/image";

import userIcon from "../../../public/userIcon.svg";
import moreIcon from "../../../public/moreIcon.svg";
import commentIcon from "../../../public/commentIcon.svg";
import likeIcon from "../../../public/likeIcon.svg";

export interface FeedProps {
  userImage?: String | undefined;
  userPseudo: String;
  userName: String;
  content?: String;
  numberLikes?: number | 0;
  numberComments?: number | 0;
}

export default function Feed(props: FeedProps) {
  return (
    <div>
      <div className="flex flex-col bg-componentBackground my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="flex flex-row items-center">
          <div className="flex flex-row space-x-2 items-center w-full">
            <Image alt="userIcon" src={userIcon} height={40} width={40} />
            <div className="text-white">{props.userPseudo}</div>
            <div>{props.userName}</div>
            <div>-</div>
            <div>1h</div>
          </div>
          <div className="right-0 mr-2">
            <Image alt="moreIcon" src={moreIcon} />
          </div>
        </div>

        <div className="m-4 text-white text-xl">
          <div>{props.content}</div>
        </div>
        <div className="flex flex-row w-1/2 space-x-8 mt-2">
          <div className="flex flex-row">
            <Image alt="commentIcon" src={commentIcon} />
            <div>{props.numberComments}</div>
          </div>
          <div className="flex flex-row">
            <Image alt="likeIcon" src={likeIcon} />
            <div>{props.numberLikes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
