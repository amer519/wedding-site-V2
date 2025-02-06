import React from "react";

const DateDetails = () => {
  return (
    <section id="date" className="details">
      {/* Curved Background Behind Text */}
      <div className="details-content">
        <h2>Wedding Details</h2>
        <p>📍 Location: Grand Venue, City</p>
        <p>⏰ Time: 5:00 PM</p>
      </div>

      {/* Google Maps - Outside the Background */}
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="350"
        style={{ border: "0", borderRadius: "8px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default DateDetails;
