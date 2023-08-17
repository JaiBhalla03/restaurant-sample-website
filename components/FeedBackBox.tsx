'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, {StaticImageData} from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { EffectFade } from 'swiper/modules';
import {Navigation} from 'swiper/modules';
import {Pagination} from 'swiper/modules';
import person1 from '../images/person1.jpg';
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpg';
import person4 from '../images/person4.jpg';
import person5 from '../images/person5.jpg';
import { AiFillStar } from 'react-icons/ai';

// Initialize Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

interface Comment {
    imageSrc: StaticImageData;
    name: string;
    comment: string;
    rating: number;
}

const comments : Comment[] = [
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

// ... (import statements)

const FeedBackBox: React.FC = () => {
    return (
        <div className={'flex items-center justify-center py-10 md:py-20 overflow-hidden'}>
            <div className={'h-screen md:h-80'}>
                <Swiper
                    spaceBetween={50}
                    effect="fade"
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {comments.map((comment, index) => (
                        <SwiperSlide key={index} className={''}>
                            <div className={'relative m-5'}>
                                <div className={'text-white absolute w-12 h-12 rounded-full right-0 overflow-hidden'}>
                                    <Image src={comment.imageSrc} alt={''} className={'h-full object-cover rounded-full'} />
                                </div>
                                <div className={'relative text-[#285f58] text-xl md:text-4xl font-bold'}>
                                    <div className={'top-4 -left-10 md:-left-30 flex items-center justify-center absolute font-cursive-quote bg-[#f37761] text-[#eee1d1] flex justify-center items-center rounded-full px-4 pt-8 pb-4 h-14 w-14 md:h-20 md:w-20 text-xl md:text-5xl pt-4'}>
                                        "
                                    </div>
                                </div>
                                <div className={'text-white flex flex-col gap-2 md:gap-4 text-sm md:text-lg font-normal top-7 md:top-10 absolute z-10 px-6 md:px-14 py-2 md:py-5'}>
                                    <div>{comment.comment}</div>
                                    <div className={'text-white flex justify-between'}>
                                        <div className={'font-semibold'}>
                                            {comment.name} -<i className={'not-italic text-xs md:text-sm'}>Loyal Customer</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FeedBackBox;


