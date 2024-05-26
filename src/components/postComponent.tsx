import Image from "next/image";
import { useState } from "react";

import commentIcon from "@/assets/commentIcon.svg";
import likeIcon from "@/assets/likeIcon.svg";
import moreIcon from "@/assets/moreIcon.svg";
import mockPostImage from "@/assets/mockPostImage.png";

import { Post } from "@/interface/typeInterface";
import { formatRelativeTime } from "@/utils/formatDate";
import { gql, useMutation } from "@apollo/client";
import { useAuth } from "@/context/AuthContext";

export default function PostComponent(props: Post) {
  const [activeLike, setActiveLike] = useState(props.likesAggregate.count > 0);
  const [activeComment, setActiveComment] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const { user } = useAuth();

  const LIKE_POST = gql`
    mutation like_post($id: ID, $userId: ID = ${JSON.stringify(user._id)}) {
      updatePosts(
        where: { id: $id }
        update: {
          likes: { connect: { where: { node: { _id: $userId } } } }
        }
      ) {
        posts {
          likesAggregate {
            count
          }
        }
      }
    }
  `;

  const UNLIKE_POST = gql`
    mutation unlike_post($id: ID, $userId: ID = ${JSON.stringify(user._id)}) {
      updatePosts(
        where: { id: $id }
        update: {
          likes: { disconnect: { where: { node: { _id: $userId } } } }
        }
      ) {
        posts {
          likesAggregate {
            count
          }
        }
      }
    }
  `;

  const [like_post, { loading, error }] = useMutation(LIKE_POST);
  const [unlike_post] = useMutation(UNLIKE_POST);

  if (error) return <p>Error</p>;

  const onLikeChange = () => {
    {
      activeLike
        ? (unlike_post({ variables: { id: props.id } }), setCountLike(0))
        : (like_post({
            variables: { id: props.id },
          }),
          setCountLike(1));
    }
    setActiveLike(!activeLike);
  };

  const onCommentChange = () => {
    setActiveComment(!activeComment);
  };

  return (
    <div>
      <div className="flex flex-col gap-5 bg-componentBackground p-5 rounded-lg border border-componentOutline text-subTitle">
        <div className="flex">
          <div className="flex space-x-2 items-center w-full">
            <Image
              alt="userIcon"
              src={props?.avatar || ""}
              height={40}
              width={40}
            />
            <div className="text-white">{props.author.firstName}</div>
            <div>@{props.author.username}</div>
            <div>-</div>
            <div>{formatRelativeTime(props.createdAt)}</div>
          </div>
          <div className="">
            <Image alt="moreIcon" src={moreIcon} />
          </div>
        </div>

        <div className="text-white text-lg space-y-4">
          <div>{props.content}</div>
          {props.imageURL && (
            <Image
              alt="postImage"
              src={mockPostImage || props.imageURL}
              className="rounded-lg"
            />
          )}
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2" onClick={onCommentChange}>
            <Image alt="commentIcon" src={commentIcon} width={20} height={20} />
            <div>{props.commentsAggregate.count}</div>
          </button>

          <button className="flex items-center gap-2" onClick={onLikeChange}>
            <Image alt="likeIcon" src={likeIcon} width={20} height={20} />
            <div>{props.likesAggregate.count + countLike}</div>
          </button>
        </div>
      </div>
    </div>
  );
}
