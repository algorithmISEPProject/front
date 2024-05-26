import {
  UserPostsQuery,
  UserPostsQueryVariables,
} from "@/interface/typeInterface";

import { useAuth } from "@/context/AuthContext";
import { gql, useQuery } from "@apollo/client";
import PostComponent from "../../../components/postComponent";

export default function ProfilePosts() {
  const { user } = useAuth();
  const GET_USER_POSTS = gql`
    query getUserPost($_id: ID = ${JSON.stringify(user._id)}) {
      posts(where: { author: { _id: $_id }}, options: {sort: {createdAt: DESC}}) {
        content
        createdAt
        id
        imageURL
        likesAggregate {
          count
        }
        commentsAggregate {
          count
        }
        author {
          avatar
          _id
          firstName
          username
        }
      }
    }
  `;

  const DisplayUserPosts = () => {
    const { loading, error, data } = useQuery(GET_USER_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (!data) return <p>No data found</p>;
    console.log(data);

    return (
      <div className="space-y-3">
        {data?.posts?.map((item: any) => (
          <div key={item.id}>
            <PostComponent {...item} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <DisplayUserPosts />
    </div>
  );
}
