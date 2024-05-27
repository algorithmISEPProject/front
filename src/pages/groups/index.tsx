import React from "react";

import CreateGroup from "@/pages/groups/components/createGroup";
import GroupBigComp from "./components/groupBigComp";

function GroupsPage() {
  return (
    <div className="">
      <div className="w-full flex justify-center">
        <div className="space-y-5 w-4/6">
          <div className="space-y-2">
            <div>Create</div>
            <CreateGroup />
          </div>
          <div className="space-y-2">
            <div>Groups</div>
            <GroupBigComp
              //groupImage={}
              groupsName="Video Games"
              groupsNumber={1657}
            />
            <GroupBigComp
              //groupImage={}
              groupsName="Pet Walking"
              groupsNumber={765}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupsPage;
