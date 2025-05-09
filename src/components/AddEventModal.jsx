import React, { useState } from 'react';
import './Calendar.css';

const AddEventModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = () => {
    const fullDate = `${date}T${time}`;
    onAdd({ title, date: fullDate, duration });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Add New Event</h3>
        <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input type="date" onChange={e => setDate(e.target.value)} />
        <input type="time" onChange={e => setTime(e.target.value)} />
        <input type="text" placeholder="Duration" onChange={e => setDuration(e.target.value)} />
        <div className="modal-buttons">
          <button onClick={handleSubmit}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddEventModal;
