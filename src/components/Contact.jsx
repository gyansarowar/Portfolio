import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] text-gray-300 w-full h-fit flex flex-col justify-center items-center p-4"
    >
      <h1 className=" text-6xl border-b-4 border-pink-600">Contact Me</h1>
      <p className=" py-4 text-2xl">
        <span>View my</span>
        <a
          href="https://www.linkedin.com/in/gyan2307/"
          target="_blank"
          className=" hover:underline text-pink-600 duration-500"
        >
          {" "}
          LinkedIn
        </a>
        ,
        <a
          href="https://www.github.com/gyansarowar"
          target="_blank"
          className=" hover:underline text-pink-600 duration-500"
        >
          {" "}
          GitHub
        </a>
        ,
        <a
          href="https://drive.google.com/file/d/1TTK-Z4wtaKxtf19G6wKE_I7gasTpKKxt/view"
          target="_blank"
          className=" hover:underline text-pink-600 duration-500"
        >
          {" "}
          Resume
        </a>{" "}
        or shoot me an email -{" "}
        <a
          href="mailto:gyansarowar123@gmail.com"
          target="_blank"
          className=" hover:underline text-pink-600 duration-500"
        >
          gyansarowar123@gmail.com
        </a>
      </p>

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
            <a
              href="https://drive.google.com/file/d/1TTK-Z4wtaKxtf19G6wKE_I7gasTpKKxt/view"
              target="_blank"
            >
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
