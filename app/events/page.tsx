import { fetchEvents, getPost } from "@/lib/api";
import Image from "next/image";
import Img from '@/public/bread.jpg'
import { FaPeopleGroup } from "react-icons/fa6";
import VisionSection from "@/components/VisionSection";
import PageContentWrapper from "@/components/PageContentWrapper";
import ItemBox from "@/components/ItemBox";
import ShareWidget from "@/components/ShareWidget";
import { toPlainText } from "next-sanity";
import moment from "moment";

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
  const data = await fetchEvents();

  return (
    <main className=" font-sans min-h-[30rem]">
      <section className="px-6 py-2 md:px-0 md:pt-12 md:pb-6 w-full border-b-2 bg-primary bg-header-bg bg-repeat-x">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-2xl md:tracking-wider font-bold text-white capitalize">UPCOMING EVENTS</h1>
        </div>
      </section>
     
      <section className="px-4 md:px-0 my-10 w-full bg-header-bg ">
      <div className="w-full">
          <div className="px-3 py-6 md:py-10 md:px-6 mx-auto md:max-w-6xl font-sans grid grid-cols-1 gap-4 md:gap-10 bg-red-50">
              {/* <ItemTitle title="EXPLORE OUR PROJECTS" /> */}
              { data?.map((r:any,i:number) => (
              <ItemBox
                key={i}
                title={r.title}
                content= {toPlainText(r.body)}
                featureImg={r?.mainImage}
                label="View Event"
                link={r.publishedAt && moment(r.publishedAt).format('MMMM DD, YYYY')}
              />
              ))}

              {/* <div className="py-10 flex items-center justify-center">
                <button className="px-7 py-2.5 bg-primary/70">
                  <span className="text-xl text-white ">Load More ...</span>
                </button>
              </div> */}
             
          </div>
          <ShareWidget />
       </div>
      </section>

    </main>
  );
}
