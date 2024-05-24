import React from "react";
import Image from "next/image";
import Feed from "../feed/feed";
import {
  Post,
  User,
  UserPostsQuery,
  UserPostsQueryVariables,
  Comment,
  Hobby,
  Event,
  Group,
} from "../../../pages/api/typeInterface";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

export default function ProfilePosts() {
  const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });

  const GET_USER_POSTS = gql`
    query GetUserPosts($username: String!) {
      userPosts(username: $username) {
        id
        content
        imageURL
        createdAt
        author {
          username
          avatar
        }
        comments {
          id
          content
          createdAt
          author {
            username
          }
        }
        likes {
          username
        }
      }
    }
  `;

  const DisplayUserPosts = () => {
    const { loading, error, data } = useQuery<
      UserPostsQuery,
      UserPostsQueryVariables
    >(GET_USER_POSTS, { variables: { username: "vic_dub" } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (!data) return <p>No data found</p>;
    console.log(data);

    return (
      <div>
        {data!.userPosts.map((userPost) => (
          <div key={userPost.id}>
            <Feed
              id={userPost.author.id}
              author={userPost.author}
              content={userPost.content}
              createdAt={userPost.createdAt}
              likes={userPost.likes}
              comments={userPost.comments}
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
