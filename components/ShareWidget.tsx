import { cn } from '@/lib/utils';
import React from 'react'
import { FaFacebookF, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { IoIosMail } from "react-icons/io";

type Props = {
    className?: string;
}

function ShareWidget({ className }: Props) {
  return (
    <div className={cn(`w-full bg-white shadow-[0px_-2px_4px_#000cc]`,className)}>
        <div className="px-4 py-4 md:mx-auto md:max-w-6xl flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 md:space-y-0 font-sans">
            <p className="uppercase text-sm">Share This Page:</p>
            <div className="flex items-center space-x-2">
                <button className="p-1.5 rounded-full bg-primary/70">
                    <FaFacebookF className="text-white h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full bg-primary/70">
                    <FaXTwitter className="text-white h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full bg-primary/70">
                    <FaWhatsapp className="text-white h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full bg-primary/70">
                    <IoIosMail className="text-white h-4 w-4" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ShareWidget