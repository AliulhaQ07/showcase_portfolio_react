import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import js from "../assets/images/js.png";
import react from "../assets/images/physics.png";
import bootstrap from "../assets/images/bootstrap.png";
import github from "../assets/images/github.png";
import ExperienceDivDesign from "../components/ExperienceDivDesign.jsx";

const Experience = () => {
  return (
    <div className="font-montserrat h-screen flex flex-col items-center justify-start bg-gray-900 gap-4 text-white py-4">
      {/* Heading */}
      <h1 className="font-bold text-2xl mb-8">EXPERIENCE</h1>
      {/* Responsive container for content */}
      <div className="w-full max-w-7xl mx-auto p-8 md:p-8 bg-gray-800 rounded">
        {/* Experience items */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          <ExperienceDivDesign text={"HTML"} imgUrl={html} />
          <ExperienceDivDesign text={"CSS"} imgUrl={css} />
          <ExperienceDivDesign text={"JAVA SCRIPT"} imgUrl={js} />
          <ExperienceDivDesign text={"REACT"} imgUrl={react} />
          <ExperienceDivDesign text={"BOOTSTRAP"} imgUrl={bootstrap} />
          <ExperienceDivDesign text={"GITHUB"} imgUrl={github} />
        </div>
      </div>
      {/* Responsive container for content */}
      <div className="w-full max-w-7xl mx-auto p-8 md:p-8 bg-gray-800 rounded  ">
        <h1 className="text-xl font-semibold  mt-6 mb-3">
          WEB DEVELOPER & DESIGNER
        </h1>
        <p className="text-white leading-relaxed">
          I am a{" "}
          <span className="font-semibold ">passionate Web Developer</span> with
          a strong foundation in
          <span className="font-semibold "> HTML</span>,
          <span className="font-semibold ">CSS</span>,
          <span className="font-semibold "> JavaScript</span>, and frameworks
          like
          <span className="font-semibold"> Bootstrap</span> and
          <span className="font-semibold "> Tailwind CSS</span>. I specialize in
          designing and developing
          <span className="font-semibold "> responsive</span>,
          <span className="font-semibold">user-friendly websites</span> that
          deliver excellent user experiences.
        </p>

        <h2 className="text-xl font-semibold  mt-6 mb-3">React Expertise</h2>
        <p className="text-gray-100 leading-relaxed">
          My skills extend to <span className="font-semibold ">React</span>,
          where I focus on building
          <span className="font-semibold "> dynamic</span>,
          <span className="font-semibold ">component-based applications</span>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">UI/UX Design</h2>
        <p className="text-white leading-relaxed">
          In addition to my web development expertise, I have hands-on
          experience in
          <span className="font-semibold"> UI/UX design</span>, working with
          <span className="font-semibold">Figma</span> to create intuitive
          interfaces for web and mobile applications. I conduct{" "}
          <span className="font-semibold">user research</span>, design
          <span className="font-semibold"> wireframes</span> and
          <span className="font-semibold"> prototypes</span>, and iterate on
          feedback to ensure that my designs meet
          <span className="font-semibold"> user needs</span>.
        </p>
      </div>
    </div>
  );
};

export default Experience;
