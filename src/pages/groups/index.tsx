import React from "react";
import Group from "@/pages/groups/components/groupBigComp";
import CreateGroup from "@/pages/groups/components/createGroup";

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
            <Group
              //groupImage={}
              groupsName="Video Games"
              groupsNumber={1657}
            />
            <Group
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
