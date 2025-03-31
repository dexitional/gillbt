import Link from 'next/link';
import React from 'react'

type Props = {
   category?: string;
   categoryImage?: React.ReactNode;
   categoryLink?: string;
   title?: string;
   content?: string;
   link?: string;
}

function MiniDealCard({ category,categoryImage,categoryLink,title,content,link}: Props) {
  return (
    <div className="p-2 flex flex-col space-y-3 rounded  bg-white border border-primary/50 ">
        <div className="flex space-x-3">
            <div className="space-y-3">
              <div className="shrink-0 h-16 w-16 rounded bg-slate-100"></div>
              <Link href={link || '#'} className="px-4  bg-amber-400 border border-black text-black font-medium text-xs  inline-block">
                <span>View</span>
              </Link>
            </div>
            <div className="space-y-2">
              <h2 className="font-medium text-sm">{category}</h2>
              <div className="space-y-3">
                <p className="text-[0.8rem] line-clamp-3">{content}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MiniDealCard