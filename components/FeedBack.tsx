import React from 'react';
import FeedBackBox from "@/components/FeedBackBox";

const FeedBack = () => {
    return (
        <div className={'bg-[#eee1d1]'}>
            <div className={'mx-2 lg:mx-48 text-center text-5xl flex flex-col gap-2 items-center justify-center font-semibold text-[#285f58]'}>
                <div className={'flex flex-col lg:flex-row gap-2'}>
                    <div>What Our</div>
                    <div className={'relative'}>
                        Happy Customers
                        <svg className={'hidden lg:block absolute'} width="420" height="17" viewBox="0 0 477 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 16C53.6667 8.59354 190.2 -4.30682 315 3.34339C439.8 10.9936 474.333 14.9687 476 16" stroke="#e85731" strokeWidth={"3"}/>
                        </svg>
                    </div>
                </div>
                <div>Talk About Us</div>
                <div className={'text-sm mt-6 mx-2 lg:mx-48'}>
                    Our food is made of the freshest ingredients and the result is a much better sushi with a fresh look and of course great taste guarantee.
                </div>
            </div>
            <FeedBackBox/>
        </div>
    );
};

export default FeedBack;