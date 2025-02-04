import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

import { ReactTyped, } from "react-typed";
import pic from '../../public/photo.png'

const Home = () => {
  return (
    <>
    <div name="Home"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24         space-y-2 order-2 md:order-1'>
                <span className='text-xl'>
                    Welcome to My Feed
                </span>
                <div className='flex     md:text-xl space-x-2'>
                <h1>
                    Hello, I am a
                </h1>
                    {/* <span className='text-red-700 font-bold '>
                        Developer
                    </span> */}

                <ReactTyped 
                    className='text-green-500 font-bold text-xl md:text-xl'
                    strings={["Developer","Coder","Programmer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                />

                </div>
                <p className='text-sm md:text-md text-justify'>
                I am a skilled Front-End React Developer with a passion of building dynamic and responsive web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I focus on creating user-friendly interfaces that deliver seamless experiences in modern web development.
                </p>
                <br />
                {/* Social Media Icons */}
                <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                    <div className='space-y-2 '>
                        <h1 className='font-bold'>
                            Available on
                        </h1>
                        <ul className='flex space-x-5'>
                            <li>
                                <a href="https://www.facebook.com/rajput.jee.3348" target='-blank'>
                                <FaFacebookSquare className='text-2xl cursot-pointer'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/hammad-ali-arshad/" target='_blank'>
                                <FaLinkedin className='text-2xl cursot-pointer'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@hammadali8938" target='_blank'>
                                <FaYoutube className='text-2xl cursot-pointer'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/hey_myself_hammad/" target='_blank'>
                                <FaTelegram className='text-2xl cursot-pointer'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold'>
                            Currently working on
                        </h1>
                        <div className='flex space-x-5'>
                            <FaHtml5 className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>  
                            <FaCss3Alt className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>  
                            <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>  
                            <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>  
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img src={pic} className='rounded-full w-[300px] h-[300px] mx-auto md:w-[350px] md:h-[350px]' alt="" />
            </div>
        </div>
    </div>
    <hr className='my-10 '/>
    </>
  )
}

export default Home