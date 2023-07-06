import React, { useState } from "react";
import moment from "moment";

function App() {
  const [fromDate, setFromDate] = useState("");
  const [duration, setDuration] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFromDateChange = (event) => {
    const selectedDate = moment(event.target.value);
    setFromDate(selectedDate);
    updateToDate(selectedDate, duration);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    updateToDate(fromDate, event.target.value);
  };

  const updateToDate = (start, duration) => {
    if (start && duration) {
      const calculatedDate = moment(start).add(duration, "hours");
      setToDate(calculatedDate);
    } else {
      setToDate("");
    }
  };

  return (
    <div>
      <h1>Date Picker </h1>
      {toDate && <p>Calculated To Date: {toDate.format("YYYY-MM-DD HH:mm")}</p>}

      <div>
        <label htmlFor="from-date">From Date:</label>
        <input
          id="from-date"
          type="datetime-local"
          value={fromDate}
          onChange={handleFromDateChange}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration (hours):</label>
        <input
          id="duration"
          type="number"
          min="0"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>
      <div>
        <label htmlFor="to-date">To Date</label>
        <input id="to-date" type="datetime-local" value={toDate} readOnly />
      </div>
    </div>
  );
}

export default App;
