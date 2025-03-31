import React from 'react'
import Img from '@/public/no_img.webp'
import Image from 'next/image'

type Props = {}

function PastCard({}: Props) {
  return (
    <div className="p-4 pb-6 flex flex-col space-y-6 items-center bg-white rounded-lg">
        <div className="relative h-48 w-full md:h-48 rounded-lg overflow-hidden">
            <Image src={Img} alt="" className="object-contain object-left-top border" fill/>
        </div>
        <div className="">
        <h1 className="text-lg font-bold text-primary/80 tracking-wide">Ebenezer Kwabena Blay Ackah</h1>
        <p className="font-medium text-sm md:text-base">Principal, 1992 - 2024</p>
        <p className="font-bold text-sm md:text-base">Chairman</p>
        </div>
    </div>
  )
}

export default PastCard