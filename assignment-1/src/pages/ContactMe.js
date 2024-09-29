// File: ContactMe.js Name: Lit Tung Hui Student ID: 301387861 Date: 2024-09-28

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactMe() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phone, message);
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-green mt-3 mb-3">Contact Me</h1>

      <div>Name: Lit Tung Hui</div>
      <div>Email: lhui15@my.centennialcollege.ca</div>
      <div>Phone: (437) 858-2495</div>

      <p className="mt-4">Please fill in the form below to contact me</p>
      <form
        onSubmit={handleSubmit}
        className="mt-4 shadow"
        style={{ width: "50%", padding: "20px" }}
      >
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
