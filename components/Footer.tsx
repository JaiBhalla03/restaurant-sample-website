import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {HiLocationMarker, HiMail} from "react-icons/hi";

const Footer = () => {
    return (
        <div className={'pt-10 md:mpt-0 relative bg-[#285f58]'}>
            <div className="bg-[#285f58] h-28 w-full absolute top-0 left-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="fill-current text-[#eee1d1] w-full"
                >
                    <path d="M0 100l48-12C96 76 192 28 288 23.5 384 19 480 57 576 57.5c96 .5 192-38.5 288-33C960 29 1056 79 1152 83.5 1248 88 1344 48 1392 28l48-20V0H0z" />
                </svg>
            </div>
            <div className={'flex flex-col lg:flex-row gap-32 justify-center items-center lg:pb-10 mx-2 lg:mx-32 border-b border-white'}>
                <div className={'text-white font-semibold text-3xl lg:text-6xl lg:pt-32 z-10'}>
                    <div>
                        Enjoy Delicious Food
                    </div>
                    <div className={'flex'}>
                        <div className={'flex items-center justify-center italic text-4xl transform -rotate-[20deg] font-cursive text-[#e8512a]'}>with</div>
                        <div>Authentic taste</div>
                    </div>
                </div>
                <div className={'flex items-center justify-center lg:pt-20'}>
                    <div className={'h-10 lg:mt-12 w-48 flex items-center justify-center p-2 bg-[#e8512a] shadow-md shadow-orange-800 hover:bg-white hover:text-[#e8512a] hover:font-bold transform duration-300 cursor-pointer text-white font-thin text-sm rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm'}>
                        Make an reservation
                    </div>
                </div>
            </div>
            <div className={'flex w-full px-32 justify-around'}>
                <div className={'flex-1 py-10 flex flex-col gap-6 text-white'}>
                    <div className={'items-center font-bold text-lg flex justify-normal'}>
                        Res<i className={'not-italic text-[#e8512a]'}>taur</i>ant
                    </div>
                    <div className={'text-sm font-thin'}>
                        No matter how your customer want to <br/> pay we can help you find the right
                    </div>
                    <div className={'flex items-center text-3xl gap-4'}>
                        <AiFillInstagram className={'hover:scale-110 cursor-pointer transform duration-300 p-1 border hover:bg-[#285f58] border-white rounded-full'}/>
                        <AiFillFacebook className={'hover:scale-110 cursor-pointer transform duration-300 p-1 border hover:bg-[#285f58] border-white rounded-full'}/>
                        <AiOutlineTwitter className={'hover:scale-110 cursor-pointer transform duration-300 p-1 border hover:bg-[#285f58] border-white rounded-full'}/>
                    </div>
                </div>
                <div className={'flex-1 flex flex-col gap-6 py-10 text-white'}>
                    <h1>
                        Quick Menu
                    </h1>
                    <div className={'grid grid-cols-2 grid-rows-2 font-thin text-sm gap-4'}>
                        <div className={'cursor-pointer transform hover:-translate-y-0.5 duration-300'}>Product</div>
                        <div className={'cursor-pointer transform hover:-translate-y-0.5 duration-300'}>Pricing</div>
                        <div className={'cursor-pointer transform hover:-translate-y-0.5 duration-300'}>Features</div>
                        <div className={'cursor-pointer transform hover:-translate-y-0.5 duration-300'}>Resources</div>
                    </div>
                </div>
                <div className={'flex-1 flex flex-col gap-6 py-10 text-white'}>
                    <div className={'flex gap-2 items-center'}>
                        <HiLocationMarker size={25}/>
                        <div className={'font-thin text-sm'}>8502 Preston Rd. Inglewood Road Lucknow Uttar Pradesh</div>
                    </div>
                    <div className={'flex gap-2 items-center'}>
                        <HiMail size={25}/>
                        <div className={'font-thin text-sm'}>info@email.com</div>
                    </div>
                </div>
            </div>
            <div className="text-white font-thin text-sm flex justify-end pr-10 py-5">
                <span className="mr-1">&copy; Copyright 2023.</span>
                <span>All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;