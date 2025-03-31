import React from 'react'
import { FaPeopleGroup, FaQuoteLeft } from 'react-icons/fa6'

type Props = {
  data: any;
}

function MessageSection({ data }: Props) {
  return (
    <section className="px-6 md:px-0 w-full">
    <div className="mx-auto py-4 md:px-10 w-full md:max-w-[68rem] flex flex-col space-y-4">
        <div className="p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 border-l-8 border-[rgb(167,185,215)] rounded-r-xl md:rounded-r-2xl">
            <div className="flex space-x-6 items-start">
              <FaQuoteLeft className="h-10 w-10 md:h-16 md:w-16 shrink-0 text-primary/40"/>
              <div className="space-y-3">
                <h1 className="text-xl font-bold text-primary/80">Principals Message</h1>
                <p className="font-medium text-sm md:text-lg italic"></p>
              </div>
            </div>
           
        </div>
    </div>
  </section> 
  )
}

export default MessageSection