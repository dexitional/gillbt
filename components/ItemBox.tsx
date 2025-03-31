import Image from 'next/image'
import React from 'react'
import Bg from '@/public/bg2.jpg'
import Link from 'next/link';
import { urlFor } from '@/sanity';

type Props = {
   title: string;
   content: string;
   label?: string;
   link?: string;
   featureImg: any;
}

function ItemBox({ title, content, label, link, featureImg }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-48 md:h-full">
            <Image src={featureImg ? urlFor(featureImg).width(683).url() : Bg} alt="" className="object-cover object-center" fill />
        </div>
        <div className="p-6 md:p-14 flex flex-col space-y-4 md:space-y-8 bg-white">
          <h1 className="text-lg md:text-[1.5rem] font-black text-primary/70 leading-tight">{title}</h1>
          <p className="pb-4 text-base md:text-lg font-medium">{content}</p>
          { label && link &&  <Link href={link} className="px-6 py-2 w-fit bg-primary/70 text-white">{label}</Link> }
        </div>
    </div>
  )
}

export default ItemBox