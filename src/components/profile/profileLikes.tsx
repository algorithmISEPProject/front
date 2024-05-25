import React from "react";
import Image from "next/image";
import Feed from "../postComponent";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

interface UserLikedPost {
  _id: string;
  username: string;
  content: string;
  userIconURL: string;
  createdAt: string;
  likesNumber: number;
  commentsNumber: number;
  liked: boolean;
  replied: boolean;
}

export default function ProfileLikes() {
  const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });

  const GET_USER_LIKED_POSTS = gql`
    query GetUserLikedPosts {
      userLikedPosts {
        _id
        username
        content
        userIconURL
        createdAt
        likesNumber
        commentsNumber
        liked
        replied
      }
    }
  `;

  const DisplayUserPosts = () => {
    const { loading, error, data } = useQuery<{
      userLikedPosts: UserLikedPost[];
    }>(GET_USER_LIKED_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);

    return (
      <div>
        {data!.userLikedPosts.map((userLikedPost) => (
          <div key={userLikedPost._id}>
            <Feed
              _id={userLikedPost._id}
              username={userLikedPost.username}
              userPseudo={userLikedPost.username}
              content={userLikedPost.content}
              createdAt={userLikedPost.createdAt}
              likesNumber={userLikedPost.likesNumber}
              commentsNumber={userLikedPost.commentsNumber}
              liked={userLikedPost.liked}
              replied={userLikedPost.replied}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <DisplayUserPosts />
      </div>
    </ApolloProvider>
  );
}
