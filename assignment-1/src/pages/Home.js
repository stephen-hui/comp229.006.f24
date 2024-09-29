// File: Home.js Name: Lit Tung Hui Student ID: 301387861 Date: 2024-09-28
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid">
      <h1 className="text-green mt-3">Hello World!</h1>
      <div id="self-intro">
        <p>
          Hi, I am studying software engineering technician in Centennial
          College. I come from Hong Kong.
        </p>
        <p>
          To know more about me, you can visit my{" "}
          <NavLink to="/about">About page</NavLink>.
        </p>
        <p>
          You can find me on <a href="https://github.com/stephen-hui">GitHub</a>{" "}
          and some of my projects on{" "}
          <NavLink to="/projects">Projects page</NavLink>.
        </p>
        <p className="text-green">
          <b> Coding is fun! </b>
        </p>
      </div>
    </div>
  );
}
