import React, { useState } from "react";
import Image from "next/image";

import userIcon from "../../../public/userIcon.svg";
import moreIcon from "../../../public/moreIcon.svg";
import commentIcon from "../../../public/commentIcon.svg";
import likeIcon from "../../../public/likeIcon.svg";

import {
  Post,
  User,
  UserPostsQuery,
  UserPostsQueryVariables,
  Comment,
  Hobby,
  Event,
  Group,
} from "../../../pages/api/typeInterface";

export default function Feed(props: Post) {
  const [activeLike, setActiveLike] = useState(false);
  const [activeComment, setActiveComment] = useState(false);

  const onLikeChange = () => {
    setActiveLike(!activeLike);
  };

  const onCommentChange = () => {
    setActiveComment(!activeComment);
  };

  return (
    <div>
      <div className="flex flex-col bg-componentBackground my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="flex flex-row items-center">
          <div className="flex flex-row space-x-2 items-center w-full">
            <Image
              alt="userIcon"
              src={props.imageURL!}
              height={40}
              width={40}
            />
            <div className="text-white">{props.author.username}</div>
            <div>{props.author.username}</div>
            <div>-</div>
            <div>{props.createdAt}</div>
          </div>
          <div className="right-0 mr-2">
            <Image alt="moreIcon" src={moreIcon} />
          </div>
        </div>

        <div className="m-4 text-white text-xl">
          <div>{props.content}</div>
        </div>
        <div className="flex flex-row w-1/2 space-x-8 mt-2">
          <button
            className="flex bg-red-500 flex-row"
            onClick={onCommentChange}
          >
            <Image alt="commentIcon" src={commentIcon} />
            <div>{props.comments.length}</div>
          </button>

          <button className="flex bg-red-500 flex-row" onClick={onLikeChange}>
            <Image alt="likeIcon" src={likeIcon} />
            <div>{props.likes.length}</div>
          </button>
        </div>
      </div>
    </div>
  );
}
