import { deleteContent, getPage, getPost } from "@/lib/api";
import Image from "next/image";
import Img from '@/public/bread.jpg'
import { FaPeopleGroup } from "react-icons/fa6";
import VisionSection from "@/components/VisionSection";
import PageContentWrapper from "@/components/PageContentWrapper";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity";

const { STRAPI_APP_URL } = process.env;

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3600;
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
  const sp = await searchParams;
  const data = await getPage(slug);
  const del = await deleteContent();
  console.log(del)

  return (
    <main className="font-sans min-h-[30rem]">
      <section className="px-6 py-2 md:px-0 md:pt-6 md:pb-6 w-full border-b-2 bg-primary bg-header-bg bg-repeat-x">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-2xl md:tracking-wider font-bold text-white uppercase">{data?.title}</h1>
        </div>
      </section>
      { data?.mainImage && 
      <section className="w-full bg-gradient-to-r from-white from-20% via-50% to-80% via-primary/60 to-white ">
        <div className="relative mx-auto px-4 py-4 md:py-4 md:max-w-6xl flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
          <div className="relative h-16 md:h-96 rounded-lg overflow-hidden shadow bg-white">
            <Image src={data?.mainImage ? urlFor(data?.mainImage).width(683).url() : Img} alt="Banner" className="object-cover object-left-top" fill />
          </div>
        </div>
      </section>
      }
      <PageContentWrapper  className="px-4 md:px-0 w-full bg-header-bg">
        {<PortableText value={data?.body} />}
      </PageContentWrapper>
      {/* {['history',''].includes(slug) && <VisionSection /> } */}
    </main>
  );
}
