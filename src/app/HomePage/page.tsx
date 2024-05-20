"use client";

import Image from "next/image";

import Menu from "../../components/menu/menu";
import Suggestions from "@/components/suggestions/suggestions";
import Post from "@/components/post/post";
import Feed from "@/components/feed/feed";
import Events from "@/components/events/events";
import GroupsForYou from "@/components/groupsForYou/groupsForYou";
import { useState } from "react";
import Profile from "@/components/profile/profile";
import Settings from "@/components/settings/settings";
import Notifications from "@/components/notifications/notifications";

export default function HomePage() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const onChangeMenu = (menu: string) => {
    setActiveMenu(menu);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "notifications":
        return <Notifications />;
      case "Profile":
        return <Profile />;
      case "Messages":
        return <div>Messages Component</div>;
      case "Groups":
        return <GroupsForYou />;
      case "Events":
        return <Events />;
      case "Settings":
        return <Settings />;

      default:
        return (
          <div>
            <Post />
            <div className="my-6">
              <div className="text-subTitle">Feed</div>
              <Feed />
              <Feed />
              <Feed />
            </div>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-row bg-background h-screen  space-x-32 ">
      <div className="columns-1 w-1/6 bg-white ">
        <Menu onChangeMenu={onChangeMenu} activeMenu={activeMenu} />
      </div>
      <div className="columns-2 flex flex-col w-4/6 pt-10 h-screen center-items">
        <div className=" flex flex-col w-full">{renderContent()}</div>
      </div>
      <div className="columns-3 w-3/6 flex flex-col h-screen center-items pt-10">
        <Suggestions />
        <Events />
        <GroupsForYou />
      </div>
    </div>
  );
}
