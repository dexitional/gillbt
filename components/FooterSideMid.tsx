import Link from 'next/link'
import { MdPlayArrow } from 'react-icons/md'


type Props = {}

function FooterSideMid({}: Props) {
  return (
    <div className="pb-4 sm:sb-10 sm:pb-0 sm:px-10 sm:min-h-80 sm:min-w-[27rem] flex flex-col justify-start space-y-6 border-b-4 sm:border-b-0 sm:border-r-4 border-dashed border-white">
        <div className="flex flex-col justify-start space-y-1 sm:space-y-6">
            <Link href="" className="flex items-center space-x-1 ">
                <span className="text-sm md:text-lg font-bold underline">Our Mission, Vision and Values</span>
                <MdPlayArrow className="h-6 w-6"/>
            </Link>
            <Link href="" className="flex items-center space-x-1 ">
                <span className="text-sm md:text-lg font-bold underline">Discover Our Ongoing Projects</span>
                <MdPlayArrow className="h-6 w-6"/>
            </Link>
            <Link href="" className="flex items-center space-x-1 ">
                <span className="text-sm md:text-lg font-bold underline">Know What We Do </span>
                <MdPlayArrow className="h-6 w-6"/>
            </Link>
           <Link href="" className="flex items-center space-x-1 ">
                <span className="text-sm md:text-lg font-bold underline">Our Periodic Reports</span>
                <MdPlayArrow className="h-6 w-6"/>
            </Link> 
            <Link href="" className="flex items-center space-x-1 ">
                <span className="text-sm md:text-lg font-bold underline">Get Involved</span>
                <MdPlayArrow className="h-6 w-6"/>
            </Link>
                                         
        </div>
        <div className="px-6 py-3 w-56 bg-[rgb(250,149,10)] flex items-center justify-center space-x-2">
            <span className="text-white text-lg font-bold tracking-wider">Support Us</span>
            <MdPlayArrow className="h-5 w-5 text-white"/>
        </div>
    </div>
  )
}       

export default FooterSideMid