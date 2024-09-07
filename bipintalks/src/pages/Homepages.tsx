import React from 'react';
import Image from 'next/image';
import ArticlePages from './ArticlePages';


function Homepages() {
    return (
        <>
            <div className="relative w-full h-[100vh] md:h-[130vh]">
                <Image
                    src="/Images/homeImage.avif"
                    alt="Home Image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-[#212020] opacity-[0.80] flex items-center justify-left p-4 ">
                    <div className="text-left text-white px-4 py-2 md:ml-[130px] md:w-[50%] w-full">
                        <h1 className="text-5xl md:text-7xl font-bold leading-snug animate-textd">Welcome where <span className='block leading-snug'>Bipin Talks!</span></h1>
                        <p className="text-base md:text-[17px] font-extralight leading-relaxed mt-10 animate-textd">
                            Welcome to Bipin Talks, your destination for exploring engineering, technology, products, and software.
                        </p>
                        <p className="text-base md:text-[17px] font-extralight leading-relaxed mt-6 animate-textd">
                            Here, we delve into the latest innovations, trends, and insights shaping our tech-driven world. Whether you're a professional or a tech enthusiast, you'll find technical deep dives, product reviews, and industry updates. Our mission is to make complex concepts accessible and exciting for everyone.
                        </p>
                        <p className="text-base md:text-[17px] font-extralight leading-relaxed mt-6 animate-textd">
                            Join me in navigating the fascinating landscape of engineering and technology, discovering how they transform our lives and fuel the future. Thank you for being part of Bipin Talks. Stay tuned for insightful articles, stories, and thoughtful discussions.
                        </p>
                    </div>
                </div>
            </div>
            <ArticlePages />

        </>)
}

export default Homepages