import Image from "next/image";
import React from "react";

import testIcon from "@/assets/shareIcon.svg";
import LoveComp from "./loveComp";
import HobbyComp from "./hobbyComp";
import ProjectComp from "./projectComp";
import EduComp from "./eduComp";

export default function ProfileInfoEditModal({ onClose }: any) {
  return (
    <>
      <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        <div className=" bg-componentBackground border-btn-outline border m-auto p-5 w-[558px]  rounded-lg space-y-5">
          <div className="flex justify-between items-center ">
            <h3 className="text-subTitle">Edit your informations</h3>
            <button
              onClick={onClose}
              type="button"
              className=" text-red-500 p-2 "
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-subTitle">Hobbies</div>
            <div className="flex gap-2">
              <HobbyComp hobby="Video Games" />
              <HobbyComp hobby="Sports" />
              <HobbyComp hobby="Hiking" />
              <HobbyComp hobby="Design" />
              <button className="rounded-lg px-3 py-1  text-subtileText border border-inputField-outline">
                + Add hobby
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-subTitle">Loves</div>
            <div className="flex flex-wrap gap-4">
              <LoveComp icon={testIcon} something="Paella" category="Food" />
              <LoveComp
                icon={testIcon}
                something="Museums"
                category="Going-Out"
              />
              <LoveComp
                icon={testIcon}
                something="Hiking"
                category="Favorit Sport"
              />
              <button className=" text-subtileText border-inputField-outline">
                + Add new things you love
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-subTitle">Latest Projects or Experiences</div>
            <div className="flex flex-col gap-2">
              <ProjectComp
                projectName="Data Dashboard"
                startDate="22 Mar 2023"
                endDate="Today"
                where="Consulting"
              />
              <ProjectComp
                projectName="Data Dashboard"
                startDate="22 Mar 2023"
                endDate="Today"
                where="Consulting"
              />

              <button className="rounded-lg  text-subtileText p-2 border border-inputField-outline">
                + Add new Projects or Experiences
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-subTitle">Education</div>
            <div className="flex flex-col gap-2">
              <EduComp
                schoolName="Harvard University"
                fieldOfStudy="Computer Science"
              />
              <EduComp
                schoolName="Harvard University"
                fieldOfStudy="Computer Science"
              />
            </div>
            <button className="rounded-lg  text-subtileText p-2 border border-inputField-outline">
              + Add new education
            </button>
          </div>

          <button
            type="submit"
            className="px-3 py-2 w-full bg-btn-background border border-btn-outline text-subTitle hover:bg-btn-background-hover hover:text-white transition-all rounded-lg"
          >
            Save
          </button>
        </div>
      </dialog>
    </>
  );
}
