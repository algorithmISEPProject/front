import React from "react";
import Feed from "../feed/feed";

export default function ProfileLikes() {
  return (
    <div>
      <Feed
        userName="Victor"
        userPseudo="victor"
        content="j'ai créer mon only fan, donnez moi de la force"
        numberComments={10}
        numberLikes={10}
      />
      <Feed
        userName="Victor"
        userPseudo="victor"
        content="j'ai créer mon only fan, donnez moi de la force"
        numberComments={10}
        numberLikes={10}
      />
      <Feed
        userName="Victor"
        userPseudo="victor"
        content="j'ai créer mon only fan, donnez moi de la force"
        numberComments={10}
        numberLikes={10}
      />
    </div>
  );
}
