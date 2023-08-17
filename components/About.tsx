import React from 'react';
import AboutCard from "@/components/AboutCard";

const About = () => {
    return (
        <div className={'bg-[#eee1d1] relative overflow-hidden'}>
            <div className="bg-[#eee1d1] h-28 w-full absolute top-0 left-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="fill-current text-[#285f58] w-full"
                >
                    <path d="M0 100l48-12C96 76 192 28 288 23.5 384 19 480 57 576 57.5c96 .5 192-38.5 288-33C960 29 1056 79 1152 83.5 1248 88 1344 48 1392 28l48-20V0H0z" />
                </svg>
            </div>
            <div className={'mt-32 h-48 mx-2 lg:mx-32 lg:p-8 relative z-10'}>
                <div className={'relative text-[#285f58] mx-10 lg:mx-20 text-4xl font-bold'}>
                    <div className={'-top-8 -left-14 flex items-center justify-center absolute font-cursive-quote bg-[#f37761] text-[#eee1d1] flex justify-center items-center rounded-full px-4 pt-8 pb-4 h-20 w-20 text-5xl pt-4'}>
                        "
                    </div>
                    <div className={'z-10 absolute'}>We Try to keep as <i className={'not-italic text-[#e85731]'}>Fresh & Healthy</i> as Possible by Using
                        <i className={'not-italic text-[#e85731]'}> Local, seasonal Ingredients.</i> At the Same Time, We avoid to Use artificial Ingredients and Food Additives during cooking Process.
                    </div>
                </div>
            </div>
            <div className={'mx-10 lg:mx-48 text-center mt-32 text-5xl flex flex-col items-center justify-center font-semibold text-[#285f58]'}>
                We create delicious Food <br/>
                <div className={'flex gap-2'}>
                    <div className={'relative'}>
                        Combination
                        <svg className={'hidden lg:block absolute'} width="300" height="28" viewBox="0 0 251 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 27C75.4 -5 198 7 250 27" stroke="#e85731" strokeWidth={"3"}/>
                        </svg>
                    </div>
                    for You
                </div>
                <div className={'text-sm mt-10 mx-10 lg:mx-48'}>
                    Our food is made of the freshest ingredients and the result is a much better sushi with a fresh look and of course great taste guarantee.
                </div>
            </div>
            <div className={'my-10 flex flex-col gap-2 items-center lg:flex-row justify-center lg:gap-8 mx-0 lg:mx-32'}>
                <AboutCard/>
                <AboutCard/>
                <AboutCard/>
            </div>
        </div>
    );
};

export default About;
