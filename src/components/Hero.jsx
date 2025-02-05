import React from "react";
import Countdown from "react-countdown";

const Hero = () => {
  const weddingDate = new Date("2025-06-15T00:00:00");

  return (
    <section id="home" className="hero">
      <h1>Welcome to Our Wedding</h1>
      <h2>June 15, 2025</h2>
      <Countdown date={weddingDate} />
    </section>
  );
};

export default Hero;
