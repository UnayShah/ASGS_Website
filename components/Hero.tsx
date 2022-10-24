import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
const Hero = () => {
        const [imageMargin, setImageMargin] = useState('0px')

        useEffect(() => {
                const handleMargin = () => {
                        setImageMargin((window.scrollY / 20) + 'px')
                }
                window.addEventListener('scroll', handleMargin);
        })

        return (
                <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center main-image"
                        style={{ marginLeft: `${imageMargin}`, marginRight: `${imageMargin}`}}>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]" style={{ marginLeft: `${imageMargin}`, marginRight: `${imageMargin}`, }} />
                        <div className="text-white z-[2] ml-10 mt-10">
                                <h1 className="text-7xl bold">Lorem Ipsum</h1>
                        </div>
                </div>)
}

export default Hero;