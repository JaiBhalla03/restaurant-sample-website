import React from 'react';
import Image from "next/image";
import cardImage from '../images/heroImage1.png'

const AboutCard = () => {
    return (
        <div className={'cursor-pointer group h-96 w-full sm:w-72 bg-black rounded-3xl relative overflow-hidden'}>
            <Image
                src={cardImage}
                alt="Card Image"
                className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#e85731] text-white text-center flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-80 transform duration-300 group-hover:h-full">
                <h1 className={'text-2xl fond-semibold'}>Paneer Masala</h1>
                <h1 className={'text-sm font-thin group-hover:font-semibold'}>Explore More!</h1>
            </div>
        </div>
    );
};

export default AboutCard;
