import React, { useState } from "react";
import checkmark from "../../images/checkmark.svg";

function ContactForm() {
  const [submitClicked, setSubmitClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitClicked(true);
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">NAME</label>
        <br />
        <input
          id="name"
          type="text"
          name="name"
          maxLength="256"
          onChange={(e) => setSubmitClicked(false)}
          required
        />{" "}
        <br />
        <label htmlFor="email">EMAIL</label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
          maxLength="256"
          onChange={(e) => setSubmitClicked(false)}
          required
        />
        <br />
        <label htmlFor="message">MESSAGE</label>
        <br />
        <textarea
          maxLength="5000"
          id="message"
          placeholder="Hello..."
          onChange={(e) => setSubmitClicked(false)}
          required></textarea>
        <br />
        <button className="contact-submit">Submit</button>
      </form>

      {submitClicked ? (
        <div className="contact-success">
          <img src={checkmark} alt="Checkmark" />
          <span>Thank you for contacting us.</span>
        </div>
      ) : null}
    </div>
  );
}

export default ContactForm;
