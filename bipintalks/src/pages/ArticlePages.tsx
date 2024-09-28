"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationScroll from './AnimationScroll';

function truncateText(text: string, wordLimit: number) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
}

function calculateReadingTime(text: string) {
    const wordsPerMinute = 200; // Average reading speed
    const words = text.split(' ').length;
    const time = Math.ceil(words / wordsPerMinute);
    return time;
}
function ArticlePages() {
    const currentDate = new Intl.DateTimeFormat('en-US').format(new Date());
    const articles = [
        {
            id: 1, // Assign a unique id for routing
            image: "/Images/article_1.png",
            heading: "The Art of Defect Management: The Good Bug, the Bad Bug",
            content: "The art of defect management is not just about fixing all bugs but making informed decisions that balance product quality and timelines with business and user needs."
        },
        {
            id: 2,
            image: "/Images/article_2.png",
            heading: "Being an Engineering Manager: The realisation",
            content: "So, here's to the Engineering Managers, those valiant wranglers of code and people! Their life is a reminder that while managing software development is no joke."
        },
        {
            id: 3,
            image: "/Images/article_2.png",
            heading: "Agile Methodologies in Practice",
            content: "Agile methodologies are frameworks that help teams deliver high-quality software products. It involves iterative development, constant feedback, and flexibility to changes in requirements."
        },
        {
            id: 4,
            image: "/Images/article_1.png",
            heading: "Effective Communication in Teams",
            content: "Communication is key in any team. It involves clear, concise exchanges of ideas and feedback, ensuring that everyone is on the same page and working towards a common goal."
        }
    ];

    const [showMore, setShowMore] = useState([false, false, false, false]);
    const elementsRef = AnimationScroll(); // Initialize the hook

    return (
        <>
            <div className="container mx-auto px-4" style={{ marginBottom: '3%', marginTop: '3%', maxWidth: '1200px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={article.id}
                            className="p-4 bg-transparent border-none shadow-none opacity-0"
                            ref={(el) => (elementsRef.current[index] = el)} // Assign refs to elements
                        >
                            <Image
                                className="rounded"
                                src={article.image}
                                alt={article.heading}
                                width={800}
                                height={600}
                                style={{ objectFit: 'cover', width: '500px', height: '250px' }}
                            />
                            <div className="mt-4">
                                <Link href={`/blog/${article.id}`}>

                                    <h3 className="text-[20px] font-semibold">
                                        {article.heading}</h3>
                                </Link>
                                <p className="mt-2 text-gray-600">
                                    {showMore[index] ? article.content : truncateText(article.content, 15)}
                                </p>
                                <button
                                    className="text-blue-700 hover:text-red-700 mt-2"
                                    onClick={() => setShowMore(prev => {
                                        const updatedShowMore = [...prev];
                                        updatedShowMore[index] = !updatedShowMore[index];
                                        return updatedShowMore;
                                    })}
                                >
                                    {showMore[index] ? 'Show Less' : 'Read More'}
                                </button>
                                <p className="mt-4 text-gray-500 text-sm">{currentDate} · {calculateReadingTime(article.content)} min read</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div></>
    )
}

export default ArticlePages