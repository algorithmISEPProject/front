import Image from "next/image";
import React from "react";
import userIcon from "@/assets/userIcon.svg";
import editProfileIcon from "@/assets/editProfileIcon.svg";
import closeIcon from "@/assets/closeIcon.svg";
import mockPostImage from "@/assets/mockPostImage.png";
import InputComp from "@/components/inputComp";

export default function ProfileEditModal({ onClose }: any) {
  return (
    <>
      <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur-sm flex justify-center items-center">
        <div className=" bg-componentBackground border-btn-outline border m-auto p-5 min-w-[558px] rounded-xl ">
          <div className="flex justify-between items-center">
            <h3 className="text-subTitle">Edit your profile</h3>
            <button onClick={onClose} type="button" className=" text-red-500 ">
              <Image className="" alt="closeIcon" src={closeIcon} />
            </button>
          </div>

          <form className="space-y-4">
            <button className="flex items-center justify-center w-full bg-btn-background h-32 rounded-md mt-4">
              <Image className="" alt="modifyPicture" src={editProfileIcon} />
            </button>

            <div className="flex space-x-5 text-subTitle w-full ">
              <Image
                className="h-24 w-24 rounded-xl"
                alt="userIcon"
                src={mockPostImage}
                height={60}
                width={60}
              />
              <InputComp placeholder="dimitroweb" label="Username" />
            </div>
            <InputComp
              placeholder="This is a test bio."
              label="Bio"
              isTextArea={true}
            />
            <div className="flex w-full space-x-4 ">
              <InputComp placeholder="Product Designer" label="Current Job" />
              <InputComp placeholder="Paris, France" label="Location" />
            </div>
            <div className="flex w-full">
              <div className="flex flex-col w-full">
                <InputComp placeholder="Check this link" label="Link" />
              </div>
            </div>

            <button
              type="submit"
              className="px-3 py-2 w-full bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-xl"
            >
              Save
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
