import Image from 'next/image'
import React from 'react'
import { ImPriceTag } from "react-icons/im";
import FeaturedImage1 from '../public/bg1.jpg'
import FeaturedImage2 from '../public/bg2.jpg'
import FeaturedImage3 from '../public/bg4.jpeg'
import NewsBox from './NewsBox';
type Props = {}

function NewsWidget({}: Props) {
  
  const data = [
    { 
        title: 'Website Development',
        excerpt: 'We developed a website for a leading Ghanaian university, resulting in a 50% increase in online engagement and a 20% increase in applications',
        image: FeaturedImage1,
        link: '#',
        category: 'TESTIMONIALS',
        date:'June 21, 2024',
        author: 'ADMIN'
    },
    { 
        title: '⁠University Management Development',
        excerpt: 'We helped a Ghanaian university to streamline its administrative processes, resulting in a 30% reduction in costs and a 25% improvement in student satisfaction.',
        image: FeaturedImage2,
        link: '#',
        category: 'TESTIMONIALS',
        date:'June 21, 2024',
        author: 'ADMIN'
    },
    { 
        title: 'Study Abroad Support',
        excerpt: 'We guide student from Ghana to study in the Finland, Canada and other nations resulting in a successful visa application and a smooth transition to university life.',
        image: FeaturedImage3,
        link: '#',
        category: 'TESTIMONIALS',
        date:'June 21, 2024',
        author: 'ADMIN'
    },
    { 
        title: 'Study Abroad Support',
        excerpt: 'We guide student from Ghana to study in the Finland, Canada and other nations resulting in a successful visa application and a smooth transition to university life.',
        image: FeaturedImage3,
        link: '#',
        category: 'TESTIMONIALS',
        date:'June 21, 2024',
        author: 'ADMIN'
    }
  ]

  return (
    <div className="w-full font-sans">
        <div className="pt-10 px-4 md:px-1 md:mx-auto md:max-w-7xl grid grid-cols-1 md:grid-cols-4 md:gap-10">
          <div className="text-xl sm:text-2xl font-bold flex flex-col space-y-1">
              <h1 className="px-3 py-1 md:px-6 md:py-2 bg-primary text-white rounded-r-full">UPCOMING EVENTS</h1>
          </div>
        </div>
        <div className="py-14 px-4 md:px-1 md:mx-auto md:max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
           { data.map((r,i) => (<NewsBox key={i} data={r} />))}
        </div>
    </div>
  )
}

export default NewsWidget