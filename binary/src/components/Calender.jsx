import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function EventCalendar() {
  const [events, setEvents] = useState([
    {
      title: "Initial Event",
      date: "2024-10-18",
    },
  ]);

  // Handle the dateClick event to add a new event
  function handleDateClick(info) {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  }

  // Custom render function for events
  function renderEventContent(eventInfo) {
    return (
      <div className="custom-event">
        <strong>{eventInfo.timeText}</strong>
        <span>{eventInfo.event.title}</span>
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          selectable={true}
          aspectRatio={1.5} // Aspect ratio adjusted for better height/width balance
          eventContent={renderEventContent} // Custom rendering for events
        />
      </div>
    </div>
  );
}
