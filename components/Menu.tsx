import React from 'react';
import MenuCards from "@/components/MenuCards";

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
        </div>
    );
};

export default Menu;