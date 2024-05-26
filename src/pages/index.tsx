import Feed from "@/components/postComponent";
import UserPost from "@/components/userPost";
import { useAuth } from "@/context/AuthContext";
import { gql, useQuery } from "@apollo/client";

import { Montserrat } from "next/font/google";
import { useState } from "react";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  const GET_POSTS = gql`
    query getPosts {
      posts(options: { sort: { createdAt: DESC } }) {
        content
        createdAt
        id
        imageURL
        author {
          avatar
          firstName
          username
        }
        likesAggregate {
          count
        }
        commentsAggregate {
          count
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { posts },
  });

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="w-4/6 space-y-3">
        <UserPost />
        {user?.firstName}
        {data.posts.map((post: any) => (
          <Feed {...post} />
        ))}
      </div>
    </div>
  );
}
