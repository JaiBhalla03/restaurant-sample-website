'use client';
import React, {useState} from 'react';
import image1 from '../images/pizzaImage.png'
import image2 from '../images/burgerImage.png'
import image3 from '../images/saladImage.png'
import Image from "next/image";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
const MenuCards = () => {
    let [activeCard, setActiveCard] = useState(0);

    const menuItem = [
        {
            imageSrc: image1,
            title: 'Pizza',
            description: 'A classic Italian delight with various toppings.'
        },
        {
            imageSrc: image2,
            title: 'Burger',
            description: 'A juicy burger with all the fixings.'
        },
        {
            imageSrc: image3,
            title: 'Salad',
            description: 'Fresh and healthy greens with dressing.'
        },
    ]

    const handleClick = (cardIndex) =>{
        setActiveCard(cardIndex);
    }
    const shiftRight = () => {
        const len = menuItem.length;
        let newLen = (activeCard + 1) % len; // Increment correctly
        setActiveCard(newLen);
    };

    const shiftLeft = () => {
        const len = menuItem.length;
        let newLen = (activeCard - 1 + len) % len; // Handle negative value correctly
        setActiveCard(newLen);
    };
    return (
        <div className={'h-screen pt-20 px-10 lg:px-32'}>
            <div className={'flex flex-col lg:flex-row justify-between px-20'}>
                <div className={'relative'}>
                    {
                        menuItem.map((item, index)=>(
                            <div key={index}
                                 className={`${activeCard === index ? 'opacity-1 scale-100' : 'opacity-0 scale-50'} text-[#285f58] flex flex-col items-center justify-center gap-4 transform duration-500 h-48 w-48 lg:h-96 lg:w-96 absolute`}
                            >
                                <Image src={item.imageSrc} alt={item.title}/>
                                <div className={'text-xl font-bold'}>{item.title}</div>
                                <div className={'text-sm font-semibold'}>{item.description}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={'flex flex-col gap-4 text-[#285f58]'}>
                    {
                        menuItem.map((item, index)=>(
                            <div key={index} onClick={()=>handleClick(index)} className={`group hover:bg-[#e8512a] hover:text-white transform duration-300 cursor-pointer rounded-l-full ${activeCard === index ? 'bg-[#e8512a] text-white' : 'bg-[#d6c7b6] text-[#285f58]'}  w-full flex gap-2 p-1`}>
                                <div className={'flex items-center justify-center p-2 h-20 max-fit rounded-full'}>
                                    <Image src={item.imageSrc} alt={item.title} className={'w-24 rounded-full'}/>
                                </div>
                                <div className={'px-1 flex w-full flex-col gap-2 justify-center'}>
                                    <div className={'items-center flex w-full justify-between'}>
                                        <div className={'text-lg font-bold'}>
                                            {item.title}
                                        </div>
                                        <div className={`group-hover:bg-white group-hover:text-[#e8512a] group-hover:font-semibold transform duration-300 w-28 flex items-center justify-center p-1 shadow-md shadow-orange-800 cursor-pointer ${activeCard === index ? 'font-semibold text-[#e8512a] bg-white' : 'font-thin text-white bg-[#e8512a]'} text-sm rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm`}>
                                            Order Now
                                        </div>
                                    </div>
                                    <div>{item.description}</div>
                                </div>
                            </div>
                        ))
                    }
                    <div className={'flex w-full justify-center gap-4 pt-6'}>
                        <div className={'p-2 bg-[#d6c7b6] text-[#e8512a] hover:bg-[#e8512a] hover:text-white transform duration-300 cursor-pointer rounded-full'} onClick={shiftLeft}>
                            <AiOutlineLeft size={25}/>
                        </div>
                        <div className={'p-2 bg-[#d6c7b6] text-[#e8512a] hover:bg-[#e8512a] hover:text-white transform duration-300 cursor-pointer rounded-full'} onClick={shiftRight}>
                            <AiOutlineRight size={25}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCards;