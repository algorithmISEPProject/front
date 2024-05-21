"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import userIcon from "../../../../public/userIcon.svg";
import locationIcon from "../../../../public/locationIcon.svg";
import editProfileIcon from "../../../../public/editProfileIcon.svg";
import permanentJobIcon from "../../../../public/permanentJobIcon.svg";
import ProfilePosts from "../profilePosts";
import ProfileReplies from "../profileReplies";
import ProfileLikes from "../profileLikes";
import ProfileEditModal from "./profileEditModal";
import ProfileInfoEditModal from "./profileInfoEditModal";

export interface ProfileYouProps {
  userBanner?: string;
  userImage?: StaticImageData | undefined;
  userPseudo: string;
  userName: string;
  description?: string | "";
  job?: string | "";
  location?: string | "";
  friendsNumber?: number | 0;
  followersNumber?: number | 0;
  followingNumber?: number | 0;
  hobbies?: Array<string>;
  link1?: string | undefined;
  link2?: string | undefined;
}

export default function ProfileYou(props: ProfileYouProps) {
  const [activeProfileMenu, setActiveProfileMenu] = useState("Posts");
  const [userPseudo, setUserPseudo] = useState(""); //will later allow to fetch only the tweets, likes and replies from the connected user
  const [activeProfileEdit, setActiveProfileEdit] = useState(false);
  const [activeInfoProfileEdit, setActiveInfoProfileEdit] = useState(false);

  const onActiveProfileMenuChange = (menu: string) => {
    setActiveProfileMenu(menu);
  };
  const onEditProfile = (activeProfileEdit: boolean) => {
    setActiveProfileEdit(!activeProfileEdit);
  };

  const onEditInfo = () => {
    setActiveInfoProfileEdit(!activeInfoProfileEdit);
  };

  const renderContentEditProfile = () => {
    switch (activeProfileEdit) {
      case true:
        return (
          <ProfileEditModal
            activeProfileEdit={activeProfileEdit}
            onEditProfile={onEditProfile}
          />
        );
      case false:
        return;
    }
  };

  const renderContentEditInfo = () => {
    switch (activeInfoProfileEdit) {
      case true:
        return (
          <ProfileInfoEditModal
            activeProfileInfoEdit={activeInfoProfileEdit}
            onEditInfoProfile={onEditProfile}
          />
        );
      case false:
        return;
    }
  };

  const renderContentHobbies = () => {
    if (!props.hobbies || props.hobbies.length === 0) {
      return <div>No hobbies listed</div>;
    }
    const hobbyElements = [];
    for (let i = 0; i < props.hobbies.length; i++) {
      hobbyElements.push(
        <div className="bg-hobbies p-1.5 rounded-md mr-2">
          {props.hobbies[i]}
        </div>
      );
    }
    return hobbyElements;
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
            {props.userImage ? (
              <Image
                alt="userIcon"
                src={props.userImage}
                height={40}
                width={40}
              />
            ) : (
              <Image alt="userIcon" src={userIcon} height={40} width={40} />
            )}

            <div className="flex flex-col">
              <div className="text-white text-xl">{props.userName}</div>
              <div>@{props.userPseudo}</div>
            </div>
          </div>
          <button
            className="flex flex-row items-center"
            onClick={() => onEditProfile(activeProfileEdit)}
          >
            Edit Profile
            <Image
              className="ml-3"
              alt="editProfileIcon"
              src={editProfileIcon}
            />
          </button>
          {renderContentEditProfile()}
        </div>
        <div className="flex flex-col">
          <div className="text-white text-lg">{props.description}</div>
          <div>
            Check out this link: <a>{props.link1}</a>
          </div>
        </div>
        <div className="flex flex-row w-3/4 space-x-8 mt-2  mt-4">
          <div className="flex flex-row">
            <Image className="mr-1" alt="commentIcon" src={permanentJobIcon} />
            <div>{props.job}</div>
          </div>
          <div className="flex flex-row">
            <Image className="mr-1" alt="likeIcon" src={locationIcon} />
            <div>{props.location}</div>
          </div>
        </div>
        <div className="flex flex-row w-3/4 space-x-8 mt-3 text-lg">
          <div className="flex flex-row">
            <div className="text-white mr-1">{props.friendsNumber}</div>
            <div>Friends</div>
          </div>
          <div className="flex flex-row">
            <div className="text-white mr-1">{props.followersNumber}</div>
            <div>Followers</div>
          </div>
          <div className="flex flex-row">
            <div className="text-white mr-1">{props.followingNumber}</div>
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
          {renderContentHobbies()}
        </div>
        <div className="flex flex-row text-subTitle w-full mt-4">
          <button className="pl-2 flex flex-row justify-center pr-4 py-2 border w-full rounded-lg">
            Learn More about{" "}
            <div className="ml-1 text-white">{props.userName}</div>
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
