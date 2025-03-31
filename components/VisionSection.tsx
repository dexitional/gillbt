import React from 'react'
import { FaPeopleGroup } from 'react-icons/fa6'

type Props = {}

function VisionSection({}: Props) {
  return (
    <section className="px-6 md:px-0 w-full">
    <div className="mx-auto py-4 md:pb-10 md:px-10 w-full md:max-w-6xl flex flex-col space-y-4">
        <div className="p-6 grid md:grid-cols-2 gap-y-4 md:gap-y-6 md:gap-x-10 divide-y md:divide-y-0 bg-blue-50 border-l-8 border-[rgb(167,185,215)] rounded-r-xl md:rounded-r-2xl">
            <div className="flex space-x-6 items-start">
              <FaPeopleGroup className="h-10 w-10 md:h-16 md:w-16 shrink-0 text-primary/40"/>
              <div className="space-y-3">
                <h1 className="text-xl font-bold text-primary/80">Our Mission</h1>
                <p className="font-medium text-sm md:text-base">Our work is grounded in our commitment to the universality of human rights. We uphold and advocate for the implementation of international human rights instruments.</p>
              </div>
            </div>
            <div className="flex space-x-6 items-start">
              <FaPeopleGroup className="h-10 w-10 md:h-16 md:w-16 shrink-0 text-primary/40"/>
              <div className="space-y-3">
                <h1 className="text-xl font-bold text-primary/80">Our Vision</h1>
                <p className="font-medium text-sm md:text-base">Our work is grounded in our commitment to the universality of human rights. We uphold and advocate for the implementation of international human rights instruments.</p>
              </div>
            </div>
            <div className="flex space-x-6 items-start">
              <FaPeopleGroup className="h-10 w-10 md:h-16 md:w-16 shrink-0 text-primary/40"/>
              <div className="space-y-3">
                <h1 className="text-xl font-bold text-primary/80">Our Values</h1>
                <p className="font-medium text-sm md:text-base">Our work is grounded in our commitment to the universality of human rights. We uphold and advocate for the implementation of international human rights instruments.</p>
              </div>
            </div>
        </div>
    </div>
  </section> 
  )
}

export default VisionSection