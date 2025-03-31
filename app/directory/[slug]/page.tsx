import Noimage from '@/public/bg1.jpg';
import Image from "next/image";
import { FaShareNodes } from 'react-icons/fa6';

export default function Home() {
  return (
    <main className="px-4 py-4 md:py-10 md:px-0 w-full font-sans">
      <section className="w-full md:mx-auto md:max-w-4xl space-y-6">
        <h1 className="p-1 md:px-6 md:py-2 w-full flex items-center justify-between rounded-r-full bg-gradient-to-r from-white to-primary via-white text-lg md:text-2xl font-black text-primary tracking-wider">
          <span>STAFF PROFILE</span>
          <div>
             <button className="p-2 bg-white rounded-full shadow">
                <FaShareNodes className="h-4 w-4 md:h-5 md:w-5" />
             </button>
          </div>
        </h1>
        {/* <div className="p-10 w-full bg-blue-50 space-y-10 border-b-[10px] border-primary shadow-[0px_0px_10px_#ddd_inset] rounded-xl"> */}
        <div className="md:p-10 w-full bg-blue-50 space-y-4 md:space-y-10 border-b-[10px] border-primary">
          <div className="relative h-48 md:h-[28rem] border flex items-center justify-center rounded bg-white">
              <Image src={Noimage} alt="Staff Picture" className="object-cover" fill/>
          </div>
          <div className="px-4 pb-6 text-lg font-medium text-gray-600 space-y-3 md:space-y-6">
            <h2 className="text-xl md:text-2xl text-primary font-bold">Ebenezer Kwabena Blay Ackah</h2>
            <div className="text-justify text-sm md:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit ea aperiam quibusdam aspernatur architecto officia doloremque voluptatem quo fuga, soluta, incidunt consectetur illum optio? Repudiandae quae temporibus qui voluptatum earum error cumque corrupti, esse accusantium ullam, minus modi ipsam, iste unde expedita perspiciatis dolorum! Perferendis obcaecati quidem fuga voluptates!
            </div>
            <div className="py-3 px-6  w-fit font-medium bg-white rounded-lg shadow">
              <div className="font-bold">Senior ICT Assistant</div>
              <div>+233 244 343343</div>
              <div>info@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
