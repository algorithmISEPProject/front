import React, { useState } from "react";
import locationIcon from "@/assets/locationIcon.svg";
import editProfileIcon from "@/assets/editProfileIcon.svg";
import permanentJobIcon from "@/assets/permanentJobIcon.svg";
import mockPostImage from "@/assets/mockPostImage.png";
import Image from "next/image";
import ProfileEditModal from "./profileEditModal";

export default function ProfilCardSection() {
  const [showProfileEdit, setShowProfileEdit] = useState(false);

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
      <div className="flex flex-col bg-componentBackground p-5 rounded-xl border border-componentOutline text-subTitle">
        <div className="w-full bg-btn-background h-36 rounded-md"></div>
        <div className="flex w-full justify-between mb-4">
          <div className="flex gap-3 items-center">
            <Image
              alt="userIcon"
              src={mockPostImage}
              height={40}
              width={40}
              className="w-16 h-16 rounded-md"
            />
            <div className="flex flex-col">
              <div className="text-white text-xl">Dimitar Dimitrov</div>
              <div>@dimitroweb</div>
            </div>
          </div>
          <button className="flex items-center" onClick={handleOpenModal}>
            Edit Profile
            <Image
              className="ml-3"
              alt="editProfileIcon"
              src={editProfileIcon}
            />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="text-white text-lg">This is a test description</div>
          <div>
            Check out this link: <a>link to promote</a>
          </div>
        </div>
        <div className="flex w-3/4 space-x-8 mt-2">
          <div className="flex">
            <Image className="mr-1" alt="commentIcon" src={permanentJobIcon} />
            <div>Product Designer</div>
          </div>
          <div className="flex">
            <Image className="mr-1" alt="likeIcon" src={locationIcon} />
            <div>Paris, France</div>
          </div>
        </div>
        <div className="flex w-3/4 space-x-8 mt-3 text-lg">
          <div className="flex">
            <div className="text-white mr-1">80</div>
            <div>Friends</div>
          </div>
          <div className="flex">
            <div className="text-white mr-1">123</div>
            <div>Followers</div>
          </div>
          <div className="flex">
            <div className="text-white mr-1">34</div>
            <div>Following</div>
          </div>
        </div>
      </div>
    </div>
  );
}
