import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

type Props = {
    title: string;
    description: string;
    link: string;
}

function ProgramCard({ title, description, link}: Props) {
  return (
    <div className="p-6 w-full min-h-48 space-y-3 md:space-y-6 bg-[#f5f2eb] shadow-xl rounded-lg">
        <h2 className="text-lg md:text-[1.4rem] font-black text-primary">{ title }</h2>
        <p className="font-medium">{description}</p>
        <Link href={link} className="flex items-center space-x-3 font-black">
           <span className="text-sm tracking-wide text-primary">LEARN MORE</span>
           <FaArrowRight className="h-4 w-4 text-primary" />
        </Link>
    </div>
  )
}

export default ProgramCard