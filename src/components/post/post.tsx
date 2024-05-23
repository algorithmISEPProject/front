"use client";
import React, { ChangeEvent, useState } from "react";
import userIcon from "../../../public/userIcon.svg";
import textModif from "../../../public/textModif.svg";

import Image from "next/image";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

export interface PostProps {
  userImage: string;
  userPseudo: string;
  userName: string;
  content: string;
  numberLikes: number;
  numberComments: number;
}

interface User {
  _id: string;
  username: string;
  hobbies: Hobby[];
  posts: Post[];
}

interface Post {
  id: string;
  content: string;
  imageURL: string;
  createdAt: string;
}

interface Hobby {
  id: string;
  name: string;
}

export default function Post() {
  const GET_USERS = gql`
    query GetUsers {
      users {
        _id
        username
        hobbies {
          id
          name
        }
      }
    }
  `;

  /* function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.locations.map(({ id, name, description, photo }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img
          width="400"
          height="250"
          alt="location-reference"
          src={`${photo}`}
        />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>
    ));
  }*/

  const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });

  const DisplayUsers = () => {
    const { loading, error, data } = useQuery<{ users: User[] }>(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
      <div className="text-white">
        <h2>Users</h2>
        {data!.users.map((user) => (
          <div key={user._id}>
            <p>Username: {user.username}</p>
            <p>Hobbies:</p>
            <ul>
              {user.hobbies.map((hobby) => (
                <li key={hobby.id}>{hobby.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <ApolloProvider client={client}>
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
        <DisplayUsers />
      </div>
    </ApolloProvider>
  );
}
