import React from "react";
import TopBanner from './components/TopBanner';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import DateDetails from "./components/DateDetails";
import Gallery from "./components/Gallery";
import WeddingParty from "./components/WeddingParty";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const App = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <motion.section id="home" variants={fadeIn} initial="hidden" animate="visible">
      <Hero />
      </motion.section>
      <motion.section id="home" variants={fadeIn} initial="hidden" animate="visible">
      <Couple />
      </motion.section>
      <DateDetails />
      <Gallery />
      <WeddingParty />
      <RSVP />
      <Footer />
    </>
  );
};

export default App;
