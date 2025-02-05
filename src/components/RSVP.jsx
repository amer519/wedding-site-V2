import React from "react";

const RSVP = () => {
  return (
    <section id="rsvp" className="rsvp">
      <h2>RSVP Here</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
        width="100%"
        height="600"
        frameBorder="0"
      >
        Loading...
      </iframe>
    </section>
  );
};

export default RSVP;
