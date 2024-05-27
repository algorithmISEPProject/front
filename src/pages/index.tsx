import PostComponent from "@/components/postComponent";
import UserPost from "@/components/userPost";
import { useAuth } from "@/context/AuthContext";
import { gql, useQuery, useSubscription } from "@apollo/client";

import { Montserrat } from "next/font/google";
import { useState } from "react";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const { user } = useAuth();
  const [hasNewPost, setHasNewPost] = useState(false);
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

  const POST_SUBSCRIPTION = gql`
    subscription addedPost {
      onAddedPost {
        id
        author {
          avatar
          _id
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { posts },
  });

  const { data: subscriptionData, loading: subLoading } =
    useSubscription(POST_SUBSCRIPTION);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="w-4/6 space-y-3">
        <UserPost />
        {hasNewPost && (
          <div
            className={`p-2 cursor-pointer text-center text-subTitle border hover:bg-componentBackground/50 transition-all border-componentBackground rounded-lg`}
          >
            <p className="text-subtileText">
              Load{" "}
              <span className="text-subTitle">
                {subscriptionData.onAddedPosts.length}
              </span>
              new posts
            </p>
          </div>
        )}

        {data.posts.map((post: any) => (
          <PostComponent {...post} />
        ))}
      </div>
    </div>
  );
}
