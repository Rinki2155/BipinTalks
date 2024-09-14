"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const [showLinks, setShowLinks] = useState(false); // New state for desktop FaBars click

    const toggleNavbarIcon = () => {
        setIsClick(!isClick);
    };

    const toggleDesktopLinks = () => {
        setShowLinks(!showLinks); // Toggle desktop FaBars menu
    };

    return (
        <>
            <nav className="bg-[black] p-6 fixed text-white top-0 left-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="block">
                                    <Image
                                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=218,fit=crop,q=95/m5Kvn82LK2IL1KGq/bipintalks-mP4pMVJGLMCWvRqE.png"
                                        width={100}
                                        height={0}
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-8 ml-8">
                                <Link href="/" className="hover:underline text-[18px]">
                                    <PlusIcon className="h-7 w-7 text-black-500" />
                                </Link>
                                <Link href="/" className="hover:underline text-[18px]">
                                    <PencilSquareIcon className="h-7 w-7 text-black-500" />
                                </Link>
                                <Link href="/" className="hover:underline text-[18px]">
                                    <Image
                                        src="/Images/1.jpeg"
                                        alt="Profile"
                                        className="h-8 w-8 rounded-full"
                                        height={30}
                                        width={30}
                                    />
                                </Link>

                                {/* FaBars Icon in Desktop View */}
                               

                                {/* Conditional rendering of About and Blog in Desktop */}
                                {showLinks ? (
                                    <>
                                        <Link href="/about" className="hover:underline text-[18px]">
                                            About
                                        </Link>
                                        <Link href="/blog" className="hover:underline text-[18px]">
                                            Blog
                                        </Link>
                                    </>
                                ) :    <button onClick={toggleDesktopLinks} className="text-white text-[18px]">
                                <FaBars fontSize={30} />
                            </button>}
                            </div>
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                                onClick={toggleNavbarIcon}
                            >
                                {isClick ? (
                                    <FaBars fontSize={30} color="white" />
                                ) : (
                                    <FaWindowClose fontSize={30} color="white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ml-[35px]">
                            <Link href="/" className="hover:underline text-[18px] ml-12">
                                <PlusIcon className="h-7 w-7 text-black-500" />
                            </Link>
                            <Link href="/" className="hover:underline text-[18px] mb-4 ml-8">
                                <PencilSquareIcon className="h-7 w-7 text-black-500" />
                            </Link>
                            <Link href="/" className="hover:underline text-[18px] mb-4 ml-8">
                                <Image
                                    src="/Images/1.jpeg"
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full"
                                    height={30}
                                    width={30}
                                />
                            </Link>
                            <Link href="/" className="block hover:underline text-[18px] mb-4">
                                Home
                            </Link>
                            <Link href="/blog" className="block hover:underline text-[18px] mb-4">
                                Blog
                            </Link>
                            <Link href="/about" className="block hover:underline text-[18px] mb-4">
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
