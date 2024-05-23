import React from "react";
import Image from "next/image";
import Feed from "../feed/feed";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

interface UserPost {
  _id: string;
  username: string;
  content: string;
  userIconURL: string;
  createdAt: string;
  likesNumber: number;
  commentsNumber: number;
}

export default function ProfilePosts() {
  const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });

  const GET_USER_POSTS = gql`
    query GetUserposts {
      userPosts {
        _id
        username
        content
        userIconURL
        createdAt
        likesNumber
        commentsNumber
      }
    }
  `;

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

  const DisplayUserPosts = () => {
    const { loading, error, data } = useQuery<{ userPosts: UserPost[] }>(
      GET_USER_POSTS
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);

    return (
      <div>
        {data!.userPosts.map((userPost) => (
          <div key={userPost._id}>
            <Feed userName={userPost.username} userPseudo={userPost.username} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <ApolloProvider client={client}>
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
        <DisplayUserPosts />
      </div>
    </ApolloProvider>
  );
}
