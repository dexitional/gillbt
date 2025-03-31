import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
   category?: string;
   count?: string;
   link?: string;
   image: any;
}

function MiniShopCard({ category,count,link, image}: Props) {
  return (
    <div className="px-3 py-4 flex flex-col space-y-3 shadow-lg bg-white border border-gray-400 rounded">
      <div className="relative rounded-full"><Image alt="" src={image} className="mx-auto h-36 w-full md:w-fit bg-white rounded-lg object-contain object-center" /></div>
      <div className="space-y-2">
        <Link href=""><h2 className="text-sm font-medium line-clamp-1">{category}</h2></Link>
        <div className="flex items-center justify-between">
          <Link href={link || '#'} className="px-1.5 py-0.5  bg-slate-100 border border-black text-xs inline-block">
            <span>Goto Products </span>
          </Link>
          <span className="text-xs line-clamp-5 text-gray-500">{count} Products</span>
        </div>
      </div>
    </div>
  )
}

export default MiniShopCard