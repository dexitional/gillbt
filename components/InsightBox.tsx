import React from 'react'

type Props = {
    data: any;
}

function InsightBox({ data }: Props) {
  return (
    <div className='flex flex-col sm:space-y-6 items-center font-sans text-center'>
        <h2 className='w-2/3 text-xl sm:text-2xl font-black text-primary'>{data?.title}</h2>
        <p className='text-base sm:text-lg font-medium text-justify'>{data?.content}</p>
    </div>
  )
}

export default InsightBox