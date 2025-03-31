import React from 'react'

type Props = {}

function MapSection({}: Props) {
  return (
    <section className="w-full flex flex-col justify-center bg-white border-t-[12px] ">
        <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5667796084826!2d-0.8410345882320066!3d9.459331590581114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43ea8988e0ed7%3A0xe6dedcf382ecda12!2sGILLBT%20guest%20house%20%26%20Conference%20center!5e0!3m2!1sen!2sgh!4v1743334862427!5m2!1sen!2sgh" 
           className="w-full h-64 md:h-96 border-0" 
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </section>
  )
}

export default MapSection
