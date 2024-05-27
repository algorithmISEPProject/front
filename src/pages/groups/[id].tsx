import React, { useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Group } from "@/interface/typeInterface";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";

import leftIcon from "@/assets/leftIcon.svg";

import UserPost from "@/pages/groups/components/userPostGroup";
import GroupBigComp from "./components/groupBigComp";
import PostComponent from "@/components/postComponent";

export default function GroupPage() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const GET_GROUP = gql`
    query GetGroup($id: ID!) {
      groups(where: { id: $id }) {
        createdAt
        id
        name
        description
        groupImage
        membersAggregate {
          count
        }
      }
    }
  `;

  const GET_GROUP_POSTS = gql`
    query getGroupPosts($id: ID!) {
      groups(where: { id: $id }) {
        posts {
          content
          createdAt
          id
          imageURL
          author {
            avatar
            firstName
            username
          }
          likesAggregate {
            count
          }
          commentsAggregate {
            count
          }
        }
      }
    }
  `;

  const {
    loading: groupLoading,
    error: groupError,
    data: groupData,
  } = useQuery(GET_GROUP, {
    variables: { id },
    skip: !id, // Skip the query until the ID is available
  });

  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_GROUP_POSTS, {
    variables: { id },
    skip: !id,
  });

  if (groupLoading || postsLoading) return <p>Loading...</p>;

  console.log(groupData);
  console.log(postsData);

  return (
    <div className="w-full">
      <div className=" w-4/6 space-y-4 p-5 flex flex-col items-center justify-center">
        <div className="space-y-2">
          <div>
            <Link className="flex space-x-4 items-center" href={"/groups"}>
              <Image alt="leftIcon" src={leftIcon} />
              <div>Go back to groups</div>
            </Link>
          </div>

          <div className="flex w-full flex-col p-5 space-y-4 bg-componentBackground border border-btn-outline rounded-xl">
            <div className="h-36 bg-white rounded"></div>
            <div>
              <div className="text-white">{groupData.groups[0].name}</div>
              <div className="text-white">
                {groupData.groups[0].description}
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="flex items-center w-full ">
                <div className="text-subTitle ">
                  {groupData.groups[0].membersAggregate.count} members
                </div>
              </div>
            </div>
          </div>
          <div>
            <UserPost groupId={groupData.groups[0].id} />
          </div>

          <div className="space-y-4">
            <div>Group Posts</div>
            {postsData.groups[0].posts.map((item: any) => (
              <div key={item.id}>
                <PostComponent {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
