import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    e.persist();
    setState((state) => ({ ...state, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = state;
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success: ", result);
        if (result.status === "success") {
          Swal.fire({
            title: "Thank you for contacting us.",
            showClass: "success",
            icon: "success",
            width: "30em",
          });
          setState({
            name: "",
            email: "",
            message: "",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something went wrong!",
          html: "Please try again after sometime, thank you.",
          icon: "error",
          width: "30em",
        });
      });
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
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Sarah Jones"
              value={state.name}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="sarahjones@gmail.com"
              value={state.email}
              onChange={handleChange}
            />
            <label>Message</label>
            <textarea
              type="text"
              id="message"
              required
              placeholder="Describe the message below."
              value={state.message}
              onChange={handleChange}
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
