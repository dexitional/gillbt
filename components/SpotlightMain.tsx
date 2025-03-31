import React from 'react'
import Bg1 from '../public/bg1.jpg'
import Bg2 from '../public/bg2.jpg'
import Image from 'next/image'

type Props = {}

function SpotlightMain({}: Props) {
  const data = [
    { image: Bg1 , title: 'SEE HOW ENDING GLOBAL POVERTY BEGINS WITH', subtitle: 'THE ART OF CARING', label: 'READ MORE', link: '#' },
   { image: Bg2 , title: 'LETS LEND A HELPING HAND WITH', subtitle: 'THE ART OF CARING', label: 'DONATE', link: '#' },
   // { image: Bg3 , title: 'TESTIMONIES IN ', subtitle: 'THE ART OF CARING', label: 'READ MORE', link: '#' },
  ];
  const index = Math.floor(Math.random() * data.length);
  const row = data && data[index] 
  
  return (
    <>
    <div className="-z-0 relative h-48 md:h-[32rem] w-full bg-gray-500">
        <Image src={row.image} alt="Bg" className="z-10 object-cover object-center" fill />
        <div className="hidden sm:block absolute left-1/2 top-1/3 text-5xl text-white">
            {/* <div className="z-10 p-10 w-[36rem] rounded-xl border-b-[20px] border-white bg-orange-300 bg-opacity-70 backdrop-blur-xs  font-sans text-2xl">
                <h1 className="text-5xl text-black font-black">{row.title}</h1>
                <h2 className="px-4 py-2 w-fit flex items-center text-5xl font-black bg-green-700 text-white">{row.subtitle}</h2>
                <Link href={row.link} className="my-4 px-6 py-2 w-fit bg-green-700 text-white font-medium flex items-center"><span>{row.label}</span> <MdPlayArrow className="h-10 w-10"/></Link>
            </div> */}
            
        </div>
    </div>
    
    </>
  )
}

export default SpotlightMain