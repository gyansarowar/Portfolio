// import React from "react";
// import proj1 from "../assets/projects/Article-summarizer.png";
// import proj2 from "../assets/projects/FoodPanda.png";
// import proj3 from "../assets/projects/CryptoPulse.png";
// import proj4 from "../assets/projects/Emotional-state-tracker.png";
// const Projects = () => {
//   return (
//     <div
//       name="projects"
//       className="bg-[#0a192f] w-full cursor-default pt-24 lg:pl-[60px] h-fit min-h-screen text-gray-300 "
//     >
//       <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className=" pb-8">
//           <p className=" text-4xl font-bold inline border-b-4  border-pink-600">
//             Projects
//           </p>
//           <p className=" py-6">Check out my recent projects.</p>
//         </div>

//         {/*Projects outer container */}
//         <div className=" grid sm:grid-cols-2  gap-4">
//           {/*CARD Container */}
//           <div
//             style={{ backgroundImage: `url(${proj1})` }}
//             className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
//           >
//             {/*Hover Effects */}
//             <div className=" opacity-0 group-hover:opacity-100">
//               <span className=" text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className=" pt-8 text-center">
//                 <a href="https://article-summarizer-gyan2307.netlify.app/" target="_blank">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="https://github.com/gyansarowar/Article-summarizer" target="_blank">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${proj2})` }}
//             className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
//           >
//             {/*Hover Effects */}
//             <div className=" opacity-0 group-hover:opacity-100">
//               <span className=" text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className=" pt-8 text-center">
//                 <a href="https://foodpanda-by-gyan.netlify.app/" target="_blank">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="https://github.com/gyansarowar/Food-Panda" target="_blank">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${proj3})` }}
//             className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
//           >
//             {/*Hover Effects */}
//             <div className=" opacity-0 group-hover:opacity-100">
//               <span className=" text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className=" pt-8 text-center">
//                 <a href="https://crypto-pulse-365.netlify.app/" target="_blank">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="https://github.com/gyansarowar/Crypto-Pulse" target="_blank">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${proj4})` }}
//             className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
//           >
//             {/*Hover Effects */}
//             <div className=" opacity-0 group-hover:opacity-100">
//               <span className=" text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className=" pt-8 text-center">
//                 <a href="https://emotional-state-tracker.netlify.app/" target="_blank">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="https://github.com/gyansarowar/emotional-state-tracker" target="_blank">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* <div
//             style={{ backgroundImage: `url(${WorkImg})` }}
//             className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
//           >

//             <div className=" opacity-0 group-hover:opacity-100">
//               <span className=" text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className=" pt-8 text-center">
//                 <a href="/">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${realEstate})` }}
//             className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
//           >

//             <div className=" opacity-0 group-hover:opacity-100">
//               <span className=" text-2xl font-bold text-white tracking-wider">
//                 React JS Application
//               </span>
//               <div className=" pt-8 text-center">
//                 <a href="/">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import proj1 from "../assets/projects/Article-summarizer.png";
import proj2 from "../assets/projects/FoodPanda.png";
import proj3 from "../assets/projects/CryptoPulse.png";
import proj4 from "../assets/projects/Emotional-state-tracker.png";

const projectData = [
  {
    image: proj1,
    title: "AI Article Summarizer",
    demo: "https://article-summarizer-gyan2307.netlify.app/",
    code: "https://github.com/gyansarowar/Article-summarizer",
  },
  {
    image: proj2,
    title: "Food Panda Clone",
    demo: "https://foodpanda-by-gyan.netlify.app/",
    code: "https://github.com/gyansarowar/Food-Panda",
  },
  {
    image: proj3,
    title: "Crypto Pulse",
    demo: "https://crypto-pulse-365.netlify.app/",
    code: "https://github.com/gyansarowar/Crypto-Pulse",
  },
  {
    image: proj4,
    title: "Emotional State Tracker",
    demo: "https://emotional-state-tracker.netlify.app/",
    code: "https://github.com/gyansarowar/emotional-state-tracker",
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-24 lg:pl-[60px]"
    >
      <div className="max-w-[1100px] mx-auto p-6 flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Projects
          </p>

          <p className="py-6 text-gray-400 text-lg">
            Check out some of my recent work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="
                group relative overflow-hidden
                rounded-2xl
                h-[260px] w-full
                shadow-xl shadow-black/30
              "
            >
              {/* Glassmorphism Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/20
                  backdrop-blur-[1px]
                  transition-all duration-500
                  group-hover:bg-black/40
                  group-hover:backdrop-blur-md
                "
              ></div>
              {/* 
              
              <div
                className="
                  absolute inset-0
                  flex flex-col justify-center items-center
                  text-center px-4
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                "
              > */}
              {/* Hover Content */}
              <div
                className="
    absolute inset-0 z-10
    flex flex-col justify-center items-center
    text-center px-4
    opacity-0 group-hover:opacity-100
    transition-all duration-500
  "
              >
                <span className="text-2xl font-bold text-white tracking-wide">
                  {project.title}
                </span>

                <div className="pt-8 flex gap-4">
                  {/* Demo Button */}
                  <a
                    href={project?.demo}
                    // <a href="" target="_blank">
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="
                        px-5 py-2 rounded-xl
                        bg-white/10
                        border border-white/20
                        backdrop-blur-lg
                        text-white font-semibold
                        hover:bg-cyan-400/20
                        hover:border-cyan-300
                        transition-all duration-300
                      "
                      onClick={() => {
                        console.log("click demo");
                      }}
                    >
                      Demo
                    </button>
                  </a>

                  {/* Code Button */}
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <button
                      className="
                        px-5 py-2 rounded-xl
                        bg-white/10
                        border border-white/20
                        backdrop-blur-lg
                        text-white font-semibold
                        hover:bg-purple-400/20
                        hover:border-purple-300
                        transition-all duration-300
                      "
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>

              {/* Subtle Gradient Effect */}
              <div
                className="
    absolute inset-0
    pointer-events-none
    opacity-0 group-hover:opacity-100
    transition-all duration-500
    bg-gradient-to-tr
    from-cyan-400/10
    via-transparent
    to-purple-500/10
  "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
