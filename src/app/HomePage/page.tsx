"use client";

import Image from "next/image";
import kingWhale from "../../../public/kingWhale.png";

import Menu from "../../components/menu/menu";
import Suggestions from "@/components/suggestions/suggestions";
import Post from "@/components/post/post";
import Feed from "@/components/feed/feed";
import Events from "@/components/events/events";
import GroupsForYou from "@/components/groupsForYou/groupsForYou";
import { useState } from "react";
import ProfileYou from "@/components/profile/profileYou/profileYou";
import Settings from "@/components/settings/settings";
import Notifications from "@/components/notifications/notifications";
import ProfileSomeoneElse from "@/components/profile/profileSomeoneElse/profileSomeoneElse";

export default function HomePage() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const onChangeMenu = (menu: string) => {
    setActiveMenu(menu);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Notifications":
        return <Notifications />;
      case "Profile":
        return (
          <ProfileYou
            userImage={kingWhale}
            userName="Victor Dubrana"
            userPseudo="victorDubrana"
            location="Paris, France"
            job="Product Designer"
            description="j'ai créer mon only fan, donnez moi de la force"
            friendsNumber={15}
            followersNumber={130}
            followingNumber={100}
            hobbies={["Video Games", "Sports", "Hiking", "Design"]}
            link1="google.com"
          />
        );
      case "Messages":
        return <div>Messages Component</div>;
      case "Groups":
        return (
          <div>
            <div className="flex flex-col mt-3 center-items">
              <div className="flex flex-col">
                <div className="text-subTitle">Groups for you</div>

                <GroupsForYou
                  groupsName="Video Games"
                  groupsNumber={300}
                  groupImage={kingWhale}
                />
                <GroupsForYou
                  groupsName="Tennis"
                  groupsNumber={10000}
                  groupImage={kingWhale}
                />
                <GroupsForYou
                  groupsName="Climbing"
                  groupsNumber={300}
                  groupImage={kingWhale}
                />

                <div className="bg-background text-subTitle w-5/6 mt-2">
                  <button className="pl-2 pr-4 py-2 border w-full rounded-lg">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Events":
        return (
          <Events
            eventImage={kingWhale}
            eventName="Highschool Gathering"
            date="3rd June"
          />
        );
      case "Settings":
        return <Settings />;

      default:
        return (
          <div>
            <Post />
            <div className="my-6">
              <div className="text-subTitle">Feed</div>
              <Feed
                userName="Victor"
                userPseudo="victor"
                content="j'ai créer mon only fan, donnez moi de la force"
                numberComments={10}
                numberLikes={10}
              />
              <Feed
                userName="Victor"
                userPseudo="victor"
                content="j'ai créer mon only fan, donnez moi de la force"
                numberComments={10}
                numberLikes={10}
              />
              <Feed
                userName="Victor"
                userPseudo="victor"
                content="j'ai créer mon only fan, donnez moi de la force"
                numberComments={10}
                numberLikes={10}
              />
            </div>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-row bg-background h-screen  space-x-32 ">
      <div className="columns-1 w-1/6 bg-white ">
        <Menu
          onChangeMenu={onChangeMenu}
          activeMenu={activeMenu}
          userName="Dimitar Dimitrov"
          userPseudo="dimitroweb"
        />
      </div>
      <div className="columns-2 flex flex-col w-4/6 pt-10 h-screen center-items">
        <div className=" flex flex-col w-full">{renderContent()}</div>
      </div>
      <div className="columns-3 w-3/6 flex flex-col h-screen center-items pt-10">
        <Suggestions
          userName="Victor Dubrana"
          userImage={kingWhale}
          hobby="Hiking"
        />
        <Events
          eventImage={kingWhale}
          eventName="Highschool Gathering"
          date="3rd June"
        />
        <GroupsForYou
          groupsName="Video Games"
          groupsNumber={300}
          groupImage={kingWhale}
        />
        <GroupsForYou
          groupsName="Tennis"
          groupsNumber={10000}
          groupImage={kingWhale}
        />
        <GroupsForYou
          groupsName="Climbing"
          groupsNumber={300}
          groupImage={kingWhale}
        />
      </div>
    </div>
  );
}
