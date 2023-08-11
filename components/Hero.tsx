import React from 'react';
import Image from "next/image";
import heroImage from '../images/heroImage3.png'
import Navbar from "@/components/Navbar";

const Hero = () => {
    return (
        <div className={'bg-[#285f58] h-screen text-white'}>
            <Navbar/>
            <div className={'flex flex-col h-full justify-center relative'}>
                <div className={'text-center lg:text-start mx-2 md:mx-10 lg:mx-15 xl:mx-32 text-6xl font-bold'}>
                    <div>
                        Fresh Food
                    </div>
                    <div className={'flex justify-center lg:justify-normal'}>
                        <div className={'flex items-center justify-center italic text-4xl transform -rotate-[20deg] font-cursive text-[#e8512a]'}>with</div>
                        <div>great taste</div>
                    </div>
                    <div className={'mt-8 font-thin text-sm w-96 mx-auto lg:mx-0'}>
                        Our food is make from the freshest ingredients and the result is much better with a fresh look and of course great taste guarantee
                    </div>
                    <div className={'mt-8 w-48 flex items-center justify-center p-2 bg-[#e8512a] shadow-md shadow-orange-800 hover:bg-white hover:text-[#e8512a] hover:font-bold transform duration-300 cursor-pointer text-white font-thin text-sm rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm mx-auto lg:mx-0'}>
                        Make an reservation
                    </div>
                </div>
            </div>
            <Image src={heroImage} alt={''} className={'hidden lg:flex z-10 absolute top-0 right-0 h-screen w-auto'}/>
        </div>
    );
};

export default Hero;