import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] text-gray-300 w-full h-fit flex flex-col justify-center items-center p-4"
    >
      <h1 className=" text-4xl border-b-4 border-pink-600">Contact Me</h1>
      <p className=" py-4">
        View my LinkedIn, GitHub, Resume or shoot me an email -{" "}
        <a
          href="mailto:gyansarowar123@gmail.com"
          target="_blank"
          className=" hover:underline hover:text-pink-600"
        >
          gyansarowar123@gmail.com
        </a>
      </p>
      {/* <p className=" text-4xl ">Contact</p> */}
      {/* <form
        action="https://getform.io/f/amdpwvnb"
        method="post"
        className=" flex flex-col max-w-[600px] w-full "
      >
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600  ">
            Contact
          </p>
          <p className=" py-4">
            Submit the form below or shoot me an email -{" "}
            <a href="mailto:gyansarowar123@gmail.com" target="_blank" className=" hover:underline hover:text-pink-600">
              gyansarowar123@gmail.com
            </a>
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className=" p-2 bg-[#ccd6f6] "
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=" my-4 p-2 bg-[#ccd6f6] "
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className=" p-2 bg-[#ccd6f6] text-black "
        ></textarea>
        <button className=" text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 py-3 my-8 mx-auto">
          Let's Connect
        </button>
      </form> */}
      <div className=" w-full">
        <ul className=" flex flex-row items-center justify-center space-x-2 text-[30px]">
          <li className=" hover:text-pink-600 duration-500">
            <a href="https://www.linkedin.com/in/gyan2307/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li className=" hover:text-pink-600 duration-500">
            <a href="https://www.github.com/gyansarowar" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className=" hover:text-pink-600 duration-500">
            <a href="mailto:gyansarowar123@gmail.com" target="_blank">
              <HiOutlineMail />
            </a>
          </li>
          <li className=" hover:text-pink-600 duration-500">
            <a href="https://gs_gyan_007.hackerresume.io/39c72791-9182-487c-ae0b-3107c19686a0" target="_blank">
              <BsFillPersonLinesFill />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="w-full lg:hidden">
        <ul className=" flex flex-row justify-between">
          
          <li className=" lg:w-[160px] h-[60px] flex justify-between items-center  bg-blue-600 ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />{" "}
            </a>
          </li>
          
          <li className=" w-[160px] h-[60px] flex justify-between items-center  bg-[#333333] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              GitHub <FaGithub size={30} />{" "}
            </a>
          </li>
          
          <li className=" w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          
          <li className=" w-[160px] h-[60px] flex justify-between items-center bg-[#565f69] ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div> */
}
