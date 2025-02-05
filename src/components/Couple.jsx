import React from "react";
import brideImage from "../assets/bride.jpg";
import groomImage from "../assets/groom.jpg";

const Couple = () => {
  return (
    <section id="couple" className="couple-section">
      <div className="couple-info">
        <h2>Meet the Couple</h2>
        <p>Our love story started 5 years ago...</p>
      </div>
      <div className="couple-images">
        <div className="person">
          <img src={brideImage} alt="Bride" className="circular-img" />
          <p>Bride's Name</p>
        </div>
        <div className="person">
          <img src={groomImage} alt="Groom" className="circular-img" />
          <p>Groom's Name</p>
        </div>
      </div>
    </section>
  );
};

export default Couple;