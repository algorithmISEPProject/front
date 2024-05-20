"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import appIcon from "../../../public/appLogo.svg";
import homeIcon from "../../../public/homeIcon.svg";
import notificationIcon from "../../../public/notificationIcon.svg";
import menuIcon from "../../../public/menuIcon.svg";
import messageIcon from "../../../public/messageIcon.svg";
import groupIcon from "../../../public/groupIcon.svg";
import settingsIcon from "../../../public/settingsIcon.svg";
import calendarIcon from "../../../public/calendarIcon.svg";
import userIcon from "../../../public/userIcon.svg";
import searchIcon from "../../../public/searchIcon.svg";

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div>
      <div className="columns-1 flex flex-col h-screen mx-auto bg-componentBackground pt-7 pl-6 text-subTitle items-center">
        <div className="space-y-4 mr-6">
          <div className="flex flex-row space-x-32">
            <Image alt="appLogo" src={appIcon} height={32} width={32} />
            <Image alt="menuLogo" src={menuIcon} height={36} width={36} />
          </div>
          <div className="relative bg-btn-background">
            <Image
              src={searchIcon}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border bg-btn-background rounded-lg"
            />
          </div>
          <div
            className={`flex flex-row items-center p-2 ${
              activeMenu === "Home"
                ? "bg-btn-background rounded-md  text-white"
                : ""
            }`}
            onClick={() => setActiveMenu("Home")}
          >
            <div className="mr-5">
              <Image alt="homeIcon" src={homeIcon} height={25} width={25} />
            </div>
            <div>Home</div>
          </div>

          <div
            className={`flex flex-row items-center p-2 ${
              activeMenu === "Notifications"
                ? "bg-btn-background rounded-md  text-white"
                : ""
            }`}
            onClick={() => setActiveMenu("Notifications")}
          >
            <div className="mr-5 ">
              <Image
                alt="notificationIcon"
                src={notificationIcon}
                height={32}
                width={32}
              />
            </div>
            <div>Notifications</div>
          </div>
          <div
            className={`flex flex-row items-center p-2 ${
              activeMenu === "Messages"
                ? "bg-btn-background rounded-md text-white"
                : ""
            }`}
            onClick={() => setActiveMenu("Messages")}
          >
            <div className="mr-5">
              <Image
                alt="messageLogo"
                src={messageIcon}
                height={32}
                width={32}
              />
            </div>
            <div>Messages</div>
          </div>
          <div
            className={`flex flex-row items-center p-2 ${
              activeMenu === "Groups"
                ? "bg-btn-background rounded-md  text-white"
                : ""
            }`}
            onClick={() => setActiveMenu("Groups")}
          >
            <div className="mr-5">
              <Image alt="groupsIcon" src={groupIcon} height={25} width={25} />
            </div>
            <div>Groups</div>
          </div>
          <div
            className={`flex flex-row items-center p-2 ${
              activeMenu === "Events"
                ? "bg-btn-background rounded-md  text-white"
                : ""
            }`}
            onClick={() => setActiveMenu("Events")}
          >
            <div className="mr-5">
              <Image alt="eventsIcon" src={groupIcon} height={25} width={25} />
            </div>
            <div>Events</div>
          </div>
          <div
            className={`flex flex-row items-center p-2 ${
              activeMenu === "Profile"
                ? "bg-btn-background rounded-md  text-white"
                : ""
            }`}
            onClick={() => setActiveMenu("Profile")}
          >
            <div className="mr-5">
              <Image alt="profile" src={userIcon} height={25} width={25} />
            </div>
            <div>Profil</div>
          </div>
          <div
            className={`flex flex-row items-center p-2 ${
              activeMenu === "Settings"
                ? "bg-btn-background rounded-md  text-white"
                : ""
            }`}
            onClick={() => setActiveMenu("Settings")}
          >
            <div className="mr-5">
              <Image alt="settings" src={settingsIcon} height={25} width={25} />
            </div>
            <div>Settings</div>
          </div>
        </div>
        <div className="flex flex-row mr-6 items-center p-2 bg-btn-background rounded-md my-24 w-full">
          <div className="mr-5">
            <Image alt="profile" src={userIcon} height={32} width={32} />
          </div>
          <div>
            <div className="text-white">Dimitar Dimitrov</div>
            <div>@dimitroweb</div>
          </div>
        </div>
      </div>
    </div>
  );
}
