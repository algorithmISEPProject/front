import React from "react";
import Image from "next/image";
import userIcon from "../../../../public/userIcon.svg";
import editProfileIcon from "../../../../public/editProfileIcon.svg";
import closeIcon from "../../../../public/closeIcon.svg";

import { ProfileYouProps } from "./profileYou";

interface ProfileInfoEditModalProps {
  activeProfileInfoEdit: boolean;
  onEditInfoProfile: (activeProfileInfoEdit: boolean) => void;

  hobbies?: Array<string> | undefined;
  loves?: Array<string> | undefined;
  latestProjects?: Array<string> | undefined;
  education?: Array<string> | undefined;
}

export default function ProfileInfoEditModal(props: ProfileInfoEditModalProps) {
  const onEditProfilePicture = () => {};

  const renderContentHobbies = () => {
    if (!props.hobbies || props.hobbies.length === 0) {
      return <div>No hobbies listed</div>;
    }
    const hobbyElements = [];
    for (let i = 0; i < props.hobbies.length; i++) {
      hobbyElements.push(
        <div className="bg-hobbies text-black p-1.5 rounded-md mr-2">
          {props.hobbies[i]}
        </div>
      );
    }
    return hobbyElements;
  };

  const renderContentEducation = () => {
    if (!props.education || props.education.length === 0) {
      return <div>No hobbies listed</div>;
    }
    const educationElements = [];
    for (let i = 0; i < props.education.length; i++) {
      educationElements.push(
        <div className="bg-inputField-background mb-2 p-1.5 rounded-md mr-2">
          {props.education[i]}
        </div>
      );
    }
    return educationElements;
  };

  const renderContentLoves = () => {
    if (!props.loves || props.loves.length === 0) {
      return <div>No hobbies listed</div>;
    }
    const lovesElements = [];
    for (let i = 0; i < props.loves.length; i++) {
      lovesElements.push(
        <div className="bg-hobbies p-1.5 text-black rounded-md mr-2">
          {props.loves[i]}
        </div>
      );
    }
    return lovesElements;
  };

  const renderContentLatestProjects = () => {
    if (!props.latestProjects || props.latestProjects.length === 0) {
      return <div>No hobbies listed</div>;
    }
    const latestProjectsElements = [];
    for (let i = 0; i < props.latestProjects.length; i++) {
      latestProjectsElements.push(
        <div className="bg-inputField-background mb-2 p-1.5 rounded-md mr-2">
          {props.latestProjects[i]}
        </div>
      );
    }
    return latestProjectsElements;
  };

  return (
    <div className="fixed inset-0 flex flex-col w-full items-center justify-center bg-black bg-opacity-50 ">
      <div className="flex flex-col bg-componentBackground  my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="flex flex-row w-full ml-2 space-x-96">
          <div className="text-white">Edit Your Informations</div>
          <button
            onClick={() => props.onEditInfoProfile(props.activeProfileInfoEdit)}
          >
            <Image className="" alt="closeIcon" src={closeIcon} />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-1">Hobbies</div>
          <div className="flex flex-row mb-2">{renderContentHobbies()}</div>
          <button className="mb-4 rounded-md  bg-inputField-background  p-2 border border-inputField-outline">
            + Add hobby
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-1">Loves</div>
          <div className="flex flex-row mb-2">{renderContentLoves()}</div>
          <button className="mb-4 rounded-md bg-inputField-background  p-2 border border-inputField-outline">
            + Add new things you love
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-1">Latest Projects or Experiences</div>
          <div className="flex flex-col mb-2">
            {renderContentLatestProjects()}
          </div>
          <button className="mb-4 rounded-md  bg-inputField-background  p-2 border border-inputField-outline">
            + Add new Projects or Experiences
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-1">Education</div>
          <div className="flex flex-col mb-2">{renderContentEducation()}</div>
          <button className="mb-4 rounded-md  bg-inputField-background  p-2 border border-inputField-outline">
            + Add new education
          </button>
        </div>

        <div className="flex flex-row text-subTitle w-full mt-4">
          <button className="mb-4 rounded-md w-3/6 bg-inputField-background  p-2 border border-inputField-outline">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
