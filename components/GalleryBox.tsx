"use client"

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Bg from '@/public/bg2.jpg'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { urlFor } from '@/sanity';

type Props = {
    title: string;
    link: string;
    category: string;
    categoryLink: string;
    publishedAt: string;
    images: any;
}


function GalleryBox({ title, link, category, categoryLink, publishedAt,images }: Props) {

    const [open, setOpen] = React.useState(false);
    const loadSlider = () => {
        setOpen(true);
    }
    
   console.log(images)

  return (
    <div className="p-4 md:px-6 md:pt-6 md:pb-10 bg-white flex flex-col md:flex-row md:justify-between md:space-x-10">
        <div className="flex flex-col space-y-4 md:space-y-6">
            <div className="-ml-12 flex items-center space-x-6">
                <button onClick={loadSlider} className="px-4 py-2 hover:bg-primary/90 bg-primary">
                   <span className="text-white text-sm">View Album Slideshow</span>
                </button>
                {/* <span className="text-sm font-medium">{publishedAt}</span> */}
            </div>
            <span className="text-sm md:text-xl font-bold hover:text-primary">{title}</span>
            <p className="py-2 md:py-0">Album contains {images?.length} photo(s)</p>
        </div>
        <button onClick={loadSlider} className="relative w-full md:w-[28rem] h-36 bg-white rounded-xl overflow-hidden border-8 border-primary/10 bg-primary/10">
            <Image src={images.length ? urlFor(images[0]).width(640).url() : Bg} alt="" className="object-cover object-center" fill  />
        </button>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images?.map((r:any) => ({ src: r && urlFor(r).width(1024).url() }) )}
        />
        
    </div>
  )
}

export default GalleryBox