
import { Link } from "react-scroll";
const About = () => {
  return (
    <div
      name="about"
      className=" cursor-default w-full h-screen bg-[#0a192f] lg:text-lg text-gray-300 "
    >
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className=" sm:text-right pb-8 pl-4">
            {" "}
            <p className=" text-4xl md:text-6xl font-bold inline border-b-4 border-pink-600 ">
              About
            </p>{" "}
          </div>
        </div>
        <div className="max-w-[1100px] w-full grid md:grid-cols-2 gap-12 px-6 text-slate-100">
          <div className=" md:text-right text-4xl font-bold">
            <p className="text-3xl md:text-5xl font-bold leading-tight text-slate-100 textl">
              <div className=" pb-2">
                <p className=" text-left pl-[13px]">Curious by nature,</p>
                Developer by choice.✌️
              </div>
              I enjoy building things, solving problems, and learning something
              new along the way.
            </p>
          </div>
          <div>
            <p className=" md:text-2xl space-y-4">
              <p className="text-slate-200  ">
                I enjoy creating meaningful digital experiences and continuously
                improving the way I build them.
              </p>
              <p className=" text-slate-200 space-y-4">
                <p>
                  What keeps me excited about software development is the
                  endless opportunity to learn, improve, and create something
                  meaningful.
                </p>
                <p>
                  Outside of coding, I&apos;m usually exploring new ideas,
                  learning something interesting, or telling myself &quot;just
                  one more tweak&quot; before spending another hour on a
                  project🌚.
                </p>
                <p>
                  Feel free to reach out if you&apos;d like to{" "}
                  <span>
                    <Link
                      to="contact"
                      smooth
                      duration={500}
                      className="cursor-pointer text-pink-600"
                    >
                      connect.
                    </Link>
                  </span>{" "}
                </p>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
