import { getPage, getPost, getPrincipal } from "@/lib/api";
import Image from "next/image";
import Img from '@/public/bread.jpg'
import { FaFacebookF, FaInstagram, FaLinkedin, FaPeopleGroup, FaXTwitter, FaYoutube } from "react-icons/fa6";
import VisionSection from "@/components/VisionSection";
import Link from "next/link";
import MessageSection from "@/components/MessageSection";
import PageContentWrapper from "@/components/PageContentWrapper";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity";

const { STRAPI_APP_URL } = process.env;

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 360;
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const { slug } = await params;
  const data = await getPrincipal();
  const sub = await getPage('principal');

  return (
    <main className="font-sans min-h-[30rem]">
      <section className="px-6 py-2 md:px-0 md:pt-12 md:pb-6 w-full border-b-2 bg-primary bg-header-bg bg-repeat-x">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-2xl md:tracking-wider font-bold text-white capitalize">The Principal</h1>
        </div>
      </section>
      <MessageSection data={sub} />
      <main className="mx-auto px-4 py-4 pb-10 md:py-20 md:max-w-5xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 items-start">
          <div className="relative h-48 w-full md:h-72 md:w-2/5 rounded-lg overflow-hidden">
            <Image src={data?.profileImage ? urlFor(data?.profileImage).width(683).url() : Img} alt="" className="object-contain object-left-top" fill/>
          </div>
          <section className="flex-1 space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl text-primary font-bold"><span className="capitalize">{data?.firstName?.toLowerCase()}</span> <span className="capitalize">{data?.lastName?.toLowerCase()}</span></h2>
              <h3 className="md:text-xl font-medium">Principal</h3>
            </div>
            <div className="flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
                <PageContentWrapper>
                  {<PortableText value={data?.profile} />}
                </PageContentWrapper>
             </div>

             { ( data?.linkedinUrl || data?.facebookUrl || data?.twitterUrl || data?.youtubeUrl ) && 
             <div className="p-2 md:px-6 md:py-3 w-fit flex items-center place-self-center md:place-self-start md:justify-start space-x-4 rounded-full shadow shadow-primary ">
                  { data?.linkedinUrl && 
                  <Link href={data?.linkedinUrl} className="p-1.5 h-fit w-fit bg-primary rounded-full">
                      <FaLinkedin className="h-3 w-3 sm:h-4 sm:w-4 text-white"/>
                  </Link>
                  }
                 { data?.facebookUrl && 
                 <Link href={data?.facebookUrl} className="p-1.5 h-fit w-fit bg-primary rounded-full">
                      <FaFacebookF className="h-3 w-3 sm:h-4 sm:w-4 text-white"/>
                  </Link>
                 }
                 { data?.twitterUrl && 
                  <Link href={data?.twitterUrl} className="p-1.5 h-fit w-fit bg-primary rounded-full">
                      <FaXTwitter className="h-3 w-3 sm:h-4 sm:w-4 text-white"/>
                  </Link>
                 }
                 { data?.youtubeUrl && 
                  <Link href={data?.youtubeUrl} className="p-1.5 h-fit w-fit bg-primary rounded-full">
                      <FaYoutube className="h-3 w-3 sm:h-4 sm:w-4 text-white"/>
                  </Link>
                  }
              </div>
            }
          </section>
      </main>
    </main>
  );
}
