import React, { useState } from "react";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "",
    mealPreference: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc7RVbWopToXSISCLVVt3zZXhBsVa8favkIExu055Skwl9Q7A/formResponse";

    const formDataEncoded = new FormData();
    formDataEncoded.append("entry.442080932", formData.name);          // Name
    formDataEncoded.append("entry.1780835518", formData.email);        // Email
    formDataEncoded.append("entry.1667842379", formData.guests);       // Guests
    formDataEncoded.append("entry.293874655", formData.mealPreference); // Meal Preference
    formDataEncoded.append("entry.7778889990", formData.attending);    // Attending

    fetch(formURL, {
      method: "POST",
      body: formDataEncoded,
      mode: "no-cors", // Prevents CORS errors
    })
      .then(() => {
        alert("RSVP submitted successfully!");
        setFormData({ name: "", email: "", attending: "", guests: "", mealPreference: "" });
      })
      .catch((error) => console.error("Error submitting RSVP:", error));
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <h2>RSVP Here</h2>
      <form onSubmit={handleSubmit} className="rsvp-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="attending"
          value={formData.attending}
          onChange={handleChange}
          required
        >
          <option value="">Will you attend?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
        />

        <select
          name="mealPreference"
          value={formData.mealPreference}
          onChange={handleChange}
          required
        >
          <option value="">Select a Meal Preference</option>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Fish">Fish</option>
        </select>

        <button type="submit" className="rsvp-btn">Submit RSVP</button>
      </form>
    </section>
  );
};

export default RSVP;