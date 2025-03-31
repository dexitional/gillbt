import React from 'react'

type Props = {}

function FooterBottom({}: Props) {
  return (
    <div className="w-full bg-[#0E1A62]">
        <div className="px-5 py-6 sm:mx-auto w-full sm:h-16 sm:max-w-5xl text-white font-sans text-sm flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
            {/* <span>National Accredication No. BN245170323</span> */}
            <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-10 font-medium text-sm underline">
                <div>Privacy Policy</div>
                <div>Accessibility</div>
                {/* <div>Powered By Ackah Blay</div> */}
            </nav>
            <span>© {new Date().getFullYear()} GILLBT</span>
        </div>
    </div>
  )
}

export default FooterBottom