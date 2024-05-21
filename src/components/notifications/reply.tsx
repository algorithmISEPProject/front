import React from "react";
import Image, { StaticImageData } from "next/image";

import userIcon from "../../../public/userIcon.svg";
import moreIcon from "../../../public/moreIcon.svg";
import commentIcon from "../../../public/commentIcon.svg";
import likeIcon from "../../../public/likeIcon.svg";

export interface ReplyProps {
  userName: string;
  userPseudo: string;
  userImage?: StaticImageData | undefined;
  profilePseudo: string;
  content: string;
  likesNumber: number;
  commentsNumber: number;
}

export default function Reply(props: ReplyProps) {
  return (
    <div>
      <div className="flex flex-col bg-componentBackground my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="flex flex-row items-center">
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
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2">
                <div className="text-white">{props.userName}</div>
                <div>@{props.userPseudo}</div>
                <div>-</div>
                <div>1h</div>
              </div>
              <div className="flex flex-row space-x-2">
                <div>Replying to</div>
                <div className="text-green-500">@{props.profilePseudo}</div>
              </div>
            </div>
          </div>
          <button className="right-0 mr-2">
            <Image alt="moreIcon" src={moreIcon} />
          </button>
        </div>

        <div className="m-4 text-white text-xl">
          <div>{props.content}</div>
        </div>
        <div className="flex flex-row w-1/2 space-x-8 mt-2">
          <div className="flex flex-row">
            <Image alt="commentIcon" src={commentIcon} />
            <div className="text-white">{props.commentsNumber}</div>
          </div>
          <div className="flex flex-row">
            <Image alt="likeIcon" src={likeIcon} />
            <div className="text-white">{props.likesNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
