import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.png";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24         space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome</span>
            <div className="flex     md:text-xl space-x-2">
              <h1>Hi, I am a</h1>

              <ReactTyped
                className="text-green-500 font-bold text-xl md:text-xl"
                strings={["Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md text-justify">
              I am a dedicated Front-End React.js Developer passionate about
              crafting accessible, pixel-perfect, and high-performance web
              applications. Backed by a strong foundation in HTML, CSS,
              JavaScript, React.js, Tailwind CSS, and FastAPI, I build
              user-centric interfaces that deliver seamless and modern digital
              experiences.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2 ">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/hammad-ali-arshad/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursot-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/HammadAliArs" target="_blank">
                      <FaGithub className="text-2xl cursot-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Tools & Technologies I Use</h1>
                <div className="flex space-x-5">
                  <FaGithub className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <VscVscode className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <IoLogoFigma className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <RiTailwindCssFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiRedux className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiFastapi className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full w-[300px] h-[300px] mx-auto md:w-[350px] md:h-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="my-10 " />
    </>
  );
};

export default Home;
