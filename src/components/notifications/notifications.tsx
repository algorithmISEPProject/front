import React from "react";
import Image from "next/image";

import userIcon from "../../../public/userIcon.svg";
import Feed from "../feed/feed";
import Follow from "./follow";
import Like from "./like";
import Reply from "./reply";
import Friend from "./friend";

export default function Notifications() {
  return (
    <div>
      <div className="text-subTitle">Notifications</div>
      <Friend />
      <Follow />
      <Like />
      <Reply />
      <Friend />
      <Reply />
    </div>
  );
}
