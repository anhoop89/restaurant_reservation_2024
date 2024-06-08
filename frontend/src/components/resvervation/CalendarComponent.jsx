// build the calendar component 
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    setValue(date);
    // Handle the date change here, e.g., fetch available times for reservation
    console.log(date);
  };

  return (
    <div className="calendar-container">
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
};

export default CalendarComponent;
