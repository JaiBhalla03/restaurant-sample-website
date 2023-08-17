'use client';

import React, { useEffect, useState } from 'react';
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterCircle,
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineTwitter
} from "react-icons/ai";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`bg-opacity-50 backdrop-blur-sm fixed ${scrolled ? 'bg-white text-[#285f58]' : 'bg-transparent text-white'} transform duration-500 z-20 w-full px-4 md:px-8 lg:px-2 xl:px-8 py-4`}>
            <div className="w-full flex flex-wrap justify-between items-center">
                <div className="hidden md:flex flex-1 items-center justify-center gap-4 text-xs list-none">
                    {!mobileMenuOpen && (
                        <>
                            <a href="#" className={`${scrolled ? 'font-bold' : 'font-thin'} hover:-translate-y-0.5 transform duration-300 cursor-pointer`}>Home</a>
                            <a href="#" className={`${scrolled ? 'font-bold' : 'font-thin'} hover:-translate-y-0.5 transform duration-300 cursor-pointer`}>Menu</a>
                            <a href="#" className={`${scrolled ? 'font-bold' : 'font-thin'} hover:-translate-y-0.5 transform duration-300 cursor-pointer`}>Our Services</a>
                            <a href="#" className={`${scrolled ? 'font-bold' : 'font-thin'} hover:-translate-y-0.5 transform duration-300 cursor-pointer`}>About</a>
                        </>
                    )}
                </div>
                <div className="items-center font-bold text-lg flex flex-1 md:justify-center">
                    Res<i className="not-italic text-[#e8512a]">taur</i>ant
                </div>
                <div className="flex flex-1 justify-end md:justify-center items-center gap-8">
                    <div className={`hidden md:flex items-center text-2xl gap-4 ${scrolled ? 'text-[#285f58]' : 'text-white'}`}>
                        <AiFillInstagram className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border ${scrolled ? 'hover:bg-gray-200 border-[#285f58]' : 'hover:bg-[#285f58] border-white'} rounded-full`} />
                        <AiFillFacebook className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border ${scrolled ? 'hover:bg-gray-200 border-[#285f58]' : 'hover:bg-[#285f58] border-white'} rounded-full`} />
                        <AiOutlineTwitter className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border ${scrolled ? 'hover:bg-gray-200 border-[#285f58]' : 'hover:bg-[#285f58] border-white'} rounded-full`} />
                    </div>
                    <div onClick={toggleMobileMenu} className={`flex justify-end md:hidden text-xl cursor-pointer ${scrolled ? 'text-[#285f58] hover:font-bold' : 'text-white hover:font-bold'}`}>
                        {mobileMenuOpen ? (<AiOutlineClose/>) : (<AiOutlineMenu/>)}
                    </div>
                    {mobileMenuOpen ? (
                        <div className={`h-screen bg-opacity-75 backdrop-blur-sm flex flex-col items-center gap-2 absolute top-full left-0 bg-white w-full text-[#285f58] text-sm border-t border-[#285f58] z-10`}>
                            <a href="#" className="text-xl w-full text-center py-4 transform duration-300 hover:bg-[#285f58] hover:text-white">Home</a>
                            <a href="#" className="text-xl w-full text-center py-4 transform duration-300 hover:bg-[#285f58] hover:text-white">Menu</a>
                            <a href="#" className="text-xl w-full text-center py-4 transform duration-300 hover:bg-[#285f58] hover:text-white">Our Services</a>
                            <a href="#" className="text-xl w-full text-center py-4 transform duration-300 hover:bg-[#285f58] hover:text-white">About</a>
                            <div className={`py-4 w-full justify-center flex items-center text-4xl gap-4 text-[#285f58]`}>
                                <AiFillInstagram className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border hover:bg-gray-200 border-[#285f58] rounded-full`} />
                                <AiFillFacebook className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border hover:bg-gray-200 border-[#285f58] rounded-full`} />
                                <AiOutlineTwitter className={`hover:scale-110 cursor-pointer transform duration-300 p-1 border hover:bg-gray-200 border-[#285f58] rounded-full`} />
                            </div>
                        </div>
                    ) : (<></>)}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
