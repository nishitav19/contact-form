import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName((e.target.id = e.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail((e.target.id = e.target.value));
  };

  const handleMessageChange = (e) => {
    setMessage((e.target.id = e.target.value));
  };

  return (
    <div className="contact-form">
      <div className="align-header">
        <h3>Get in touch!</h3>
        <div className="align-icons">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <i
            className="fa fa-envelope"
            aria-hidden="true"
            style={{ fontSize: "24px" }}
          ></i>
        </div>
        <div className="align-icons-text">
          <p>102 Street 5093 Lyon</p>
          <p>+02 1234 567</p>
          <p>support@aotinc.com</p>
        </div>
        <div className="form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Sarah Jones"
              value={name}
              onChange={handleNameChange}
            />
            <label>Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="sarahjones@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
            <label>Message</label>
            <textarea
              type="text"
              id="message"
              required
              placeholder="Describe the message below."
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
