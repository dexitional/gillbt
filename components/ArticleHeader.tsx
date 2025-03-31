import React from 'react'

type Props = {
    title: string;
    publishedAt: string
}

function ArticleHeader({ title, publishedAt }: Props) {
  return (
    <div className="w-full bg-[rgb(239,246,255)]">
       <div className="px-4 md:pb-10 md:pt-14 pb-6 pt-10 md:mx-auto md:max-w-6xl font-sans flex flex-col items-center justify-center space-y-4">
        <h1 className="text-lg md:text-3xl text-gray-700 font-bold text-center leading-snug">{title}</h1>
        <p className="text-sm md:text-base">{publishedAt}</p>     
       </div>
    </div>
  )
}

export default ArticleHeader