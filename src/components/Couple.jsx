import React from "react";
import brideImage from "../assets/bride.jpg";
import groomImage from "../assets/groom.jpg";

// Add your new images here
import leftVine from "../assets/left-vine.png";
import rightVine from "../assets/right-vine.png";
// import ring from "../assets/ring.png";

const Couple = () => {
  return (
    <section id="couple" className="couple-section">
      <div className="couple-info">
        <h2>Meet the Couple</h2>
        <p>Our love story started 5 years ago...</p>
      </div>


      <div className="couple-images">

        <img src={leftVine} alt="Left Vine" className="vine vine-left" />


        <div className="person">
          <img src={brideImage} alt="Bride" className="circular-img" />
          <p>Bride's Name</p>
        </div>


        {/* <img src={ring} alt="Wedding Ring" className="ring" /> */}


        <div className="person">
          <img src={groomImage} alt="Groom" className="circular-img" />
          <p>Groom's Name</p>
        </div>


        <img src={rightVine} alt="Right Vine" className="vine vine-right" />
      </div>
    </section>
  );
};

export default Couple;