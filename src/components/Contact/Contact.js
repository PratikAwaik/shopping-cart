import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <p>
          Do you have questions or comments about our posters! Send us a message
          here and we'll get back to you as quickly as possible!
        </p>

        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
