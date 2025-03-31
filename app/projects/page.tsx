import { fetchProjects, getPost } from "@/lib/api";
import Image from "next/image";
import Img from '@/public/bread.jpg'
import { FaPeopleGroup } from "react-icons/fa6";
import VisionSection from "@/components/VisionSection";
import PageContentWrapper from "@/components/PageContentWrapper";
import ItemBox from "@/components/ItemBox";
import ShareWidget from "@/components/ShareWidget";
import { toPlainText } from "next-sanity";

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
  const sp = await searchParams;
  const data = await fetchProjects();

  return (
    <main className=" font-sans min-h-[30rem]">
      <section className="px-6 py-2 md:px-0 md:pt-12 md:pb-6 w-full border-b-2 bg-primary bg-header-bg bg-repeat-x">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-2xl md:tracking-wider font-bold text-white capitalize">FACILITIES & PROJECTS</h1>
        </div>
      </section>
     
      <section className="px-4 md:px-0 mb-10 w-full bg-header-bg ">
      {/* <PageContentWrapper>
          <h3>LONG-TERM SOLUTIONS FOR A MORE EQUAL WORLD</h3>
          <p>We work with local partners to come up with long-lasting, far-reaching solutions that enable people in poverty, especially women and girls, to provide for themselves, their families and communities in a sustainable way — because food security, safety, education, and earning a decent living are rights, not privileges.</p>
       </PageContentWrapper> */}
       
       <div className="w-full">
          <div className="px-3 py-6 md:py-10 md:px-6 mx-auto md:max-w-6xl font-sans grid grid-cols-1 gap-4 md:gap-10 bg-red-50">
              {/* <ItemTitle title="EXPLORE OUR PROJECTS" /> */}
              
             { data?.map((r:any,i:number) => (
              <ItemBox
                title={r.title}
                content= {toPlainText(r.summary)}
                featureImg={r.mainImage}
                label="Learn More"
                link={''}
              />
              ))}

          </div>
          <ShareWidget />
       </div>
      </section>

    </main>
  );
}
