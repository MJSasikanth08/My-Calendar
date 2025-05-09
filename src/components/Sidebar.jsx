import React from 'react';
import dayjs from 'dayjs';

const Sidebar = ({ events }) => (
  <div className="sidebar">
    <h3>Upcoming Events</h3>
    <div className="event-list">
      {events.map((event, index) => (
        <div key={index} className="sidebar-event">
          <strong>{event.title}</strong>
          <br />
          <small>{dayjs(event.date).format('D/M/YYYY, h:mm a')}</small>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
