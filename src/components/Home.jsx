import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full cursor-default h-screen lg:pl-[60px] md:text-lg bg-[#0a192f]">
      {/*CONTAINER */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-pink-600 ">Hi, My name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Gyan Sarowar
        </h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px] ">
          I'm a passionate React Developer dedicated to crafting seamless web
          experiences. <br /> Currently, I'm focused on building responsive web
          applications by turning innovative ideas into reality.{" "}
        </p>
        <div>
          <Link to="projects" smooth={true} duration={800}>
            <button className=" group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Projects
              <span className=" group-hover:rotate-90 duration-500">
                <HiArrowNarrowRight className=" ml-3" />{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
