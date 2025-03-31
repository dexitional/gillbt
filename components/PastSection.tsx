import Image from 'next/image'
import React from 'react'
import { FaPeopleGroup } from 'react-icons/fa6'
import PastCard from './PastCard'

type Props = {}

const data = [
  {
    name:"Ebenezer Kwabena Blay Ackah",
    description: "Principal, 1927 - 1995",
  },
  {
    name:"Ernest Gyamodie",
    description: "Principal, 1927 - 1995",
  },
  {
    name:"Joseph Ayesu",
    description: "Principal, 1927 - 1995",
  },
]

function PastSection({}: Props) {
  return (
    <section className="px-6 md:px-0 w-full">
    <div className="mx-auto py-4 md:pb-10 md:px-10 w-full md:max-w-[68rem] flex flex-col space-y-4">
        <div className="p-6 grid md:grid-cols-3 gap-y-4 md:gap-y-6 md:gap-x-10 divide-y md:divide-y-0 bg-blue-50 border-x-8 border-[rgb(167,185,215)]">
            { data.map((r,i) => <PastCard key={i}/> )}
      
        </div>
    </div>
  </section> 
  )
}

export default PastSection