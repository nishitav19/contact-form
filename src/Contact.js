import React from "react";

function Contact() {
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
            <input type="text" required placeholder="Sarah Jones" />
            <label>Email</label>
            <input type="email" required placeholder="sarahjones@gmail.com" />
            <label>Message</label>
            <textarea
              type="text"
              required
              placeholder="Describe the message below."
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
