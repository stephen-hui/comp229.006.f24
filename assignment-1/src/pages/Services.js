// File: Services.js Name: Lit Tung Hui Student ID: 301387861 Date: 2024-09-28

import React from "react";
import react from "../assets/ReactIcon.png";
import reactNative from "../assets/reactNative.png";

export default function Services() {
  return (
    <div className="container-fluid">
      <h1 className="text-green mt-3">Services</h1>
      <ul className="list-group mb-5">
        <li className="list-group-item">Web Development</li>
        <li className="list-group-item">General Programming</li>
        <li className="list-group-item">Mobile Apps Development</li>
      </ul>
      <img src={react} alt="React" />
      <img src={reactNative} alt="React Native" />
    </div>
  );
}
