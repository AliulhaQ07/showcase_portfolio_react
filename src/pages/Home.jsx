import React from "react";
import Heading from "../components/Heading.jsx";
import Button from "../components/Button.jsx";
import Cv from "../assets/ALIULHAQV3.pdf";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "ease-in" }}
      className="font-montserrat relative h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Text - 'Developer' */}
      <p
        className="
          absolute inset-3
          text-4xl
          sm:text-6xl
          md:text-[6rem]
          lg:text-[6.5rem]
          font-bold
          text-gray-700
          opacity-80
          z-0
          transform
          rotate-[0deg]
          pointer-events-none
          select-none
          flex
          items-start
          justify-start
          uppercase"
      >
        Developer
      </p>

      {/* Background Text - '&' */}
      <p
        className="
          absolute inset-6
          text-9xl
          sm:text-9xl
          md:text-[12rem]
          lg:text-[18rem]
          font-bold
          text-gray-600
          opacity-40
          z-0
          transform
          rotate-[0deg]
          pointer-events-none
          select-none
          flex
          items-center
          justify-center
          uppercase"
      >
        &
      </p>

      {/* Background Text - 'designer' */}
      <p
        className="
          absolute inset-6
          text-4xl
          sm:text-6xl
          md:text-[6rem]
          lg:text-[6.5rem]
          font-bold
          text-gray-700
          opacity-80
          z-0
          transform
          rotate-[0deg]
          pointer-events-none
          select-none
          flex
          items-end
          justify-end
          uppercase"
      >
        Designer
      </p>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full container mx-auto px-6">
        {/* Flex column for positioning the headings */}
        <div className="flex flex-col justify-center items-center gap-6">
          {/* Headings */}
          <p className="uppercase font-bold text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <Heading text={"I'm a React Js"} />
          </p>

          <p className="uppercase font-bold text-gray-50 text-xl sm:text-2xl md:text-3xl lg:text-6xl">
            <Heading text="Web Developer &" />
          </p>

          <p className="uppercase font-bold text-gray-50 text-xl sm:text-2xl md:text-3xl lg:text-6xl">
            <Heading text="Web Designer (UI/UX)" />
          </p>

          <Button text={"DOWNLOAD CV"} downloadUrl={Cv} />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
