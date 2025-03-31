import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Noimage from '@/public/no_img.webp'
import { urlFor } from '@/sanity'

type Props = {
    data: any;
}

function DirectoryStaffCard({ data }: Props) {
  return (
    <div className="shadow-xl px-4 pb-6 border border-primary font-sans rounded-xl flex flex-col space-y-6">
        <div className="h-56 md:w-full w-3/4 mx-auto rounded-b-full rounded-t-[4px] bg-primary flex items-center justify-center shadow-[0px_0px_10px_rgb(2,49,153)_inset]">
            <div className="p-2 h-40 w-40 bg-white  rounded-full border-8 ring-8 ring-blue-300/50 flex items-center justiy-center overflow-hidden">
              <Image src={data.profileImage ? urlFor(data.profileImage)?.height(320).url() : Noimage } alt="" className="h-36 w-36 object-cover object-center" width={100} height={100} />
            </div>
        </div>
        <div>
            <h2 className="font-bold"><span className="capitalize">{data.firstName?.toLowerCase()}</span> <span className="capitalize">{data.lastName?.toLowerCase()}</span></h2>
            <p className="text-base font-medium text-primary">{data.position}</p>
            <p className="text-sm">{data.phone}</p>
            <p className="text-sm italic">{data.email}</p>
            <div className="mt-6 mb-1 font-bold text-primary">
            { data.profileLink &&
              <Link href={data.profileLink}>View Profile</Link>
            }
            </div>
        </div>
    </div>
  )
}

export default DirectoryStaffCard