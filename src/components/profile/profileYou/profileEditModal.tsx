import React from "react";
import Image from "next/image";
import userIcon from "../../../../public/userIcon.svg";
import editProfileIcon from "../../../../public/editProfileIcon.svg";
import closeIcon from "../../../../public/closeIcon.svg";
import { ProfileYouProps } from "./profileYou";

interface ProfileEditModalProps {
  activeProfileEdit: boolean;
  onEditProfile: (activeProfileEdit: boolean) => void;

  onSave: () => void;
}

export default function ProfileEditModal({
  activeProfileEdit,
  onEditProfile,
}: ProfileEditModalProps) {
  const onEditProfilePicture = () => {};

  return (
    <div className="fixed inset-0 flex flex-col w-full items-center justify-center bg-black bg-opacity-50 ">
      <div className="flex flex-col bg-componentBackground  my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="flex flex-row w-full ml-2 space-x-96">
          <div className="text-white">Edit Your Profile</div>
          <button onClick={() => onEditProfile(activeProfileEdit)}>
            <Image className="" alt="closeIcon" src={closeIcon} />
          </button>
        </div>
        <div className="flex items-center justify-center w-full bg-btn-background h-36 rounded-md mt-4">
          <Image className="" alt="modifyPicture" src={editProfileIcon} />
        </div>
        <div className="flex flex-col ml-2">
          <div className="flex flex-row center-items justify-center space-x-2 text-subTitle w-full mt-4">
            <Image
              className="mr-4"
              alt="userIcon"
              src={userIcon}
              height={60}
              width={60}
            />
            <div className="flex flex-col  w-full">
              <div className="mb-2">Username</div>
              <input
                className="mb-4 rounded-md bg-inputField-background p-3 border border-inputField-outline"
                type="text"
                placeholder="Dimitar Dimitrov"
                name="Username"
              />
            </div>
          </div>
          <div className="flex flex-col  w-full">
            <div className="mb-2">Bio</div>
            <input
              className="mb-4 rounded-md bg-inputField-background pb-20 border border-inputField-outline"
              type="text"
              placeholder="This is a test bio."
              name="Bio"
            />
          </div>
          <div className="flex flex-row w-full space-x-4 ">
            <div className="flex flex-col w-3/6 ">
              <div className="mb-2">Current Job</div>
              <input
                className="mb-4 rounded-md bg-inputField-background p-2 border border-inputField-outline"
                type="text"
                placeholder="Product Designer"
                name="CurrentJob"
              />
            </div>
            <div className="flex flex-col w-3/6">
              <div className="mb-2">Location</div>
              <input
                className="mb-4 rounded-md bg-inputField-background p-2 border border-inputField-outline"
                type="text"
                placeholder="Paris, France"
                name="Location"
              />
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full">
              <div className="mb-2">Descriptive Text & Link</div>
              <div className="flex flex-row w-full space-x-4">
                <input
                  className="mb-4 rounded-md w-3/6 bg-inputField-background p-2 border border-inputField-outline"
                  type="text"
                  placeholder="Check this link"
                  name="Link1"
                />
                <input
                  className="mb-4 rounded-md w-3/6 bg-inputField-background  p-2 border border-inputField-outline"
                  type="text"
                  placeholder="Link to promote"
                  name="Link2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row text-subTitle w-full mt-4">
          <button className="pl-2 pr-4 py-2 border bg-btn-background border-btn-outline w-full rounded-lg text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
