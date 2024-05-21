import React from "react";
import Image from "next/image";

import userIcon from "../../../public/userIcon.svg";
import Feed from "../feed/feed";
import Follow from "./follow";
import Like from "./like";
import Reply from "./reply";
import Friend from "./friend";
import kingWhale from "../../../public/kingWhale.png";

export default function Notifications() {
  return (
    <div>
      <div className="text-subTitle">Notifications</div>
      <Friend userImage={kingWhale} userName="Dimitar Dimitrov" />
      <Follow userName="Dimitar Dimitrov" userImage={kingWhale} />
      <Like
        userName="Victor Dubrana"
        userImage={kingWhale}
        messageContent="J'ai créez mon onlyFan, donnez moi de la force"
      />
      <Reply
        userName="Victor Dubrana"
        userPseudo="vic_dub"
        profilePseudo="dimitroweb"
        content="espèce de raciste"
        likesNumber={100}
        commentsNumber={180}
      />
      <Friend userImage={kingWhale} userName="Alexandre Cruz" />
      <Reply
        userName="Victor Dubrana"
        userPseudo="vic_dub"
        profilePseudo="dimitroweb"
        content="va te faire baiser"
        likesNumber={100}
        commentsNumber={180}
      />
    </div>
  );
}
