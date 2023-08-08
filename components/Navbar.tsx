'use client'

import React, {useEffect, useState} from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineTwitter} from "react-icons/ai";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`bg-opacity-50 backdrop-blur-sm fixed ${scrolled ? 'bg-white text-[#285f58] font-bold' : 'font-thin bg-transparent text-white'} transform duration-500 z-20 w-full px-8 py-4`}>
            <div className={'w-full flex justify-between'}>
                <div className={'flex flex-1 items-center justify-center gap-10 text-xs list-none'}>
                    <li className={'hover:-translate-y-0.5 transform duration-300 cursor-pointer'}>Home</li>
                    <li className={'hover:-translate-y-0.5 transform duration-300 cursor-pointer'}>Menu</li>
                    <li className={'hover:-translate-y-0.5 transform duration-300 cursor-pointer'}>Our Services</li>
                    <li className={'hover:-translate-y-0.5 transform duration-300 cursor-pointer'}>About</li>
                </div>
                <div className={'items-center font-bold text-lg flex flex-1 justify-center'}>
                    Res<i className={'not-italic text-[#e8512a]'}>taur</i>ant
                </div>
                <div className={'flex flex-1 justify-center items-center gap-16'}>
                    <div className={'flex items-center text-3xl gap-4'}>
                        <AiFillInstagram className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border ${scrolled ? 'hover:bg-gray-200 border-[#285f58]' : 'hover:bg-[#285f58] border-white'} rounded-full`}/>
                        <AiFillFacebook className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border ${scrolled ? 'hover:bg-gray-200 border-[#285f58]' : 'hover:bg-[#285f58] border-white'} rounded-full`}/>
                        <AiOutlineTwitter className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border ${scrolled ? 'hover:bg-gray-200 border-[#285f58]' : 'hover:bg-[#285f58] border-white'} rounded-full`}/>
                    </div>
                    <div className={'flex items-center justify-center font-normal px-3 py-2 w-32 hover:font-bold bg-white hover:bg-[#285f58] hover:text-white transform duration-300 cursor-pointer text-[#285f58] text-sm rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm'}>
                        Make an order
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;