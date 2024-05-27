import React from "react";
import CreateEvent from "@/pages/events/components/createEvent";
import Event from "@/pages/events/components/event";
import { gql, useQuery } from "@apollo/client";
import { IEvent } from "@/interface/typeInterface";
import EventComp from "@/components/events/eventComp";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import leftIcon from "@/assets/leftIcon.svg";
import Image from "next/image";
import UserPostEvent from "./components/userPostEvent";
import PostComponent from "@/components/postComponent";

function EventPage(props: IEvent) {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const GET_EVENT = gql`
    query getEvents($id: ID!) {
      events(where: { id: $id }, options: { sort: { date: DESC } }) {
        id
        name
        location
        eventImage
        description
        date
        createdAt
        attendees {
          avatar
          _id
          username
        }
        attendeesAggregate {
          count
        }
      }
    }
  `;

  const GET_POSTS_EVENTS = gql`
    query getEventPosts($id: ID!) {
      events(where: { id: $id }) {
        posts {
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
    }
  `;

  const {
    loading: eventLoading,
    error: eventError,
    data: eventData,
  } = useQuery(GET_EVENT, {
    variables: { id },
    skip: !id, // Skip the query until the ID is available
  });

  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_POSTS_EVENTS, {
    variables: { id },
    skip: !id,
  });

  if (eventLoading || postsLoading) return <p>Loading...</p>;

  console.log(eventData);
  console.log(postsData);

  return (
    <div className="">
      <div className="w-full flex justify-center">
        <div className="space-y-5 w-4/6">
          <div className="space-y-2">
            <div>
              <Link className="flex space-x-4 items-center" href={"/events"}>
                <Image alt="leftIcon" src={leftIcon} width={10} />
                <div>Go back to events</div>
              </Link>
            </div>
            <div className="flex w-full flex-col p-5 space-y-4 bg-componentBackground border border-btn-outline rounded-xl">
              <div className="h-36 bg-white rounded"></div>
              <div>
                <div className="text-white">{eventData.events[0].name}</div>
                <div className="text-white">
                  {eventData.events[0].description}
                </div>
              </div>
              <div className="flex items-center w-full">
                <div className="flex items-center w-full ">
                  <div className="text-subTitle ">
                    {eventData.events[0].attendeesAggregate.count} members
                  </div>
                </div>
              </div>
            </div>
            <div>
              <UserPostEvent eventId={eventData.events[0].id} />
            </div>
            <div className="space-y-4">
              <div>Group Posts</div>
              {postsData.events[0].posts.map((item: any) => (
                <div key={item.id}>
                  <PostComponent {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
