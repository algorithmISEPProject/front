import { useAuth } from "@/context/AuthContext";
import { gql, useQuery } from "@apollo/client";
import PostComponent from "./postComponent";

export default function SubscriptionFeed(userId: any) {
  const { user } = useAuth();

  const GET_FOLLOWING_POSTS = gql`
  query getFollowingPosts($_id: ID = ${JSON.stringify(user._id)}) {
    posts(where: {author: {followers_SOME: {_id: $_id}}} options: {sort: {createdAt: DESC}}) {
      content
      createdAt
      id
      imageURL
      author {
        _id
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

  const { loading, error, data } = useQuery(GET_FOLLOWING_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>No data found</p>;

  console.log(data);

  return (
    <div className="space-y-3">
      {data.posts.length === 0 && (
        <p className="flex justify-center items-center text h-32 text-subTitle">
          Sorry, either your are not following anyone or they have not posted.
        </p>
      )}
      {data.posts.map((item: any) => (
        <div key={item.id}>
          <PostComponent {...item} />
        </div>
      ))}
    </div>
  );
}
