import React from 'react'
import Logo from '../public/logo.png'

type Props = {}

function LogoMobile({}: Props) {
  return (
    <div className="flex space-x-3">
        <img src={Logo.src} alt="" className="relative h-12 "/>
        {/* <div className="pt-0 flex flex-col ">
            <div className="flex flex-col -space-y-1.5 font-sans font-black tracking-wider">
                <span className="text-lg text-[#44841B] tracking-[0.25em]">ADEHYE</span>
                <span className="text-[0.45rem] tracking-widest text-[#44841B]">CHARITY ORGANIZATION</span>
            </div>
            <span className="text-[0.48rem] text-[#fa981c] font-sans font-bold  tracking-wider">** the Art of Caring **</span>
        </div> */}
    </div>
  )
}

export default LogoMobile