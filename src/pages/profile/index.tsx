"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import userIcon from "@/assets/userIcon.svg";
import locationIcon from "@/assets/locationIcon.svg";
import editProfileIcon from "@/assets/editProfileIcon.svg";
import permanentJobIcon from "@/assets/permanentJobIcon.svg";
import ProfilePosts from "@/components/profile/profilePosts";
import ProfileReplies from "@/components/profile/profileReplies";
import ProfileLikes from "@/components/profile/profileLikes";
import ProfileEditModal from "@/components/profile/profileEditModal";
import ProfileInfoEditModal from "@/components/profile/profileInfoEditModal";

export interface ProfileProps {
  onClick: void;
}

export default function ProfilePage() {
  const [activeProfileMenu, setActiveProfileMenu] = useState("Posts");
  const [userPseudo, setUserPseudo] = useState(""); //will later allow to fetch only the tweets, likes and replies from the connected user
  const [activeProfileEdit, setActiveProfileEdit] = useState(false);
  const [activeInfoEdit, setActiveInfoEdit] = useState(false);

  const onActiveProfileMenuChange = (menu: string) => {
    setActiveProfileMenu(menu);
  };
  const onEditProfile = () => {
    setActiveProfileEdit(!activeProfileEdit);
  };

  const onEditInfo = () => {
    setActiveInfoEdit(!activeInfoEdit);
  };

  const renderContentEditProfile = () => {
    switch (activeProfileEdit) {
      case true:
        return <ProfileEditModal />;
      case false:
        return;
    }
  };

  const renderContentEditInfo = () => {
    switch (activeInfoEdit) {
      case true:
        return <ProfileInfoEditModal />;
      case false:
        return;
    }
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
          <button
            className="flex flex-row items-center"
            onClick={onEditProfile}
          >
            Edit Profile
            <Image
              className="ml-3"
              alt="editProfileIcon"
              src={editProfileIcon}
            />
            {renderContentEditProfile()}
          </button>
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
          <button className="flex flex-row items-center" onClick={onEditInfo}>
            <div className="mr-3">Edit Info</div>
            <Image alt="editInfoIcon" src={editProfileIcon} />
            {renderContentEditInfo()}
          </button>
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
