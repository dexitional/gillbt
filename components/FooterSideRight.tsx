import React from 'react'
import LogoFoot from './LogoFoot'

type Props = {}

function FooterSideRight({}: Props) {
  return (
    <div className="sm:px-10 min-h-20 sm:min-h-20 sm:min-w-[25rem]">
        <div className="flex flex-col md:space-y-10 items-center">
            <LogoFoot />
            <p className="text-primary font-bold">GILLBT works in 40 different languages in Ghana working primarily in Translation, Literacy, Scripture Engagement and Linquistics</p>
        </div>
        <div></div>
    </div>
  )
}

export default FooterSideRight