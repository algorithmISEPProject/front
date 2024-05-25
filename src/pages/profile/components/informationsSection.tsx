import Image from "next/image";
import editProfileIcon from "@/assets/editProfileIcon.svg";
import { useState } from "react";
import ProfileInfoEditModal from "./profileInfoEditModal";

export default function InformationsSection() {
  const [showInfoEdit, setShowInfoEdit] = useState(false);

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
          <div className="bg-hobbies px-3 py-1 rounded-lg ">Video Games</div>
          <div className="bg-hobbies px-3 py-1 rounded-lg ">Sports</div>
          <div className="bg-hobbies px-3 py-1 rounded-lg ">Hiking</div>
          <div className="bg-hobbies px-3 py-1 rounded-lg ">Design</div>
        </div>
        <div className="flex text-subTitle w-full mt-4">
          <button className="pl-2 pr-4 py-2 border-btn-outline border w-full rounded-lg">
            Learn More about <span className="text-white">Dimitar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
