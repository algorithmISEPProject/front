"use client";

import Image from "next/image";

import albumIcon from "@/assets/album-01.svg";
import mockProfilPic from "@/assets/mockProfilPic.png";
import textBoldIcon from "@/assets/text-bold.svg";
import textItalicIcon from "@/assets/text-italic.svg";

export default function UserPost() {
  return (
    <div className="space-y-2">
      <div className="text-subtileText">Post</div>
      <div className="flex flex-col bg-componentBackground p-[4px] pb-3 rounded-lg border border-componentOutline text-subTitle space-y-3">
        <form className="flex gap-2">
          <Image
            alt="userIcon"
            src={mockProfilPic}
            height={40}
            width={40}
            className="border border-btn-outline rounded w-10 h-10"
          />
          <input
            type="text"
            placeholder="Share your thoughts to the world!"
            className=" bg-btn-background w-full rounded p-2 focus:outline-none placeholder:text-subTitle"
          />
          <button className="bg-btn-background rounded p-2">Send</button>
        </form>
        <div className="flex pl-12 w-full gap-3">
          <Image alt="textModif" src={albumIcon} height={20} width={20} />
          <Image alt="textModif" src={textBoldIcon} height={20} width={20} />
          <Image alt="textModif" src={textItalicIcon} height={20} width={20} />
        </div>
      </div>
    </div>
  );
}
