import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-[#2B2C2E] text-white uppercase">
            <div
                className="hidden md:flex max-w-[1240px] m-auto justify-between items-center p-4">
                <Link href='/'>
                    <h1 className="font-bold text-xl">
                        Made with ♡ by Unay Shah
                    </h1>
                </Link>
                {/* Large screen menu */}
                <ul className="hidden sm:flex">
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='mailto:unayshah@gmail.com'>EMAIL</Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://drive.google.com/file/d/1nRdhE5tWCvuAackOrPGM4QTC5LDm_3zy/view'>
                            <a target="_blank">RESUME</a>
                        </Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://www.facebook.com/profile.php?id=1841466209'>
                            <a target="_blank">FACEBOOK</a>
                        </Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://www.linkedin.com/in/unayshah/'>
                            <a target="_blank">LINKEDIN</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="sm:flex hidden md:hidden flex-col items-center text-center">
                <ul className="flex pt-2">
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='mailto:unayshah@gmail.com'>EMAIL</Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://drive.google.com/file/d/1nRdhE5tWCvuAackOrPGM4QTC5LDm_3zy/view'>
                            <a target="_blank">RESUME</a>
                        </Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://www.facebook.com/profile.php?id=1841466209'>
                            <a target="_blank">FACEBOOK</a>
                        </Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://www.linkedin.com/in/unayshah/'>
                            <a target="_blank">LINKEDIN</a>
                        </Link>
                    </li>
                </ul>
                <div className="pt-1 pb-4">
                    <h1 className="font-bold">
                        Made with ♡ by Unay Shah
                    </h1>
                </div>
            </div>


            <div className="flex sm:hidden flex-col items-center text-center">
                <ul className="">
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='mailto:unayshah@gmail.com'>EMAIL</Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://drive.google.com/file/d/1nRdhE5tWCvuAackOrPGM4QTC5LDm_3zy/view'>
                            <a target="_blank">RESUME</a>
                        </Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://www.facebook.com/profile.php?id=1841466209'>
                            <a target="_blank">FACEBOOK</a>
                        </Link>
                    </li>
                    <li className="p-4 hover:underline hover:underline-offset-4">
                        <Link href='https://www.linkedin.com/in/unayshah/'>
                            <a target="_blank">LINKEDIN</a>
                        </Link>
                    </li>
                    <li className="p-4">
                        <h1 className="font-bold">
                            Made with ♡ by Unay Shah
                        </h1>
                    </li>
                </ul>
            </div>
        </div >

    )
}

export default Footer;