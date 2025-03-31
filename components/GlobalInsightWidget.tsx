import InsightBox from './InsightBox'

type Props = {}

function GlobalInsightWidget({}: Props) {
  
  const pills = [
     { title: 'OUR VISION', content:'To contribute to the country’s health manpower through the training of middle level cadre of nurses and midwives so as to improve and maintain the health status of all people living in Ghana and beyond.' },
     { title: 'OUR MISSION', content:'Training well-motivated and intelligent nurses and midwives to improve health awareness and ensure access to quality healthcare and related interventions in every Ghanaian household and community.' },
     { title: 'OUR CORE VALUES', content:'Faith, Excellence, Service, and Integrity are guiding values that foster trust, growth, and ethical success. Together, they create a foundation for innovation, strong relationships, and positive impact.' },
     //{ title: 'OUR PROGRAMS', content:'Pursuing a College Diploma or Certificate at NMTC-Esiama is not just about earning a credential—it\'s about transforming yourself into a more knowledgeable, skilled, and confident professional prepared to make a meaningful impact in your field. ' },
  ]
  return (
    <div className="w-full bg-blue-50/50 font-sans border-t-8 border-[#0E1A62]">
        <div className="py-6 md:py-6 md:pt-6 md:pb-14 px-4 md:px-10 md:mx-auto md:max-w-7xl flex flex-col space-y-6 md:space-y-12 justify-center items-center">
            <h2 className="md:w-1/2 text-xl md:text-[2.2rem] text-center font-black leading-tight"> <br/><span className="px-4 md:px-10 pt-4 pb-2 -skew-x-6 bg-primary text-white">WHO WE ARE</span></h2>
            <p className='w-[90%] text-lg  md:text-[1.4rem] font-medium text-center leading-relaxed line-clamp-3'>
            GILLBT’s commitment to linguistics, literacy, and Bible translation has made it a pillar of education and faith in Ghana. By ensuring that every Ghanaian can read, learn, and worship in their own language, the organization is not just preserving culture—it is transforming lives.
            </p>
            <div className='mt-16 mb-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8'>
              { pills?.map(r => <InsightBox key={r.title} data={r} />)}
            </div>
        </div>
    </div>
  )
}

export default GlobalInsightWidget