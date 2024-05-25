import Image from "next/image";
import editProfileIcon from "@/assets/editProfileIcon.svg";
import { useState } from "react";
import ProfileInfoEditModal from "./profileInfoEditModal";
import HobbyComp from "./hobbyComp";
import ProjectComp from "./projectComp";
import LoveComp from "./loveComp";
import EduComp from "./eduComp";
import testIcon from "@/assets/shareIcon.svg";

export default function InformationsSection() {
  const [showInfoEdit, setShowInfoEdit] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleOpenModal = () => {
    setShowInfoEdit(true);
  };

  const handleCloseModal = () => {
    setShowInfoEdit(false);
  };

  return (
    <div className="space-y-2">
      {showInfoEdit && <ProfileInfoEditModal onClose={handleCloseModal} />}
      <div className=" text-subtileText">Informations</div>
      <div className="flex flex-col bg-componentBackground px-5 py-6 rounded-xl gap-3 border border-componentOutline text-subTitle">
        <div className="flex w-full justify-between">
          <div>Hobbies</div>
          <button className="flex items-center gap-2" onClick={handleOpenModal}>
            <div className="text-subtileText">Edit Info</div>
            <Image alt="editInfoIcon" src={editProfileIcon} />
          </button>
        </div>
        <div className="flex gap-2 w-full text-background items-center">
          <HobbyComp hobby="Video Games" />
          <HobbyComp hobby="Sports" />
          <HobbyComp hobby="Hiking" />
          <HobbyComp hobby="Design" />
        </div>
        {showMore && (
          <div className="space-y-4">
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
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-subTitle">
                Latest Projects or Experiences
              </div>
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
            </div>
          </div>
        )}

        <div className="flex text-subTitle w-full mt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="pl-2 pr-4 py-2 border-btn-outline border w-full rounded-lg"
          >
            {!showMore ? (
              <div>
                Learn more about <span className="text-white">Dimitar</span>
              </div>
            ) : (
              <div>
                See less about <span className="text-white">Dimitar</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
