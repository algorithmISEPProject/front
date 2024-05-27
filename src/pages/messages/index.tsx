import { gql, useMutation } from "@apollo/client";
import Image from "next/image";
import React, { useState } from "react";
import albumIcon from "@/assets/album-01.svg";
import mockProfilPic from "@/assets/mockProfilPic.png";
import textBoldIcon from "@/assets/text-bold.svg";
import textItalicIcon from "@/assets/text-italic.svg";
import { useAuth } from "@/context/AuthContext";

function MessagesPage() {
  const [content, setContent] = useState("");
  const [receiver, setReceiver] = useState("");
  const { user } = useAuth();

  const SEND_MESSAGE = gql`
    mutation SendMessage(
      $content: String!
      $sender: String!
      $receiver: String!
    ) {
      sendMessage(content: $content, sender: $sender, receiver: $receiver) {
        id
        content
        sender
        receiver
        timestamp
      }
    }
  `;

  const [sendMessage] = useMutation(SEND_MESSAGE);

  return (
    <div className="space-y-2">
      <div className="text-subtileText">Send a Message</div>
      <div className="flex flex-col bg-componentBackground p-[4px] pb-3 rounded-lg border border-componentOutline text-subTitle space-y-3">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage({
              variables: {},
            });
          }}
        >
          <Image
            alt="userIcon"
            src={mockProfilPic}
            height={40}
            width={40}
            className="border border-btn-outline rounded w-10 h-10"
          />
          <div className="flex flex-col w-full space-y-4">
            <div>Receiver:</div>
            <input
              type="text"
              placeholder="Receiver"
              className=" bg-btn-background  rounded p-2 focus:outline-none placeholder:text-subTitle"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
            <div>Content:</div>
            <input
              type="text"
              placeholder="Write a Message"
              className=" bg-btn-background w-full rounded p-2 focus:outline-none placeholder:text-subTitle"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button className="bg-btn-background rounded p-2" type="submit">
              Send
            </button>
          </div>
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

export default MessagesPage;
