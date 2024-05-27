import React from "react";
import CreateEvent from "@/pages/events/components/createEvent";
import Event from "@/pages/events/components/event";
import { gql, useQuery } from "@apollo/client";
import { IEvent } from "@/interface/typeInterface";
import EventComp from "@/components/events/eventComp";

function EventsPage(props: IEvent) {
  const GET_EVENTS = gql`
    query getEvents1 {
      events(options: { sort: { date: DESC } }) {
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

  const { loading, error, data } = useQuery(GET_EVENTS);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  console.log(data);

  return (
    <div className="">
      <div className="w-full flex justify-center">
        <div className="space-y-5 w-4/6">
          <div className="space-y-2">
            <div>Create</div>
            <CreateEvent />
          </div>
          <div className="space-y-2">
            <div>Events</div>
            <div className="space-y-2">
              {data.events?.map((item: any) => (
                <Event {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
