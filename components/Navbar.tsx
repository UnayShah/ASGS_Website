import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [barColor, setBarColor] = useState('#0F0F0F20');
    const [blurBackground, setBlurBackground] = useState('true');
    const [barTextColor, setBarTextColor] = useState('white');

    const handleMenu = () => setMenu(!menu);
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 120) {
                setBarColor('#0F0F0F20');
                setBarTextColor('black')
            } else {
                setBarColor('#0F0F0F20');
                setBarTextColor('white');
            }
        };
        window.addEventListener('scroll', changeColor);
    })

    return (
        <div style={{ backgroundColor: barColor }}
            className="fixed top-0 left-0 w-full z-10 ease-in duration-100 backdrop-blur-sm shadow-[#0F0F0F55] shadow-sm">
            <div style={{ color: barTextColor }}
                className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ease-in duration-100">
                {/* Webpage title */}
                <Link href='/'>
                    <h1 className="font-bold text-4xl">
                        LOREM IPSUM
                    </h1>
                </Link>
                {/* Large screen menu */}
                <ul className="hidden sm:flex">
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='/'>HOME</Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='/'>ABOUT</Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='/'>CONTACT</Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='/'>WORK</Link>
                    </li>
                </ul>

                {/* Small screen menu button */}
                <div className="block sm:hidden z-10" onClick={handleMenu}>
                    {
                        menu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
                    }
                </div>
                {/* Small screen menu */}
                <div className={menu ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/80 text-center ease-in duration-200 text-white" : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/80 text-center ease-in duration-200 text-white"}>
                    <ul>
                        <li className="p-4 hover:underline hover:underline-offset-4 text-3xl font-bold hover:text-gray-200 ease-in duration-100">
                            <Link href='/'>HOME</Link>
                        </li>
                        <li className="p-4  hover:underline hover:underline-offset-4 text-3xl font-bold hover:text-gray-200 ease-in duration-100">
                            <Link href='/'>ABOUT</Link>
                        </li>
                        <li className="p-4  hover:underline hover:underline-offset-4 text-3xl font-bold hover:text-gray-200 ease-in duration-100">
                            <Link href='/'>CONTACT</Link>
                        </li>
                        <li className="p-4 hover:underline hover:underline-offset-4 text-3xl font-bold hover:text-gray-200 ease-in duration-100">
                            <Link href='/'>WORK</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;