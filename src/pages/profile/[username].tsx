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
  const [activeProfileMenu, setActiveProfileMenu] = useState("");

  return (
    <div className="w-full flex justify-center">
      <div className="space-y-5 w-4/6">
        <ProfilCardSection username={username} />

        <InformationsSection username={username} />

        <div className="flex flex-col mt-8">
          <div className="flex text-subTitle space-x-4  ">
            <button
              className={`p-2 pl-4 pr-4 ${
                activeProfileMenu === "Posts"
                  ? "bg-componentBackground rounded-md"
                  : ""
              }`}
            >
              Posts
            </button>
            <button
              className={`p-2 pl-4 pr-4 ${
                activeProfileMenu === "Likes"
                  ? "bg-componentBackground rounded-md"
                  : ""
              }`}
            >
              Likes
            </button>
            <button
              className={`p-2 pl-4 pr-4 ${
                activeProfileMenu === "Replies"
                  ? "bg-componentBackground rounded-md"
                  : ""
              }`}
            >
              Replies
            </button>
          </div>
        </div>

        <ProfilePosts username={username} />
      </div>
    </div>
  );
}
