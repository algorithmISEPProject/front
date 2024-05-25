import React from "react";

export default function ProfileInfoEditModal({ onClose }: any) {
  return (
    <>
      <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        <div className=" bg-componentBackground border-btn-outline border m-auto p-5 min-w-[558px] rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className="text-white">Edit your informations</h3>
            <button
              onClick={onClose}
              type="button"
              className=" text-red-500 p-2 "
            >
              X
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
