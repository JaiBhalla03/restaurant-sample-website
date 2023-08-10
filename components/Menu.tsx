import React from 'react';
import MenuCards from "@/components/MenuCards";
import MenuCardsSecond from "@/components/MenuCardsSecond";
import healthyImage from '../images/healthyImage.png';
import Image from 'next/image';
const Menu = () => {
    return (
        <div className={'bg-[#eee1d1]'}>
            <div className={'mx-48 text-center pt-20 text-5xl flex flex-col items-center justify-center font-semibold text-[#285f58]'}>
                Menu that our customers<br/>
                <div className={'relative'}>
                    Loved the most.
                    <svg className={'absolute'} width="380" height="17" viewBox="0 0 477 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 16C53.6667 8.59354 190.2 -4.30682 315 3.34339C439.8 10.9936 474.333 14.9687 476 16" stroke="#e85731" stroke-width={"3"}/>
                    </svg>
                </div>
                <div className={'text-sm mt-10 mx-48'}>
                    Our food is made of the freshest ingredients and the result is a much better sushi with a fresh look and of course great taste guarantee.
                </div>
            </div>
            <MenuCards/>
            <div className={'mx-48 text-center text-5xl flex flex-col gap-2 items-center justify-center font-semibold text-[#285f58]'}>
                <div className={'flex gap-2'}>
                    <div className={'relative'}>
                        Choose The Taste
                        <svg className={'absolute'} width="420" height="17" viewBox="0 0 477 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 16C53.6667 8.59354 190.2 -4.30682 315 3.34339C439.8 10.9936 474.333 14.9687 476 16" stroke="#e85731" stroke-width={"3"}/>
                        </svg>
                    </div>
                    <div>
                        That
                    </div>
                </div>
                <div>Suit with your tongue</div>
                <div className={'text-sm mt-6 mx-48'}>
                    Our food is made of the freshest ingredients and the result is a much better sushi with a fresh look and of course great taste guarantee.
                </div>
            </div>
            <MenuCardsSecond/>
            <div className={'mx-48 text-center text-5xl flex flex-col gap-2 items-center justify-center font-semibold text-[#285f58]'}>
                <div className={'flex gap-2'}>
                    <div>We served</div>
                    <div className={'relative'}>
                        Healthy Food
                        <svg className={'absolute'} width="300" height="17" viewBox="0 0 477 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 16C53.6667 8.59354 190.2 -4.30682 315 3.34339C439.8 10.9936 474.333 14.9687 476 16" stroke="#e85731" stroke-width={"3"}/>
                        </svg>
                    </div>
                </div>
                <div>For Healthy Lifestyle</div>
                <div className={'text-sm mt-6 mx-48'}>
                    Our food is made of the freshest ingredients and the result is a much better sushi with a fresh look and of course great taste guarantee.
                </div>
            </div>
            <div className={'relative flex justify-center items-center py-20 px-32 w-[80%] mx-auto'}>
                <Image src={healthyImage} alt={''}/>
                <div className={'absolute top-1/3 left-20 flex flex-col gap-4 w-48'}>
                    <div className={'flex flex-col gap-2'}>
                        <div className={'text-6xl font-semibold text-[#285f58]'}>101+</div>
                        <div className={'text-sm font-normal text-[#285f58]'}>Our food is made of freshest ingredients.</div>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <div className={'text-6xl font-semibold text-[#285f58]'}>120k+</div>
                        <div className={'text-sm font-normal text-[#285f58]'}>Our food is made of freshest ingredients and result are much better.</div>
                    </div>
                </div>
                <div className={'w-64 flex flex-col gap-4 absolute top-2/3 right-20'}>
                    <div className={'text-sm font-normal text-[#285f58]'}>
                        If you're a culinary expert or a healthy food lovers. Nothing will br holding you back to try all our premium unique recipes.
                    </div>
                    <div className={'hover:bg-white hover:text-[#e8512a] hover:font-semibold transform duration-300 w-32 flex items-center justify-center p-1 shadow-md shadow-orange-800 cursor-pointer font-thin text-white bg-[#e8512a] text-sm rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm'}>
                        Order Now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;