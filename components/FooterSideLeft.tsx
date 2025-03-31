import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

type Props = {}

function FooterSideLeft({}: Props) {
  return (
    <div className="pb-4 sm:pb-0 sm:pr-3 sm:min-h-48 sm:min-w-[23rem] flex flex-col space-y-3 sm:space-y-6 sm:border-r-4 border-b-4 sm:border-b-0 border-dashed border-white">
        <div className="space-y-1 md:space-y-3">
            <h1 className="text-lg sm:text-[1.3rem] leading-5 sm:leading-6 font-bold text-primary md:text-black text-justify">Ghana Institute of Linguistics, Literacy & Bible Translation</h1>
            <div className="sm:divide-y-2 divide-dashed">
                <p className="sm:pb-3 text-base sm:text-base leading-5 sm:leading-5 font-medium">Accra Office, Plot 71/72 Adjiringanor, Box OS-3063,Osu-Accra-Ghana, Trasacco Valley Road, East Legon     </p>
                <p className="sm:pt-3 text-base sm:text-base leading-5 sm:leading-5 font-medium">Tamale Office, New Karaga Rd., Kanvilli (near School of Hygiene), P.O.Box 378, Tamale     </p>
            </div>
        </div>
        <div className="flex items-center justify-start space-x-4">
            <div className="p-3 h-fit w-fit bg-primary rounded-full">
                <FaInstagram className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-primary rounded-full">
                <FaFacebookF className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-primary rounded-full">
                <FaXTwitter className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-primary rounded-full">
                <FaYoutube className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
        </div>
        <div className="flex flex-col space-y-1 md:space-y-1">
            <Link href="mailto:chntsesiama@gmail.com" className="flex items-center space-x-2">
                <MdEmail className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="underline">communication_gillbt@gillbt.org</span>
            </Link>
            <Link href="mailto:chntsesiama@gmail.com" className="flex items-center space-x-2">
                <MdEmail className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="underline">admin_gillbt@gillbt.org</span>
            </Link>
            <Link href="tel:0312092320" className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="underline">(050) 1329 465 / (037) 2099 031 </span>
            </Link>
        </div>
    </div>
  )
}

export default FooterSideLeft


/*

Contact Us
Accra Office,Plot 71/72 Adjiringanor, Box OS-3063,Osu-Accra-Ghana, Trasacco Valley Road, East Legon
Tel: 050 1329 465
e: communication_gillbt@gillbt.org

Tamale Office, New Karaga Rd., Kanvilli (near School of Hygiene), P.O.Box 378, Tamale
Tel.(03720) 99 031
e: admin_gillbt@gillbt.org


*/