'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import clsx from 'clsx';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import person1 from '../images/person1.jpg'
import person2 from '../images/person2.jpg'
import person3 from '../images/person3.jpg'
import person4 from '../images/person4.jpg'
import person5 from '../images/person5.jpg'
import {AiFillStar} from "react-icons/ai";
import Image from "next/image";
const FeedBackBox = () => {

    const comments = [
        {
            imageSrc: person1,
            name: 'John Doe',
            comment: 'Great food and excellent service! The variety of dishes on the menu is impressive. I especially enjoyed the creative combinations of flavors that the chef has put together. Will definitely be recommending this restaurant to my friends!',
            rating: Math.floor(Math.random() * 5) + 1,
        },
        {
            imageSrc: person2,
            name: 'Jane Smith',
            comment: 'Amazing experience, will definitely come back! The presentation of the food is top-notch. Each dish is like a work of art, and you can tell that a lot of thought and care went into crafting the menu. The staff was attentive and knowledgeable about the menu as well.',
            rating: Math.floor(Math.random() * 5) + 1,
        },
        {
            imageSrc: person3,
            name: 'Michael Johnson',
            comment: 'Delicious dishes and friendly staff. The atmosphere is cozy and welcoming. The menu offers a wide range of options, from comfort food to more adventurous choices. The portions are generous, and the flavors are bold and satisfying.',
            rating: Math.floor(Math.random() * 5) + 1,
        },
        {
            imageSrc: person4,
            name: 'Emily Brown',
            comment: 'One of the best restaurants in town! The flavors are unique and unforgettable. I was pleasantly surprised by the innovative combinations of ingredients that brought out new dimensions of taste. The service was prompt and courteous as well.',
            rating: Math.floor(Math.random() * 5) + 1,
        },
        {
            imageSrc: person5,
            name: 'David Lee',
            comment: 'Lovely ambiance and flavorsome food. This restaurant is a hidden gem! From the moment I walked in, I felt a sense of warmth and relaxation. The dishes I tried were bursting with flavor, and the attention to detail was evident in every aspect of the dining experience.',
            rating: Math.floor(Math.random() * 5) + 1,
        },
    ];

    return (
        <div className={'flex items-center justify-center py-20 overflow-hidden'}>
            <div className={'h-80'}>
                <Swiper
                    spaceBetween={50}
                    navigation={true}
                    effect={'fade'}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    {
                        comments.map((comment, index)=>(
                            <SwiperSlide key={index}>
                                <div className={'relative m-5'}>
                                    <div className={'text-white absolute w-12 h-12 rounded-full right-0 overflow-hidden'}>
                                        <Image src={comment.imageSrc} alt={''} className={'h-full object-cover rounded-full'}/>
                                    </div>
                                    <div className={'relative text-[#285f58] text-4xl font-bold'}>
                                        <div className={'top-4 -left-30 flex items-center justify-center absolute font-cursive-quote bg-[#f37761] text-[#eee1d1] flex justify-center items-center rounded-full px-4 pt-8 pb-4 h-20 w-20 text-5xl pt-4'}>
                                            "
                                        </div>
                                    </div>
                                    <div className={'text-white flex flex-col gap-4 text-lg font-normal top-10 absolute z-10 px-14 py-5'}>
                                        <div>
                                            {comment.comment}
                                        </div>
                                        <div className={'text-white flex justify-between'}>
                                            <div className={'font-semibold'}>
                                                {comment.name} -<i className={'not-italic text-sm'}>Loyal Customer</i>
                                            </div>
                                            <div className={'flex items-center gap-1'}>
                                                {Array.from({length:comment.rating}, (_, index)=>(
                                                    <AiFillStar size={20} key={index} className={'text-[#f37761]'}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default FeedBackBox;
