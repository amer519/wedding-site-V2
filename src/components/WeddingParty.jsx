import React from "react";

const WeddingParty = () => {
  return (
    <section id="wedding-party" className="wedding-party">
      <h2>Meet the Wedding Party</h2>
      <p>Here are our amazing bridesmaids and groomsmen!</p>
      <div className="wedding-party-grid">
        <div className="party-member">
          <img src="/assets/bridesmaid1.jpg" alt="Bridesmaid" />
          <p>Bridesmaid Name</p>
        </div>
        <div className="party-member">
          <img src="/assets/groomsman1.jpg" alt="Groomsman" />
          <p>Groomsman Name</p>
        </div>
      </div>
    </section>
  );
};

export default WeddingParty; 