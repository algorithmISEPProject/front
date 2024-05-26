import React, { useState } from "react";
import locationIcon from "@/assets/locationIcon.svg";
import editProfileIcon from "@/assets/editProfileIcon.svg";
import permanentJobIcon from "@/assets/permanentJobIcon.svg";
import mockPostImage from "@/assets/mockPostImage.png";
import Image from "next/image";
import ProfileEditModal from "./profileEditModal";
import { useAuth } from "@/context/AuthContext";
import { gql, useQuery } from "@apollo/client";

export default function ProfilCardSection() {
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const { user } = useAuth();

  const GET_USER_PROFILE_INFO = gql`
    query getUserInfo($_id: ID = ${JSON.stringify(user._id)}) {
      users(where: { _id: $_id }) {
        avatar
        banner
        bio
        descLink
        followersAggregate {
          count
        }
        followingAggregate {
          count
        }
        job
        location
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USER_PROFILE_INFO);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  const handleOpenModal = () => {
    setShowProfileEdit(true);
  };

  const handleCloseModal = () => {
    setShowProfileEdit(false);
  };

  return (
    <div className="space-y-2">
      {showProfileEdit && <ProfileEditModal onClose={handleCloseModal} />}

      <div className="text-subtileText">Your Profile</div>
      <div className="flex flex-col bg-componentBackground p-5 rounded-xl border border-componentOutline text-subTitle space-y-4">
        <div className="w-full bg-btn-background h-36 rounded-md"></div>
        <div className="flex w-full justify-between">
          <div className="flex gap-3 items-center">
            <Image
              alt="userIcon"
              src={mockPostImage}
              height={40}
              width={40}
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col">
              <div className="text-white text-xl">{user.firstName}</div>
              <div>@{user.username}</div>
            </div>
          </div>
          <button
            className="flex items-center gap-2 text-subtileText"
            onClick={handleOpenModal}
          >
            Edit Profile
            <Image alt="editProfileIcon" src={editProfileIcon} />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="text-white text-lg">
            {data.bio || "C'est vide ici..."}
          </div>
          <div>
            Check out this link: <a>{data.users[0].descLink || "No link"}</a>
          </div>
        </div>
        <div className="flex w-3/4 space-x-8 mt-2">
          <div className="flex">
            <Image className="mr-1" alt="commentIcon" src={permanentJobIcon} />
            <div>{data.users[0].job || "No job"}</div>
          </div>
          <div className="flex">
            <Image className="mr-1" alt="likeIcon" src={locationIcon} />
            <div>{data.users[0].location || "No location"}</div>
          </div>
        </div>
        <div className="flex w-3/4 space-x-8 mt-3 text-lg">
          <div className="flex">
            <div className="text-white mr-1">
              {data.users[0].followersAggregate?.count}
            </div>
            <div>Followers</div>
          </div>
          <div className="flex">
            <div className="text-white mr-1">
              {data.users[0].followingAggregate?.count}
            </div>
            <div>Following</div>
          </div>
        </div>
      </div>
    </div>
  );
}
