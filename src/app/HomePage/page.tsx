import userIcon from "../../../public/userIcon.svg";
import textModif from "../../../public/textModif.svg";

import Menu from "../../components/menu/menu";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-row bg-background h-screen  space-x-32">
      <div className="columns-1 w-1/6">
        <Menu />
      </div>
      <div className="columns-2 flex flex-col w-4/6 pt-10 h-screen center-items">
        <div className=" flex flex-col">
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
          <div className="my-6">
            <div className="text-subTitle">Feed</div>
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
          </div>
        </div>
      </div>

      <div className="columns-3 w-2/6"></div>
    </div>
  );
}
