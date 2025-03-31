"use client"
import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

type Props = {
    data: string;
    setData: any;
}

function DirectoryWidget({ data, setData }: Props) {
  return (
    <div className="w-full bg-[#0E1A62]">
        <form action="" method="post" className="px-4 py-10 md:py-12 md:mx-auto md:max-w-6xl flex flex-col md:flex-row md:items-center justify-center space-y-4 md:space-y-0 font-sans">
            <div className="w-full md:w-96 text-2xl md:text-4xl font-bold text-white">STAFF DIRECTORY</div>
            <div className="md:flex-1 flex flex-col space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col space-y-1 md:col-span-2">
                       <label htmlFor="" className="text-white text-xs md:text-base tracking-wide">SEARCH FIRST NAME, LAST NAME, PHONE NUMBER</label>
                       <input type="text" className="px-4 py-2 md:px-6 md:py-3" name="search" value={data} onChange={(e) => setData(e.target.value)} placeholder="SEARCH STAFF" />
                    </div>
                   <div className="flex items-end ">
                      <button className="px-6 py-3 w-44 bg-[rgb(250,149,10)] cursor-pointer text-white flex items-center space-x-2 justify-center">
                        <span className="font-bold text-lg">SEARCH</span>
                        <MdDoubleArrow className="h-7 w-7" />
                      </button>
                    </div>
                    
                </div>
            </div>
        </form>
    </div>
  )
}

export default DirectoryWidget