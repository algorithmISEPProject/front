import React from "react";
import userIcon from "../../../public/userIcon.svg";
import textModif from "../../../public/textModif.svg";

import Image from "next/image";

export default function Post() {
  return (
    <div>
      <div className="text-subTitle">Post</div>
      <div className="flex flex-col bg-componentBackground my-2 p-2 rounded-md border-2 border-componentOutline text-subTitle">
        <div className="flex flex-row ">
          <Image alt="userIcon" src={userIcon} height={40} width={40} />
          <div className="bg-inputField-background rounded-md w-full pl-2">
            <input
              type="text"
              placeholder="Share your thoughts to the world!"
              className="pl-2 pr-4 py-2 border bg-btn-background w-full rounded-lg"
            />
          </div>
        </div>
        <div className="pt-4">
          <Image alt="textModif" src={textModif} height={100} width={100} />
        </div>
      </div>
    </div>
  );
}
