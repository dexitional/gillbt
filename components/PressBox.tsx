import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Bg from '@/public/bg2.jpg'
import { urlFor } from '@/sanity';

type Props = {
    title: string;
    link: string;
    category: string;
    categoryLink: string;
    publishedAt: string;
    featureImg: any;
}

function PressBox({ title, link, category, categoryLink, publishedAt,featureImg }: Props) {
  return (
    <div className="p-4 md:px-6 md:pt-6 md:pb-10 bg-white flex flex-col justify-start md:flex-row md:justify-between md:space-x-10">
        <div className="flex flex-col space-y-6 order-2 md:order-1">
            <div className="-ml-12 flex items-center space-x-6">
                <div className="py-1 px-3 md:px-4 md:py-2 bg-primary">
                    <Link href={categoryLink} className="text-white text-sm hover:underline">{category}</Link>
                </div>
                <span className="text-sm font-medium">{publishedAt}</span>
            </div>
            <Link href={link} className="text-xs md:text-xl font-bold md:underline hover:text-primary">{title}</Link>
        </div>
        <div className="relative w-full md:w-40 h-28 bg-white rounded overflow-hidden order-1 md:order-2">
            <Image src={featureImg ? urlFor(featureImg).width(683).url() : Bg} alt="" className="object-contain object-center" fill  />
        </div>
        
    </div>
  )
}

export default PressBox