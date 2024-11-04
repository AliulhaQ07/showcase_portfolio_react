import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import js from "../assets/images/js.png";
import react from "../assets/images/physics.png";
import bootstrap from "../assets/images/bootstrap.png";
import github from "../assets/images/github.png";
import tailwindcss from "../assets/images/tailwindcss.png"
import framermotion from '../assets/images/framer-motion.svg'
import ExperienceDivDesign from "../components/ExperienceDivDesign.jsx";
import {motion} from 'framer-motion'

const Experience = () => {
  return (

    <div className = "font-montserrat h-auto flex flex-col items-center justify-start gap-4 p-3" >
      {/* Heading */}
      <h1 className = "font-bold text-2xl mb-8" >EXPERIENCE</h1 >
      {/* Responsive container for content */}
      <div className = "w-full max-w-7xl mx-auto p-8 md:p-8 border rounded shadow-sm" >

        {/* Experience items */}
        <div className = "grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-8 " >
          <ExperienceDivDesign text = {"HTML"} imgUrl = {html} />
          <ExperienceDivDesign text = {"CSS"} imgUrl = {css} />
          <ExperienceDivDesign text = {"JAVA SCRIPT"} imgUrl = {js} />
          <ExperienceDivDesign text = {"REACT"} imgUrl = {react} />
          <ExperienceDivDesign text = {"BOOTSTRAP"} imgUrl = {bootstrap} />
          <ExperienceDivDesign text = {"GITHUB"} imgUrl = {github} />
          <ExperienceDivDesign text = {"TAILWINDCSS"} imgUrl = {tailwindcss} />
          <ExperienceDivDesign text = {"FRAMER-MOTION"} imgUrl = {framermotion} />
        </div >

      </div >


      {/* Responsive container for content */}
      <div className = "w-full max-w-7xl mx-auto p-8 md:p-8 border rounded shadow-sm  flex flex-col gap-8" >

        <div >
          <h1 className = "text-xl font-semibold  my-3 uppercase " >
            WEB DEVELOPER & DESIGNER
          </h1 >

          <ul className = 'list-none flex flex-col gap-2' >
            <li >Experienced frontend web developer with a focus on building responsive, user-centered applications.
            </li >
            <li >Skilled in HTML, CSS, JavaScript, and React, with additional expertise in Tailwind CSS and Bootstrap.
            </li >
            <li >Proficient in using GitHub for version control and collaborative development.</li >
          </ul >


        </div >


        <ul className = 'list-none flex flex-col gap-3 ' >

          <h1 className = "text-xl font-semibold  uppercase " >
           Recently worked at Future Vision, Lahore, where I:
          </h1 >

          <li > Collaborated closely with cross-functional teams.
          </li >
          <li > Implemented modern frontend development techniques.</li >
          <li > Designed intuitive, user-focused interfaces.</li >
        </ul >


        <ul className = 'list-none flex flex-col gap-4' >
          <h1 className = "text-xl font-semibold uppercase  " >
          PROJECTS: 
          </h1 >
          <li ><span className = 'font-semibold' >Campus Management System:</span > A comprehensive web application
                                                                                  developed as my final year project,
                                                                                  designed to streamline campus
                                                                                  administrative tasks. Built with
                                                                                  Django as the backend framework,
                                                                                  Bootstrap for responsive UI, and MySQL
                                                                                  for managing student and faculty
                                                                                  databases, this system supports
                                                                                  modules for attendance tracking,
                                                                                  course management, and scheduling. The
                                                                                  platform enhances campus operations by
                                                                                  centralizing data and providing an
                                                                                  efficient interface for students,
                                                                                  faculty, and administrators.
          </li >
          <li ><span className = 'font-semibold' >Furniture E-commerce Website Landing Page:</span > A modern, responsive
                                                                                                   landing page for a
                                                                                                   furniture e-commerce
                                                                                                   site. Built with
                                                                                                   React, Tailwind CSS
                                                                                                   for styling, and
                                                                                                   Framer Motion for
                                                                                                   animations, this page
                                                                                                   highlights featured
                                                                                                   collections with
                                                                                                   smooth transitions.
                                                                                                   React Router enables
                                                                                                   seamless page
                                                                                                   navigation, and state
                                                                                                   management handles
                                                                                                   product details.
          </li >
          <li ><span className = 'font-semibold' >Car Rental Website Landing Page:</span > A dynamic landing page for a
                                                                                         car rental service featuring
                                                                                         car categories, rental
                                                                                         services, and booking options.
                                                                                         Developed using React and
                                                                                         Tailwind CSS for a clean UI,
                                                                                         Framer Motion for engaging
                                                                                         animations, and React Router
                                                                                         for navigation across car
                                                                                         listings and service pages.
          </li >
          <li ><span className = 'font-semibold' >Personal Portfolio:</span > A personal portfolio website
                                                                            showcasing skills and projects,
                                                                            including interactive elements and
                                                                            smooth page transitions. Built with
                                                                            React, Tailwind CSS for design
                                                                            consistency, Framer Motion for
                                                                            animations, and React Router to enable
                                                                            smooth transitions between project
                                                                            sections.
          </li >

        </ul >


      </div >
    </div >);
};

export default Experience;
