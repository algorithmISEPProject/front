import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { gql, useMutation } from "@apollo/client";
import { useAuth } from "@/context/AuthContext";
import { Group } from "@/interface/typeInterface";

export default function GroupBigComp(props: Group) {
  const [joinedGroup, setJoinedGroup] = useState(false);
  const { user } = useAuth();

  const JOIN_GROUP = gql`
  mutation joinGroup ($id: ID, $userId: ID = ${JSON.stringify(user._id)}) {
    updateGroups(
      where: { id: $id }
      update: { members: { connect: { where: { node: { _id: $userId } } } } }
    ) {
      groups {
        membersAggregate {
          count
        }
      }
    }
  }
`;

  const LEAVE_GROUP = gql`
  mutation leaveGroup ($id: ID, $userId: ID = ${JSON.stringify(user._id)}) {
    updateGroups(
      where: { id: $id }
      update: { members: { disconnect: { where: { node: { _id: $userId } } } } }
    ) {
      groups {
        membersAggregate {
          count
        }
      }
    }
  }
`;
  const [joinGroup] = useMutation(JOIN_GROUP);
  const [leaveGroup, { loading, error }] = useMutation(LEAVE_GROUP);
  if (error) return <p>Error</p>;

  const onJoinedGroupChange = () => {
    if (joinedGroup) {
      leaveGroup({
        variables: { id: props.id },
      });

      setJoinedGroup(!joinedGroup);
    } else {
      joinGroup({
        variables: { id: props.id },
      });
      setJoinedGroup(!joinedGroup);
    }
  };

  return (
    <div className="flex w-full flex-col p-5 space-y-4 bg-componentBackground border border-btn-outline rounded-xl">
      <div className="h-36 bg-white rounded"></div>
      <div className="text-white">{props.name}</div>

      {joinedGroup ? (
        <div className="flex items-center w-full">
          <div className="flex items-center w-full ">
            <div className="text-subTitle ">
              {props!.members.length} members
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg">
              Learn more
            </button>
            <button
              className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg"
              onClick={onJoinedGroupChange}
            >
              Join group
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="text-subTitle">{props!.members.length} members</div>

          <button
            onClick={onJoinedGroupChange}
            className="text-subTitle bg-btn-background h-9 w-32 p-1 border border-btn-outline rounded-xl"
          >
            Leave Group
          </button>
        </div>
      )}
    </div>
  );
}
