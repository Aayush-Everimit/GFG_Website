import { useEffect } from "react";
import { HERO_CONTENT } from "../utils/constants";
import useReveal from "../utils/useReveal";
import Spline from '@splinetool/react-spline';
import 'boxicons/css/boxicons.min.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MorphingSVG from './MorphingSVG';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
    const [ref, visible, animationTrigger] = useReveal();

    return (
        <section
            key={animationTrigger}
            ref={ref}
            id="home"
            className={`min-h-screen flex justify-center items-center pt-20 px-6 relative z-10 section-reveal station ${
                visible ? "visible" : ""
            }`}
        >

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start">
                <div className="flex justify-center">
                    <div className='relative w-[95%] sm:w-56 h-12 bg-gradient-to-r from-white to-[#39FF14] shadow-[0_0_25px_rgba(57,255,20,0.99)] rounded-full'>
                        <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-3'>
                            <i class='bx bx-diamond text-white'></i>
                            <span className="text-white">INTRODUCING</span>
                        </div>
                    </div>
                </div>

                {/* Hero Title */}
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wider my-8 text-white text-left '>
                    GFG Student <br /> Chapter
                </h1>


                {/* Hero Subtitle */}
                <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                    Empowering students through code, collaboration, and continuous learning
                </p>

                {/* Hero Buttons */}
                <div className='flex gap-6 mt-12'>
                    <a className='border border-[#72869] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 text-white bg-green-800 hover:bg-[#8bca84] hover:text-black hover:text-semibold' href='#'>
                        Join Us <i class='bx  bx-link'></i>
                    </a>

                    <a className='border border-[#72869] py-2 sm:py-3 px-8 sm:px-7 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#AAA7AD] text-white' href='#'>
                        Explore Events
                    </a>
                </div>
                </div>

                <div className="flex justify-end items-center">
                    <MorphingSVG />
                </div>
            </div>




        </section>
    );
}