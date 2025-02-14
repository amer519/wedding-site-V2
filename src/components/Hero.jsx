import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import weddingbackground from "../assets/weddingbackground.jpg"; 

const weddingDate = new Date("2026-06-25T00:00:00");

// Animated number component
const AnimatedNumber = ({ number }) => (
  <motion.span
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {number}
  </motion.span>
);

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(weddingDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(weddingDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <Parallax bgImage={weddingbackground} strength={300} className="parallax-container">
      <div className="hero-content">
        <motion.h1 
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Welcome to Our Wedding
        </motion.h1>
        <h2>June 25, 2026</h2>
        <p>
          Countdown: 
          <AnimatedNumber number={days} /> days, 
          <AnimatedNumber number={hours} /> hours, 
          <AnimatedNumber number={minutes} /> minutes, 
          <AnimatedNumber number={seconds} /> seconds
        </p>
      </div>
    </Parallax>
  );
};

export default Hero;