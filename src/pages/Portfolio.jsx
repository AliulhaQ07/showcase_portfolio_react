import PortfolioNavButton from "../components/PortfolioNavButton.jsx";
import SplitContainer from "../components/SplitContainer.jsx";

import realEstate from "../assets/realestate.png";
import {useState} from "react";

const Portfolio = () => {
  // State to track the current section
  const [currentSection, setCurrentSection] = useState("DESKTOP DESIGN");

  // Function to handle navigation button click
  const handleNavButtonClick = (section) => {
    setCurrentSection(section);
  };


  return (
    <>
      {/* MASTER CONTAINER FOR MOBILE DESIGN */}
      <div className="font-montserrat h-auto flex flex-col items-center justify-start  gap-4  py-4 ">
        {/* Navigation Buttons */}
        <div className="my-2 container flex flex-wrap gap-6 justify-center">
          <PortfolioNavButton
            text={"MOBILE DESIGN"}
            onClick={() => handleNavButtonClick("MOBILE DESIGN")}
            isActive={currentSection === "MOBILE DESIGN"}
            activeBgColor="bg-white"
            activeTextColor="text-gray-900"
          />
          <PortfolioNavButton
            text={"DESKTOP DESIGN"}
            onClick={() => handleNavButtonClick("DESKTOP DESIGN")}
            isActive={currentSection === "DESKTOP DESIGN"}
            activeBgColor="bg-white"
            activeTextColor="text-gray-900"
          />
          <PortfolioNavButton
            text={"WEBSITE PROJECTS"}
            onClick={() => handleNavButtonClick("WEBSITE PROJECTS")}
            isActive={currentSection === "WEBSITE PROJECTS"}
            activeBgColor="bg-white"
            activeTextColor="text-gray-900"
          />
        </div>

        {/* Conditional Rendering of SplitContainer Sections */}
        {currentSection === "MOBILE DESIGN" && (
          <>
            {/* 1st */}
            <SplitContainer
              mainHeading={"Food Delivery Mobile App"}
              subHeading={"Quick and Reliable Food at Your Fingertips"}
              description={
                "A seamless food delivery app with an intuitive UI that allows users to browse local restaurants, customize orders, and track deliveries in real-time. Focus on minimalistic design, easy navigation, and vibrant food images."
              }
              buttonText={"Live Demo"}
              buttonLink={"#"}
              imageUrl={realEstate}
              altText={"Food Delivery Mobile App"}
            />
            {/* 2nd */}
            <SplitContainer
              mainHeading={"Recipe Sharing Mobile App"}
              subHeading={"Monitor Your Fitness Journey"}
              description={
                "A dashboard app that tracks workout routines, calories burned, and fitness goals. The UX design is focused on ease of access, personalized data visualization, and motivational elements like progress bars and achievement badges."
              }
              buttonText={"Live Demo"}
              buttonLink={"#"}
              imageUrl={realEstate}
              altText={"Fitness Tracker Dashboard"}
            />
            {/* 3rd */}
            <SplitContainer
              mainHeading={"E-Commerce Shopping Mobile App"}
              subHeading={"Monitor Your Fitness Journey"}
              description={
                "A dashboard app that tracks workout routines, calories burned, and fitness goals. The UX design is focused on ease of access, personalized data visualization, and motivational elements like progress bars and achievement badges."
              }
              buttonText={"Live Demo"}
              buttonLink={"#"}
              imageUrl={realEstate}
              altText={"Fitness Tracker Dashboard"}
            />
          </>
        )}

        {currentSection === "DESKTOP DESIGN" && (
          <>
            {/*  1st*/}
            <SplitContainer
              mainHeading={"Exam Maker Platform "}
              subHeading={"Streamlining Assessment Creation and Management"}
              description={
                "An intuitive exam maker platform designed to simplify the creation, distribution, and evaluation of assessments. With user-friendly templates, customizable question types, and robust analytics, educators can efficiently design tests that cater to diverse learning needs. The platform emphasizes accessibility, ensuring that both creators and participants have a seamless experience, while features like automated grading and feedback tools enhance the learning process."
              }
              buttonText={"Live Demo"}
              buttonLink={"#"}
              imageUrl={
                "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              altText={"img..."}
            />
            {/*2nd*/}
            <SplitContainer
              mainHeading={"Real Estate Platform "}
              subHeading={"Connecting Buyers, Sellers, and Agents Effortlessly"}
              description={
                "A comprehensive real estate platform that revolutionizes the way property transactions are conducted. With an intuitive interface, users can easily browse listings, schedule viewings, and connect with agents. The platform provides advanced search filters, virtual tours, and neighborhood insights, empowering users to make informed decisions. Enhanced features like chat support and transaction tracking ensure a smooth journey from search to purchase, while a mobile-responsive design caters to users on the go."
              }
              buttonText={"Live Demo"}
              buttonLink={
                "https://www.figma.com/proto/sPIyJ7HJwdmdj30DsdeF72/REAL-ESTATE-PRO?node-id=1-590&node-type=frame&t=HkNgUvPk3ooPqZe8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
              }
              imageUrl={realEstate}
              altText={"img..."}
            />

            {/*3nd*/}
            <SplitContainer
              mainHeading={"The Code Logs "}
              subHeading={"Fostering Connections in a Digital World"}
              description={
                "A dynamic social media platform that encourages interaction and community building among users. Featuring a clean and engaging interface, the platform supports multimedia sharing, real-time messaging, and personalized feeds tailored to user interests. With robust privacy settings and content moderation tools, users can connect safely while exploring diverse perspectives. The platform also integrates innovative features like live streaming and group discussions, fostering a vibrant online ecosystem that promotes creativity and collaboration."
              }
              buttonText={"Live Demo"}
              buttonLink={"#"}
              imageUrl={realEstate}
              altText={"img..."}
            />
          </>
        )}

        {currentSection === "WEBSITE PROJECTS" && (
          <>
            <SplitContainer
              mainHeading={"Portfolio Website"}
              subHeading={"Showcasing My Work and Skills"}
              description={
                "A responsive portfolio website that highlights my projects, skills, and experience, providing potential clients and employers with a comprehensive view of my capabilities."
              }
              buttonText={"Live Demo"}
              buttonLink={"#"}
              imageUrl={realEstate}
              altText={"Portfolio Website"}
            />

            <SplitContainer
              mainHeading={"TEST WEBSITE PROJECTS "}
              subHeading={"Your All-in-One Desktop Solution"}
              description={
                "A desktop application that integrates various productivity tools like a calendar, task manager, and note-taking functionality in a clean, modern interface."
              }
              buttonText={"Live Demo"}
              buttonLink={"#"}
              imageUrl={realEstate}
              altText={"Desktop Productivity Suite"}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Portfolio;
