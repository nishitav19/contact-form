import React from "react";

function Contact() {
  return (
    <div className="contact-form">
      <div className="align-header">
        <h2>Get in touch!</h2>
        <div className="align-icons">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <i
            className="fa fa-envelope"
            aria-hidden="true"
            style={{ fontSize: "20px" }}
          ></i>
        </div>
        <div className="align-icons-text">
          <p>102 Street 5093 Lyon</p>
          <p>+02 1234 567</p>
          <p>support@aotinc.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
