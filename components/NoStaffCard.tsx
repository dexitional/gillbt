import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Noimage from '@/public/no_img.webp'

type Props = {}

function NoStaffCard({  }: Props) {
  return (
    <div className="shadow-xl px-4 pb-6 border border-primary font-sans rounded-xl flex flex-col space-y-6 opacity-50 transition-all">
        <div className="h-56 md:w-full w-3/4 mx-auto rounded-b-full rounded-t-[4px] bg-primary flex items-center justify-center shadow-[0px_0px_10px_rgb(2,49,153)_inset]">
            <div className="p-2 h-40 w-40 bg-white  rounded-full border-8 ring-8 ring-blue-300/50 flex items-center justiy-center overflow-hidden">
              <Image src={Noimage } alt="" className="h-36 w-36 object-contain animate-pulse" width={100} height={100} />
            </div>
        </div>
        <div className="space-y-2">
            <h2 className="h-4 w-full bg-gray-200 rounded animate-pulse"></h2>
            <p className="h-4 w-4/5 bg-gray-200 rounded animate delay-75"></p>
            <p className="h-4 w-3/4 bg-gray-200 rounded animate delay-100"></p>
            <p className="h-4 w-4/5 bg-gray-200 rounded animate "></p>
            <p>&nbsp;</p>
           
        </div>
    </div>
  )
}

export default NoStaffCard