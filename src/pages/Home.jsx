import Heading from "../components/Heading.jsx";
import Button from "../components/Button.jsx";
// import Cv from "../assets/ALIULHAQV3.pdf";
import resume from "../assets/AliulhaqCV.pdf";
import {motion} from "framer-motion";

const Home = () => {
  // Define the pulsing animation variant
  const pulseVariant = {
    pulse: {
      scale: [1, 0.9, 1],         // Increased scale up to make it more noticeable
      opacity: [1, 0.7, 1],       // Lower opacity for a more visible fade effect
      transition: {
        duration: 1,             // Slightly faster pulse cycle
        ease: "easeInOut",       // Smooth in and out easing for a natural pulse
        repeat: Infinity,        // Infinite repeat
        repeatType: "reverse",   // Reverses the animation for a smoother loop
      },
    },
  };


  return (<motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1, ease: "ease-in"}}
    className="font-montserrat relative h-[90vh] overflow-hidden"
  >
    {/* Background Text - 'Developer' */}
    <motion.p
      variants={pulseVariant}
      initial="pulse"
      animate="pulse"
      className="
          absolute inset-3
          text-4xl
          sm:text-6xl
          md:text-[6rem]
          lg:text-[6.5rem]
          font-bold
          text-indigo-300
          opacity-80
          z-0
          pointer-events-none
          select-none
          flex
          items-start
          justify-start
          uppercase"
    >
      Developer
    </motion.p>

    {/* Background Text - '&' */}
    <motion.p
      variants={pulseVariant}
      initial="pulse"
      animate="pulse"
      className="
          absolute inset-6
          text-9xl
          sm:text-9xl
          md:text-[12rem]
          lg:text-[18rem]
          font-bold
          text-gray-200
          opacity-80
          z-0
          pointer-events-none
          select-none
          flex
          items-center
          justify-center
          uppercase"
    >
      &
    </motion.p>

    {/* Background Text - 'Designer' */}
    <motion.p
      variants={pulseVariant}
      initial="pulse"
      animate="pulse"
      className="
          absolute inset-6
          text-4xl
          sm:text-6xl
          md:text-[6rem]
          lg:text-[6.5rem]
          font-bold
          text-indigo-300
          opacity-80
          z-0
          pointer-events-none
          select-none
          flex
          items-end
          justify-end
          uppercase"
    >
      Designer
    </motion.p>

    {/* Foreground Content */}
    <div className="relative z-10 flex items-center justify-center h-full container mx-auto px-6">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="uppercase font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl">
          <Heading text={"I'm a React Js"}/>
        </p>

        <p className="uppercase font-bold text-xl sm:text-2xl md:text-4xl lg:text-7xl">
          <Heading text="Web Developer &"/>
        </p>

        <p className="uppercase font-bold text-xl sm:text-2xl md:text-4xl lg:text-7xl">
          <Heading text="Web Designer (UI/UX)"/>
        </p>


        <Button text={"DOWNLOAD CV"} downloadUrl={resume}/>
      </div>
    </div>
  </motion.div>);
};

export default Home;
