// File: AboutMe.js Name: Lit Tung Hui Student ID: 301387861 Date: 2024-09-28

import image from "../assets/253A9244ecrop.jpg";
import resume from "../assets/Resume.pdf";

export default function AboutMe() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-green mt-3">About Me</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p>
              Name: <b>Lit Tung Hui</b>
            </p>
            <p>
              I am an independent and adaptable fast learner with strong
              communication skills. With 2 years of experience as a front-end
              and full-stack developer, I am ready to thrive in the fast-paced
              IT industry. Click <a href={resume}>here</a> to view my resume.
            </p>
            <h2 className="text-green">My Hobbies</h2>
            <ul>
              <li>Hiking</li>
              <li>Running</li>
              <li>Photography</li>
              <li>Playing snooker</li>
              <li>Watching movies</li>
              <li>Listening music</li>
            </ul>
          </div>
          <div className="col">
            <div
              style={{
                width: "250px",
                height: "300px",
              }}
            >
              <img
                src={image}
                alt="me"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid"></div>
    </>
  );
}
