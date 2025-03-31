import ArticleHeader from "@/components/ArticleHeader";
import PageContentWrapper from "@/components/PageContentWrapper";
import ShareWidget from "@/components/ShareWidget";
import Image from "next/image";
import Img from '@/public/bread.jpg'
import { getPost } from "@/lib/api";
import { urlFor } from "@/sanity";
import { PortableText } from "next-sanity";
import moment from "moment";

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
  const data = await getPost(slug);


  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* <PageTitleCover title="Our Story" subtitle="Building the best collaboration" /> */}
       <ArticleHeader 
          title={data?.title}
          publishedAt={data._createdAt && moment(data._createdAt).format("MMMM DD, YYYY")}
       />
       <section className="w-full bg-gradient-to-r from-white from-20% via-50% to-80% via-primary/60 to-white ">
        <div className="relative mx-auto px-4 py-4 md:py-6 md:max-w-6xl flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
          <div className="relative h-16 md:h-96 rounded-lg overflow-hidden shadow">
            <Image src={data?.mainImage ? urlFor(data.mainImage).width(683).url() : Img} alt="" className="object-cover" fill/>
          </div>
        </div>
      </section>
      <PageContentWrapper>
        {<PortableText value={data.body} />}
      </PageContentWrapper>
       <ShareWidget />
       

    </main>
  );
}
