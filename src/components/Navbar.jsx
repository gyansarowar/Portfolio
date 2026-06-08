import { useState } from "react";
import Logo from "../assets/gs2.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const navItems = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed
          top-0
          left-0
          z-50

          w-full
          h-[80px]

          bg-[#0a192f]

          border-b
          border-white/[0.05]

          flex
          items-center
          justify-between

          px-6
          lg:px-12
        "
      >
        {/* LOGO */}
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <img
            src={Logo}
            alt="Logo"
            className="
              w-[72px] pb-4

              transition-all
              duration-500

              hover:scale-105
              hover:rotate-2
            "
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul
          className="
            hidden
            md:flex

            items-center
            gap-10
          "
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              className="
                  relative

                  uppercase
                  tracking-[0.2em]

                  text-sm

                  text-slate-400

                  transition-all
                  duration-300

                  hover:text-white
                "
            >
              <li
                key={item}
                className="
                group
                relative
                cursor-pointer
              "
              >
                {item}

                <span
                  className="
                    absolute

                    -bottom-2
                    left-0

                    h-[1px]
                    w-0

                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-500

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </li>
            </Link>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={toggleNav}
          className="
            md:hidden

            h-12
            w-12

            rounded-full

            border
            border-white/10

            flex
            items-center
            justify-center

            text-white

            transition-all
            duration-300

            hover:border-cyan-400/50
          "
        >
          {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`
          fixed
          inset-0
          z-40

          bg-[#0a192f]

          flex
          flex-col
          justify-center
          items-center

          transition-all
          duration-500

          ${
            nav
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* TOP LINE */}
        <div
          className="
            absolute
            top-24
            left-1/2

            -translate-x-1/2

            h-px
            w-48

            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
          "
        />

        {/* BOTTOM LINE */}
        <div
          className="
            absolute
            bottom-24
            left-1/2

            -translate-x-1/2

            h-px
            w-48

            bg-gradient-to-r
            from-transparent
            via-purple-400
            to-transparent
          "
        />

        {/* NAV ITEMS */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-8
          "
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              onClick={toggleNav}
              className="
                uppercase

                text-4xl
                sm:text-5xl

                font-light

                tracking-[0.15em]

                text-slate-500

                cursor-pointer

                transition-all
                duration-500

                hover:text-white
                hover:tracking-[0.25em]
              "
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* SOCIAL DOCK */}
      {/* <div
        className="
          hidden
          lg:flex

          fixed
          left-8
          bottom-8

          z-40

          items-center
          gap-4
        "
      >
        <a
          href="https://www.linkedin.com/in/gyan2307/"
          target="_blank"
          rel="noreferrer"
          className="
            h-12
            w-12

            rounded-full

            border
            border-white/10

            flex
            items-center
            justify-center

            text-slate-400

            transition-all
            duration-300

            hover:text-white
            hover:border-cyan-400
            hover:-translate-y-1
          "
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="https://github.com/gyansarowar"
          target="_blank"
          rel="noreferrer"
          className="
            h-12
            w-12

            rounded-full

            border
            border-white/10

            flex
            items-center
            justify-center

            text-slate-400

            transition-all
            duration-300

            hover:text-white
            hover:border-cyan-400
            hover:-translate-y-1
          "
        >
          <FaGithub size={18} />
        </a>

        <a
          href="mailto:gyansarowar123@gmail.com"
          className="
            h-12
            w-12

            rounded-full

            border
            border-white/10

            flex
            items-center
            justify-center

            text-slate-400

            transition-all
            duration-300

            hover:text-white
            hover:border-cyan-400
            hover:-translate-y-1
          "
        >
          <HiOutlineMail size={18} />
        </a>

        <a
          href="https://drive.google.com/file/d/1TTK-Z4wtaKxtf19G6wKE_I7gasTpKKxt/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="
            h-12
            w-12

            rounded-full

            border
            border-white/10

            flex
            items-center
            justify-center

            text-slate-400

            transition-all
            duration-300

            hover:text-white
            hover:border-cyan-400
            hover:-translate-y-1
          "
        >
          <BsFillPersonLinesFill size={18} />
        </a>
      </div> */}

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
              href="https://drive.google.com/file/d/1TTK-Z4wtaKxtf19G6wKE_I7gasTpKKxt/view?usp=sharing"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;