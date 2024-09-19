import React, { useState } from "react";
import Logo from "../assets/gs2.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className=" cursor-default fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300  ">
      <div className=" hover:cursor-pointer hover:opacity-70">
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} className="w-[70px]" />
        </Link>
      </div>
      {/*Menu */}

      <ul className=" hidden md:flex text-xl">
        <li className=" hover:underline hover:text-pink-600 duration-500">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=" hover:underline hover:text-pink-600 duration-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" hover:underline hover:text-pink-600 duration-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" hover:underline hover:text-pink-600 duration-500">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className=" hover:underline hover:text-pink-600 duration-500">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hamburger */}
      <div onClick={handleClick} className=" md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className=" py-6 text-4xl">Home</li>
        <li className=" py-6 text-4xl">About</li>
        <li className=" py-6 text-4xl">Skills</li>
        <li className=" py-6 text-4xl">Projects</li>
        {/* <li className=" py-6 text-4xl">Contact</li> */}
      </ul>

      {/*Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/*LINKEDIN */}
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/gyan2307/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />{" "}
            </a>
          </li>
          {/*GITHUB */}
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="https://www.github.com/gyansarowar"
              target="_blank"
            >
              GitHub <FaGithub size={30} />{" "}
            </a>
          </li>
          {/*MAIL*/}
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="mailto:gyansarowar123@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          {/*RESUME*/}
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="https://gs_gyan_007.hackerresume.io/39c72791-9182-487c-ae0b-3107c19686a0"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
