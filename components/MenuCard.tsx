'use client';
import React from 'react';
import Image from "next/image";
import image1 from '../images/menuImage1.jpg';

interface MenuCardProp  {
    direction: string;
}

const MenuCard : React.FC<MenuCardProp> = ({direction}) => {
    return (
        <div className={'flex flex-col gap-4 w-72 lg:w-96 p-4'}>
            <Image src={image1} alt={'the'} className={`transform ${direction}rotate-[2deg]`}/>
            <div className={'flex flex-col gap-2 text-[#285f58]'}>
                <div className={'font-bold text-2xl'}>Original Roll</div>
                <div className={'font-normal text-sm'}>
                    Our food is made of the freshest ingredients and the result is a much better sushi with a fresh look and of course
                    great taste guarantee.
                </div>
                <div className={'hover:bg-white hover:text-[#e8512a] hover:font-semibold transform duration-300 w-32 flex items-center justify-center p-1 shadow-md shadow-orange-800 cursor-pointer font-thin text-white bg-[#e8512a] text-sm rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm'}>
                    $40-Order Now
                </div>
            </div>
        </div>
    );
};

export default MenuCard;