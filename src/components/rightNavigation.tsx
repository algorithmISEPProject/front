import React from "react";
import Suggestions from "./suggestions/suggestionComp";
import Events from "./events/eventComp";
import GroupsComp from "./groupsForYou/groupsComp";

import kingWhale from "@/assets/kingWhale.png";
import { useAuth } from "@/context/AuthContext";
import { gql, useQuery } from "@apollo/client";

function RightNavigation() {
  const { user } = useAuth();

  const GET_INFOS = gql`
    query getInfos {
      groups {
        id
        name
        membersAggregate {
          count
        }
      }
      events {
        date
        name
        id
        attendeesAggregate {
          count
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_INFOS);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

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
        {data.events.map((item) => (
          <Events
          eventImage={item.}
          eventName="Highschool Gathering"
          date="3rd June"
        />
        ))}
        
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
