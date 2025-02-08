import React from "react";

const DateDetails = () => {
  return (
    <section id="date" className="details">
      {/* Curved Background Behind Text */}
      <div className="details-content">
        <h2>Wedding Details</h2>
        <p>📍 Location: The Mansion on Main Street</p>
        <p>⏰ Time: 5:00 PM</p>
      </div>

      {/* Google Maps - Outside the Background */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.365297239!2d-74.9490921242415!3d39.86605468897166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1333e58b01c71%3A0xbbba0dccff3ebce9!2sThe%20Mansion%20on%20Main%20Street!5e0!3m2!1sen!2sus!4v1738900325491!5m2!1sen!2sus"
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