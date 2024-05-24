"use client";

import Image from "next/image";
import kingWhale from "../../../public/kingWhale.png";

import Menu from "../../components/menu/menu";
import Suggestions from "@/components/suggestions/suggestions";
import UserPost from "@/components/userPost/userPost";
import Feed from "@/components/feed/feed";
import Events from "@/components/events/events";
import GroupsForYou from "@/components/groupsForYou/groupsForYou";
import { useState } from "react";
import ProfileYou from "@/components/profile/profileYou/profileYou";
import Settings from "@/components/settings/settings";
import Notifications from "@/components/notifications/notifications";
import ProfileSomeoneElse from "@/components/profile/profileSomeoneElse/profileSomeoneElse";
import Groups from "@/components/groupsForYou/groups";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
  gql,
  HttpLink,
  useSuspenseQuery,
} from "@apollo/client";
import driver from "../../../pages/api/driver";

export interface HomePageProps {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export default function HomePage() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const onChangeMenu = (menu: string) => {
    setActiveMenu(menu);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Notifications":
        return <Notifications />;
      case "Profile":
        return (
          <ProfileYou
            userImage={kingWhale}
            userName="Victor Dubrana"
            userPseudo="victorDubrana"
            location="Paris, France"
            job="Product Designer"
            description="j'ai créer mon only fan, donnez moi de la force"
            friendsNumber={15}
            followersNumber={130}
            followingNumber={100}
            hobbies={["Video Games", "Sports", "Hiking", "Design"]}
            link1="google.com"
          />
        );
      case "Messages":
        return <div>Messages Component</div>;
      case "Groups":
        return (
          <div>
            <div className="flex flex-col mt-3 center-items">
              <div className="flex flex-col">
                <div className="text-subtileText mb-2">Create</div>
                <button className="text-subTitle bg-inputField-background mb-2 pl-2 pr-4 py-2 border border-inputField-outline w-full rounded-lg">
                  + Create a new group
                </button>
                <div className="text-subtileText mb-2">Groups</div>

                <Groups
                  profileGroupName="Video Games"
                  profileGroupMembersNumber={300}
                  profileJoinedGroup={true}
                />

                <Groups
                  profileGroupName="Pet Walking"
                  profileGroupMembersNumber={300}
                  profileJoinedGroup={false}
                />
              </div>
            </div>
          </div>
        );
      case "Events":
        return (
          <Events
            eventImage={kingWhale}
            eventName="Highschool Gathering"
            date="3rd June"
          />
        );
      case "Settings":
        return <Settings />;

      default:
        return (
          <div>
            <UserPost />
            <div className="my-6">
              <div className="text-subTitle">Feed</div>
              {/* {record?.map((post: any) => (
                <Feed
                  key={post.id}
                  id={post.id}
                  author={post.author}
                  content={post.content}
                  createdAt={post.createdAt}
                  comments={[]}
                  likes={[]}
                />
              ))} */}
              {/* <Feed
                id="100"
                username="Victor"
                userPseudo="victor"
                content="j'ai créer mon only fan, donnez moi de la force"
                createdAt="1h"
                commentsNumber={10}
                likesNumber={10}
              />
              <Feed
                id="1000"
                username="Victor"
                userPseudo="victor"
                content="j'ai créer mon only fan, donnez moi de la force"
                createdAt="1h"
                commentsNumber={10}
                likesNumber={10}
              />
              <Feed
                id="102"
                username="Victor"
                userPseudo="victor"
                content="j'ai créer mon only fan, donnez moi de la force"
                createdAt="2h"
                commentsNumber={10}
                likesNumber={10}
              /> */}
            </div>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-row bg-background h-screen  space-x-32 ">
      <div className="columns-1 w-1/6 bg-white ">
        <Menu
          onChangeMenu={onChangeMenu}
          activeMenu={activeMenu}
          userName="Dimitar Dimitrov"
          userPseudo="dimitroweb"
        />
      </div>
      <div className="columns-2 flex flex-col w-4/6 pt-10 h-screen center-items">
        <div className=" flex flex-col w-full">{renderContent()}</div>
      </div>
      <div className="columns-3 w-3/6 flex flex-col h-screen center-items pt-10">
        <Suggestions
          userName="Victor Dubrana"
          userImage={kingWhale}
          hobby="Hiking"
        />
        <Events
          eventImage={kingWhale}
          eventName="Highschool Gathering"
          date="3rd June"
        />
        <GroupsForYou
          groupsName="Video Games"
          groupsNumber={300}
          groupImage={kingWhale}
        />
      </div>
    </div>
  );
}
