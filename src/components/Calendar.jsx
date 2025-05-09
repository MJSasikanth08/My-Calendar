import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import './Calendar.css';
import Sidebar from './Sidebar';
import AddEventModal from './AddEventModal';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(setEvents);
  }, []);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const getEventsForDate = (date) => {
    return events.filter(event => dayjs(event.date).isSame(date, 'day'));
  };

  const startOfMonth = currentMonth.startOf('month');
  const startDay = startOfMonth.startOf('week');
  const dateGrid = [];
  let day = startDay;

  for (let i = 0; i < 42; i++) {
    dateGrid.push(day);
    day = day.add(1, 'day');
  }

  const goToNextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));
  const goToPrevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'));

  return (
    <div className="calendar-wrapper">
      <Sidebar events={events} />

      <div className="calendar-container">
        <div className="calendar-header">
          <h2>{currentMonth.format('MMMM YYYY')}</h2>
          <div>
            <button onClick={goToPrevMonth}>◀</button>
            <button onClick={goToNextMonth}>▶</button>
            <button onClick={() => setShowModal(true)}>+ Add Event</button>
          </div>
        </div>

        <div className="day-labels">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((label) => (
            <div key={label}>{label}</div>
          ))}
        </div>

        <div className="calendar-grid">
          {dateGrid.map((date, index) => {
            const isToday = date.isSame(dayjs(), 'day');
            const eventsForDate = getEventsForDate(date);

            return (
              <div key={index} className={`calendar-cell ${isToday ? 'today' : ''}`}>
                <div className="cell-date">{date.date()}</div>
                {eventsForDate.map((event, i) => (
                  <div
                    key={i}
                    className="event"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#ffcc80' : '#b39ddb'
                    }}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {showModal && (
        <AddEventModal
          onClose={() => setShowModal(false)}
          onAdd={addEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
