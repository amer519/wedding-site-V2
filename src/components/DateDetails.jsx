import React from "react";

const DateDetails = () => {
  return (
    <section id="date" className="details">
      <h2>Wedding Details</h2>
      <p>📍 Location: Grand Venue, City</p>
      <p>⏰ Time: 5:00 PM</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default DateDetails;
