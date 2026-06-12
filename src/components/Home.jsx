import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full cursor-default h-screen lg:pl-[60px] md:text-lg bg-[#0a192f]"
    >
      {/*CONTAINER */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-pink-600 sm:text-3xl ">Hi, My name is</p>
        <h1 className=" text-4xl lg:text-7xl  font-bold text-[#ccd6f6]">
          Gyan Sarowar
        </h1>
        <h2 className=" text-4xl lg:text-6xl font-bold text-[#8892b0]">
          I&apos;m a Full-Stack Developer.
        </h2>
        <p className=" text-[#8892b0] sm:text-3xl py-4 max-w-[700px] ">
          <p className=" mb-2">
            I build modern web applications with React, TypeScript, and a
            healthy amount of{" "}
            <span className=" text-pink-600 ">console.log()</span>.
          </p>
          <p>
            Passionate about crafting responsive user experiences, reusable
            component architectures, and solving problems one bug at a time.
          </p>
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
