import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import DateDetails from "./components/DateDetails";
import Gallery from "./components/Gallery";
import WeddingParty from "./components/WeddingParty";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Couple />
      <DateDetails />
      <Gallery />
      <WeddingParty />
      <RSVP />
      <Footer />
    </>
  );
};

export default App;
