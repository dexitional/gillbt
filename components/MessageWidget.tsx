import Image from 'next/image'
import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import Cover from "../public/cover-land.png";

type Props = {}

function MessageWidget({}: Props) {
  return (
    <div className="w-full bg-[#0E1A62]">
        <div className="relative px-4 py-6 md:py-10 w-full md:mx-auto md:max-w-6xl flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-8 md:space-y-0 font-sans">
            <h1 className="px-6 py-1 md:py-3 bg-white -skew-x-12 absolute top-0 right-1/3 text-primary text-base md:text-2xl font-black tracking-wider">The Prophesy</h1>
            <div className="w-full md:w-96">
                <div className="relative h-56 md:h-72 place-content-center">
                    <Image src={Cover} alt="" className="object-contain object-center md:object-left-top rounded" fill/>
                </div>
                {/* <div></div> */}
            </div>
            <div className="md:flex-1 flex flex-col space-y-4 md:space-y-6">
                <div className="">
                   <div className="text-white text-lg md:text-3xl line-clamp-6">
                   Imagine seeing the fulfillment of the prophecy God gave to Habakkuk 2,600 years ago 
                   </div>
                    
                </div>
                <div className="flex items-center space-x-3 text-base text-white">
                    <span className="h-1 w-10 bg-white"></span>
                    <span className="flex-1 text-xl">The whole earth filled with the knowledge of God’s glory.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageWidget