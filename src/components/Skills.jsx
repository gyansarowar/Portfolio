import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import { SiMysql, SiRedux, SiTypescript } from "react-icons/si";
const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full min-h-screen h-fit">
      {/*CONTAINER */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className=" text-4xl font-bold text-gray-300 inline border-b-4 border-pink-600">Experiences</p>
          <p className=" py-4">These are the technologies I've worked with.</p>
        </div>
        {/*SKILLS group container */}
        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/*Individual Skill Container */}
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className=" w-20 mx-auto " />
            <p className=" my-4">HTML</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="CSS icon" className=" w-20 mx-auto " />
            <p className=" my-4">CSS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JavaScript} alt="JavaScript icon" className=" w-20 mx-auto " />
            <p className=" my-4">JavaScript</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="React icon" className=" w-20 mx-auto " />
            <p className=" my-4">React</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            {/* <img src={Node} alt="Node icon" className=" w-20 mx-auto " /> */}
            <SiRedux size={80} name="Redux icon" className=" w-20 mx-auto"/>
            <p className=" my-4">Redux</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={FireBase} alt="FireBase icon" className=" w-20 mx-auto " />
            <p className=" my-4">Firebase</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={GitHub} alt="GitHub icon" className=" w-20 mx-auto " />
            <p className=" my-4">GitHub</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="Tailwind icon" className=" w-20 mx-auto " />
            <p className=" my-4">Tailwind CSS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            {/* <img src={Tailwind} alt="Tailwind icon" className=" w-20 mx-auto " /> */}
            <SiMysql size={80} name="SQL logo" className=" mx-auto text-blue-500"/>
            <p className=" my-4">MySQL</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            {/* <img src={Tailwind} alt="Tailwind icon" className=" w-20 mx-auto " /> */}
            <SiTypescript size={80} name="TypeScript logo" className=" mx-auto text-blue-500 bg-white rounded-md"/>
            <p className=" my-4">TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
