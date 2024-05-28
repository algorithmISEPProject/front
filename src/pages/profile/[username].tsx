"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import userIcon from "@/assets/userIcon.svg";

import ProfilePosts from "@/pages/profile/components/profilePosts";
import ProfileReplies from "@/pages/profile/components/profileReplies";
import ProfileLikes from "@/pages/profile/components/profileLikes";
import ProfileEditModal from "@/pages/profile/components/profileEditModal";
import ProfileInfoEditModal from "@/pages/profile/components/profileInfoEditModal";

import InformationsSection from "./components/informationsSection";
import ProfilCardSection from "./components/profilCardSection";
import { useRouter } from "next/router";

export interface ProfileProps {
  onClick: void;
}

export default function ProfilePage() {
  const router = useRouter();
  const { username } = router.query;
  const [activeProfileMenu, setActiveProfileMenu] = useState("Posts");

  return (
    <div className="w-full flex justify-center pb-10">
      <div className="space-y-5 w-4/6">
        <ProfilCardSection username={username} />

        <InformationsSection username={username} />

        <div className="flex flex-col mt-8">
          <div className="flex text-subTitle space-x-4  ">
            <button
              className={`p-2 px-4 rounded-md transition-all duration-200 ${
                activeProfileMenu === "Posts"
                  ? "bg-componentBackground "
                  : "hover:bg-componentBackground/50"
              }`}
              onClick={() => setActiveProfileMenu("Posts")}
            >
              Posts
            </button>
            <button
              className={`p-2 px-4 rounded-md transition-all duration-200 ${
                activeProfileMenu === "Likes"
                  ? "bg-componentBackground "
                  : "hover:bg-componentBackground/50"
              }`}
              onClick={() => setActiveProfileMenu("Likes")}
            >
              Likes
            </button>
            <button
              className={`p-2 px-4 rounded-md transition-all duration-200 ${
                activeProfileMenu === "Replies"
                  ? "bg-componentBackground "
                  : "hover:bg-componentBackground/50"
              }`}
              onClick={() => setActiveProfileMenu("Replies")}
            >
              Replies
            </button>
          </div>
        </div>

        {activeProfileMenu == "Posts" ? (
          <ProfilePosts username={username} />
        ) : activeProfileMenu == "Likes" ? (
          <ProfileLikes username={username} />
        ) : (
          <ProfileReplies username={username} />
        )}
      </div>
    </div>
  );
}
