import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

function PageContentWrapper({ children, className }: Props) {
  return (
    <div className={cn(`w-full`,className ? className: 'bg-white' )}>
        <div className={`
           px-4 py-6 md:py-10 md:mx-auto md:max-w-6xl font-sans text-base md:text-[1.2rem] leading-7 md:leading-8 font-medium 
           [&]:space-y-4 md:[&]:space-y-8
           [&_h1]:text-[1.4rem] md:[&_h1]:text-[2.4rem] [&_h1]:text-primary [&_h1]:font-black
           [&_h2]:text-[1.0rem] md:[&_h2]:text-[1.8rem] [&_h2]:text-primary [&_h2]:font-black
           [&_h3]:text-[1rem] md:[&_h3]:text-[1.55rem] [&_h3]:text-gray-600 [&_h3]:font-medium
           [&_blockquote]:px-6 [&_blockquote]:py-2 [&_blockquote]:border-l-[5px] [&_blockquote]:border-primary/60
           [&_a]:text-primary [&_a]:underline
           [&_br]:block] [&_br]:py-10]

        `}>
           {children}
        </div>
    </div>
  )
}

export default PageContentWrapper