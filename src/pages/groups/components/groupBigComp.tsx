import { useState } from "react";

export interface GroupsProps {
  eventImage?: string;
  description?: number;
  createdAt?: boolean;
  id: string;
  name: string;
  members: any;
  membersAggregate: any;
}

export default function GroupBigComp(props: GroupsProps) {
  const [groupJoined, setGroupJoined] = useState(false);

  return (
    <div className="flex w-full flex-col p-5 space-y-4 bg-componentBackground border border-btn-outline rounded-xl">
      <div className="h-36 bg-white rounded"></div>
      <div className="text-white">{props.name}</div>

      {groupJoined ? (
        <div className="flex items-center w-full">
          <div className="flex items-center w-full ">
            <div className="text-subTitle ">
              {props.membersAggregate?.count} members
            </div>
          </div>
          <button className="text-subTitle bg-btn-background h-9 w-32 p-1 border border-btn-outline rounded-xl">
            Leave Group
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="text-subTitle">
            {props.membersAggregate?.count} members
          </div>

          <div className="flex space-x-2">
            <button className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg">
              Learn more
            </button>
            <button className="px-3 py-[4px] bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg">
              Join group
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
