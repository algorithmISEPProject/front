import React from "react";
import GroupsForYou from "./groupsComp";

export interface GroupsProps {
  profileGroupName?: string;
  profileGroupMembersNumber?: number;
  profileJoinedGroup?: boolean;
}

export default function Groups(props: GroupsProps) {
  return (
    <div className="mb-4">
      <div className="flex flex-col bg-componentBackground border border-btn-outline p-3 rounded-md">
        <div className="h-48 bg-white rounded-md mb-3"></div>
        <div className="text-white mb-3">{props.profileGroupName}</div>

        {props.profileJoinedGroup ? (
          <div className="flex flex-row items-center w-full space-x-80">
            <div className="text-subTitle w-1/2">
              {props.profileGroupMembersNumber} members
            </div>
            <button className="text-subTitle bg-btn-background p-1  w-1/2 border border-btn-outline rounded-xl">
              Leave Group
            </button>
          </div>
        ) : (
          <div className="flex flex-row items-center w-full space-x-32">
            <div className="text-subTitle w-1/2">
              {props.profileGroupMembersNumber} members
            </div>
            <div className="flex flex-row w-1/2 space-x-4">
              <button className="text-subTitle bg-btn-background p-1 pl-2 pr-2 border border-btn-outline rounded-xl">
                Learn More
              </button>
              <button className="text-subTitle bg-btn-background p-1 pl-2 pr-2 border border-btn-outline rounded-xl">
                Join Group
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
