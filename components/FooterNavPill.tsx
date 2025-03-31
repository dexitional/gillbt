import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    content: any;
}

function FooterNavPill({ title, content }: Props) {
  return (
    <div className="space-y-3 md:space-y-6">
        <h2 className="text-sm tracking-wider font-medium">{title}</h2>
        <nav className="flex flex-col space-y-2 md:space-y-4">
            { content.map((r:any) => (<Link key={r.link} href={r.link} className="">{r.label}</Link>))}
        </nav>
    </div> 
  )
}

export default FooterNavPill