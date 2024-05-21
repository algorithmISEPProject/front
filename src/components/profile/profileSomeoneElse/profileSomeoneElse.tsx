"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import userIcon from "../../../../public/userIcon.svg";
import locationIcon from "../../../../public/locationIcon.svg";
import editProfileIcon from "../../../../public/editProfileIcon.svg";
import permanentJobIcon from "../../../../public/permanentJobIcon.svg";
import ProfilePosts from "../profilePosts";
import ProfileReplies from "../profileReplies";
import ProfileLikes from "../profileLikes";

export interface ProfileSomeoneElseProps {
  onClick: void;
}

export default function ProfileSomeoneElse() {
  const [activeProfileMenu, setActiveProfileMenu] = useState("Posts");
  const [userPseudo, setUserPseudo] = useState(""); //will later allow to fetch only the tweets, likes and replies from the connected user

  const onActiveProfileMenuChange = (menu: string) => {
    setActiveProfileMenu(menu);
  };

  const renderContent = () => {
    switch (activeProfileMenu) {
      case "Likes":
        return <ProfileLikes />;
      case "Replies":
        return <ProfileReplies />;

      default:
        return <ProfilePosts />;
    }
  };

  return (
    <div>
      <div className="text-subTitle">Your Profile</div>
      <div className="flex flex-col bg-componentBackground my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="w-full bg-btn-background h-36 rounded-md"></div>
        <div className="flex flex-row w-full space-x-60 mb-4">
          <div className="flex flex-row">
            <Image alt="userIcon" src={userIcon} height={40} width={40} />
            <div className="flex flex-col">
              <div className="text-white text-xl">Dimitar Dimitrov</div>
              <div>@didmitroweb</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white text-lg">This is a test description</div>
          <div>
            Check out this link: <a>link to promote</a>
          </div>
        </div>
        <div className="flex flex-row w-3/4 space-x-8 mt-2  mt-4">
          <div className="flex flex-row">
            <Image className="mr-1" alt="commentIcon" src={permanentJobIcon} />
            <div>Product Designer</div>
          </div>
          <div className="flex flex-row">
            <Image className="mr-1" alt="likeIcon" src={locationIcon} />
            <div>Paris, France</div>
          </div>
        </div>
        <div className="flex flex-row w-3/4 space-x-8 mt-3 text-lg">
          <div className="flex flex-row">
            <div className="text-white mr-1">80</div>
            <div>Friends</div>
          </div>
          <div className="flex flex-row">
            <div className="text-white mr-1">123</div>
            <div>Followers</div>
          </div>
          <div className="flex flex-row">
            <div className="text-white mr-1">34</div>
            <div>Following</div>
          </div>
        </div>
      </div>
      <div className="text-subTitle">Informations</div>
      <div className="flex flex-col bg-componentBackground my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="flex flex-row w-full space-x-96 mt-3">
          <div>Hobbies</div>
        </div>
        <div className="flex flex-row mt-3 w-full text-background items-center">
          <div className="bg-hobbies p-1.5 rounded-md mr-2">Video Games</div>
          <div className="bg-hobbies p-1.5 rounded-md mr-2">Sports</div>
          <div className="bg-hobbies p-1.5 rounded-md mr-2">Hiking</div>
          <div className="bg-hobbies p-1.5 rounded-md mr-2">Design</div>
        </div>
        <div className="flex flex-row text-subTitle w-full mt-4">
          <button className="pl-2 pr-4 py-2 border w-full rounded-lg">
            Learn More about Dimitar
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row text-subTitle space-x-4  ">
          <button
            className={`p-2 pl-4 pr-4 ${
              activeProfileMenu === "Posts"
                ? "bg-componentBackground rounded-md"
                : ""
            }`}
            onClick={() => onActiveProfileMenuChange("Posts")}
          >
            Posts
          </button>
          <button
            className={`p-2 pl-4 pr-4 ${
              activeProfileMenu === "Likes"
                ? "bg-componentBackground rounded-md"
                : ""
            }`}
            onClick={() => onActiveProfileMenuChange("Likes")}
          >
            Likes
          </button>
          <button
            className={`p-2 pl-4 pr-4 ${
              activeProfileMenu === "Replies"
                ? "bg-componentBackground rounded-md"
                : ""
            }`}
            onClick={() => onActiveProfileMenuChange("Replies")}
          >
            Replies
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
