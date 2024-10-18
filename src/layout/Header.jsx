import React, { useState } from "react"; // Import useState hook
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom"; // Import Link
import { RxHamburgerMenu } from "react-icons/rx"; // Import Hamburger Icon

const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/home",
  },
  {
    id: 2,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    name: "Experience",
    url: "/experience",
  },
  {
    id: 4,
    name: "About",
    url: "/about",
  },
  {
    id: 5,
    name: "Contact Me",
    url: "/contact",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-montserrat bg-gray-900 p-5 flex justify-between items-center text-white border-b border-b-gray-800">
      {/*    LOGO   */}
      <div>
        <p className=" sm:text-sm md:text-md lg:text-lg hover:text-indigo-200 duration-300 uppercase font-medium">
          ALI ZIA
        </p>
      </div>

      {/*    LINKS FOR LARGE SCREENS */}
      <div className={"hidden lg:block"}>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className="sm:text-sm md:text-md lg:text-lg hover:text-indigo-300 duration-300 uppercase font-medium hover:cursor-pointer "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/*    CALL-TO-ACTION BUTTON FOR LARGE SCREENS */}
      <div className=" sm:text-sm md:text-md lg:text-md hidden lg:block">
        <Button text={"CONTACT ME"} />
      </div>

      {/*--------- HAMBURGER MENU FOR SMALL SCREENS ------------ */}
      <div className="block lg:hidden">
        <RxHamburgerMenu
          className={"text-3xl cursor-pointer"}
          onClick={toggleMenu} // Add onClick to toggle menu
        />
      </div>

      {/*    DROPDOWN MENU */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-gray-900 text-white shadow-lg p-4 w-full lg:hidden z-50">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  className="block text-md hover:text-indigo-300 duration-300 uppercase font-medium hover:cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close the menu on link click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/*    CALL-TO-ACTION BUTTON IN DROPDOWN */}
          {/*<div className="mt-4">*/}
          {/*  <Button text={"CONTACT ME"} />*/}
          {/*</div>*/}
        </div>
      )}
    </div>
  );
};

export default Header;
