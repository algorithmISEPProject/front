import React from "react";
import CreateEvent from "@/pages/events/components/createEvent";
import Event from "@/pages/events/components/event";

function EventsPage() {
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
            <Event
              eventsDate="3rd March"
              eventsName="Highschool Gathering"
              eventsNumber={1253}
              eventsPlace="Richelieu Highschool"
            />
            <Event
              eventsDate="3rd June to 4th June"
              eventsName="Festival"
              eventsNumber={1253}
              eventsPlace="Hippodrome de Longchamps"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
