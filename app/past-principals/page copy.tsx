import ReviewPageCard from "@/components/ReviewPageCard";
import { getPost } from "@/lib/api";
import NoImg from "@/public/g4A.png";
import { urlFor } from "@/sanity";
import { PortableText } from "next-sanity";

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
  const data = await getPost(slug);

  return (
    <main className="">
      <section className="px-6 py-2 md:px-0 md:pt-6 w-full border-b-2 bg-gradient-to-r from-primary/20 via-white to-primary/30">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center min-h-32 md:h-36 space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-2xl font-inter font-semibold md:tracking-loose text-primary">{data.title}</h1>
          <p className="font-satisfy md:text-xl text-green-800">{data.categories[0]?.title}</p>
        </div>
      </section>
      <section className="px-4 md:px-0 mb-10 w-full">
        <div className="mx-auto py-4 md:py-10 md:max-w-[68rem] flex flex-col space-y-4">
          <ReviewPageCard
            image={
              data?.mainImage
                ? urlFor(data.mainImage).width(683).url()
                : NoImg
            }
            title={data.title}
          >
            {<PortableText value={data.body} />}
          </ReviewPageCard>
        </div>
      </section>

      {/* <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 md:max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2 border-b border-black">
            <h1 className="md:text-xl font-medium flex items-center justify-between">
              <span className="">Most Recent Publications</span>
              <button className="px-2 md:px-3 py-1 bg-black text-xs md:text-sm text-white font-semibold">
                More
              </button>
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            reviewcard
          </div>
        </div>
      </section> */}
    </main>
  );
}
