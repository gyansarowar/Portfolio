import React from "react";
import proj1 from "../assets/projects/Article-summarizer.png";
import proj2 from "../assets/projects/FoodPanda.png";
import proj3 from "../assets/projects/CryptoPulse.png";
import proj4 from "../assets/projects/Emotional-state-tracker.png";
const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full cursor-default pt-24 lg:pl-[60px] h-fit min-h-screen text-gray-300 "
    >
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4  border-pink-600">
            Projects
          </p>
          <p className=" py-6">Check out my recent projects.</p>
        </div>

        {/*Projects outer container */}
        <div className=" grid sm:grid-cols-2  gap-4">
          {/*CARD Container */}
          <div
            style={{ backgroundImage: `url(${proj1})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className=" pt-8 text-center">
                <a href="https://article-summarizer-gyan2307.netlify.app/" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/gyansarowar/Article-summarizer" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${proj2})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className=" pt-8 text-center">
                <a href="https://foodpanda-by-gyan.netlify.app/" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/gyansarowar/Food-Panda" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${proj3})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className=" pt-8 text-center">
                <a href="https://crypto-pulse-365.netlify.app/" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/gyansarowar/Crypto-Pulse" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${proj4})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className=" pt-8 text-center">
                <a href="https://emotional-state-tracker.netlify.app/" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/gyansarowar/emotional-state-tracker" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className=" pt-8 text-center">
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className=" pt-8 text-center">
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
