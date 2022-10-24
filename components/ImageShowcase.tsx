import Image from "next/image";
import React from "react";
import img0 from '../public/static/images/image2.png';
import img1 from '../public/static/images/image3.png';
import img2 from '../public/static/images/image4.png';
import img3 from '../public/static/images/image5.png';
import TextArea2 from "./TextArea2";
const ImageShowcase = () => {

    return (
        <div className="max-w-[1240px] mx-auto pt-24 pb-8">
            <div className="hidden md:block md:max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative px-4 md:w-full md:max-w-full w-full p-0">
                        <Image
                            src={img1}
                            className="scale-75 hover:scale-[0.8] md:scale-100 md:hover:scale-105 ease-in duration-100"
                            layout="responsive" />
                    </div>
                    <div className="relative px-4 md:w-full md:max-w-full w-full p-0 md:pt-24">
                        <Image
                            src={img2}
                            className="scale-75 hover:scale-[0.8] md:scale-100 md:hover:scale-105 ease-in duration-100"
                            layout="responsive" />
                    </div>
                    <div className="relative px-4 md:w-full md:max-w-full w-full p-0 md:pt-48">
                        <Image
                            src={img3}
                            className="scale-75 hover:scale-[0.8] md:scale-100 md:hover:scale-105 ease-in duration-100"
                            layout="responsive" />
                    </div>
                </div>
                <div>
                    <TextArea2 />
                </div>
            </div>

            <div className="flex flex-col md:hidden md:max-w-[1240px]">
                <div className="relative px-4 md:w-full md:max-w-full w-full py-0">
                    <Image
                        src={img1}
                        className="scale-75 hover:scale-[0.8] md:scale-100 md:hover:scale-105 ease-in duration-100"
                        layout="responsive" />
                    <div className="px-4">
                        <h2 className="font-serif text-lg max-w-2xl font-bold">
                            Yosemite
                        </h2>
                        <p className="font-sans text-lg max-w-2xl pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Aliquam sit amet sollicitudin est. Suspendisse potenti. Donec porttitor tempor pulvinar. Sed congue elementum placerat. Maecenas nec rhoncus est.
                        </p>
                    </div>
                </div>

                <div className="relative px-4 md:w-full md:max-w-full w-full p-0">
                    <Image
                        src={img2}
                        className="scale-75 hover:scale-[0.8] md:scale-100 md:hover:scale-105 ease-in duration-100"
                        layout="responsive" />
                    <div className="px-4">
                        <h2 className="font-serif text-lg max-w-2xl font-bold">
                            El Capitan
                        </h2>
                        <p className="font-sans text-lg max-w-2xl pt-2">
                            Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, sit amet tincidunt enim sollicitudin ut. Vestibulum at elementum leo. Aliquam erat volutpat. Nullam magna orci, accumsan at arcu lobortis, volutpat cursus nisl. Suspendisse metus purus, gravida vehicula eros in, malesuada posuere magna.
                        </p>
                    </div>
                </div>

                <div className="relative px-4 md:w-full md:max-w-full w-full p-0">
                    <Image
                        src={img3}
                        className="scale-75 hover:scale-[0.8] md:scale-100 md:hover:scale-105 ease-in duration-100"
                        layout="responsive" />
                    <div className="px-4">
                        <h2 className="font-serif text-lg max-w-2xl font-bold">
                            High Sierra
                        </h2>
                        <p className="font-sans text-lg max-w-2xl pt-2">
                            Nulla ac dolor nibh. Vestibulum feugiat convallis posuere. Pellentesque vestibulum eleifend turpis vel consequat. Cras tempor turpis in nunc finibus sollicitudin. Morbi malesuada sodales urna, quis pulvinar nunc interdum ultrices. Nullam id risus velit. Ut fringilla eleifend mollis. Phasellus in dui tellus. Nam euismod mattis quam porttitor ornare.
                        </p>
                    </div>
                </div>

                <div className="relative px-4 md:w-full md:max-w-full w-full pt-8">
                    <Image
                        src={img0}
                        className="scale-75 hover:scale-[0.8] md:scale-100 md:hover:scale-105 ease-in duration-100"
                        layout="responsive" />
                    <div className="px-4 py-8">
                        <h2 className="font-serif text-lg max-w-2xl font-bold">
                            Mojave
                        </h2>
                        <p className="font-sans text-lg max-w-2xl pt-2">
                            Integer tempor enim lacus, sit amet dapibus diam elementum et. Pellentesque congue libero id enim dignissim consequat. Fusce et sagittis magna, in feugiat felis. Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, laoreet ornare purus nulla in ipsum. Praesent ac augue vitae turpis ullamcorper hendrerit eleifend in odio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageShowcase;