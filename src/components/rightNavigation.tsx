import React from "react";
import Suggestions from "./suggestions/suggestionComp";
import Events from "./events/eventComp";
import GroupsComp from "./groupsForYou/groupsComp";

import kingWhale from "@/assets/kingWhale.png";

function RightNavigation() {
  return (
    <div className="flex flex-col h-screen center-items p-5 gap-5">
      <div className="space-y-2">
        <div className="text-subtileText">Suggestions</div>
        <Suggestions
          userName="Victor Dubrana"
          userImage={kingWhale}
          hobby="Hiking"
        />
        <button className="p-2 border text-subtileText border-btn-outline w-full rounded-lg">
          See More
        </button>
      </div>
      <div className="space-y-2">
        <div className="text-subtileText">Events for you</div>
        <Events
          eventImage={kingWhale}
          eventName="Highschool Gathering"
          date="3rd June"
        />
        <button className="p-2 border text-subtileText border-btn-outline w-full rounded-lg">
          See More
        </button>
      </div>
      <div className="space-y-2">
        <div className="text-subtileText">Groups for you</div>
        <GroupsComp
          groupsName="Video Games"
          groupsNumber={300}
          groupImage={kingWhale}
        />
        <button className="p-2 border text-subtileText border-btn-outline w-full rounded-lg">
          See More
        </button>
      </div>
    </div>
  );
}

export default RightNavigation;
