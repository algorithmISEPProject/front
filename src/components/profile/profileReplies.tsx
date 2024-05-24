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

interface UserRepliedPost {
  _id: string;
  username: string;
  content: string;
  userIconURL: string;
  createdAt: string;
  likesNumber: number;
  commentsNumber: number;
  liked?: boolean;
  replied?: boolean;
}

export default function ProfileReplies() {
  const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });

  const GET_USER_REPLIED_POSTS = gql`
    query GetUserRepliedposts {
      userRepliedPosts {
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
      userRepliedPosts: UserRepliedPost[];
    }>(GET_USER_REPLIED_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);

    return (
      <div>
        {data!.userRepliedPosts.map((userRepliedPost) => (
          <div key={userRepliedPost._id}>
            <Feed
              _id={userRepliedPost._id}
              username={userRepliedPost.username}
              userPseudo={userRepliedPost.username}
              content={userRepliedPost.content}
              createdAt={userRepliedPost.createdAt}
              likesNumber={userRepliedPost.likesNumber}
              commentsNumber={userRepliedPost.commentsNumber}
              liked={userRepliedPost.liked}
              replied={userRepliedPost.replied}
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
