// File: Projects.js Name: Lit Tung Hui Student ID: 301387861 Date: 2024-09-28

import Project from "../components/Project";
import gallery from "../assets/gallery.png";
import bug from "../assets/bug.png";
import protectedArea from "../assets/protectedArea.png";

export default function Projects() {
  const projects = [
    {
      title: "Gallery",
      description:
        "This project creates an interactive image carousel with a zoom feature, allowing users to add up to five images to a favorites list, manage favorites, and remove them dynamically.",
      image: gallery,
      alt: "Gallery",
    },
    {
      title: "Catch the Bug Game",
      description:
        "This project involves a game where a bug hops randomly around the game area at set intervals, with the player attempting to catch it by clicking, which increases the score and speeds up the bug's movement, while offering reset buttons for both speed and score to manage difficulty.",
      image: bug,
      alt: "Bug Game",
    },
    {
      title: "Protected Area",
      description:
        "This is a static page for information of protected area. There are some basic definition of protected area and some website that provide information about protected area.",
      image: protectedArea,
      alt: "Protected Area",
    },
  ];

  return (
    <div className="container-fluid mb-5">
      <h1 className="text-green mt-3 mb-3">Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
