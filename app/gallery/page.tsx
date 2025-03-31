import GalleryBox from "@/components/GalleryBox";
import ShareWidget from "@/components/ShareWidget";
import { fetchGalleries } from "@/lib/api";
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
  const data: any = await fetchGalleries();

  return (
    <main className=" font-sans min-h-[30rem]">
      <section className="px-6 py-2.5 md:px-0 md:pt-12 md:pb-6 w-full border-b-2 bg-primary bg-header-bg bg-repeat-x">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-base md:text-2xl md:tracking-wider font-bold text-white capitalize">
            GALLERIES
          </h1>
        </div>
      </section>
      {/* <section className="w-full bg-gradient-to-r from-white from-20% via-50% to-80% via-primary/60 to-white ">
        <div className="relative mx-auto px-4 py-4 md:py-4 md:max-w-5xl flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
          <div className="relative h-16 md:h-48 rounded-lg overflow-hidden shadow">
            <Image src={Img} alt="" className="object-cover" fill/>
          </div>
        </div>
      </section> */}
      <section className="px-4 md:px-0 mb-10 w-full bg-header-bg">
        <div className="mx-auto py-4 md:py-10 md:max-w-5xl flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
          <div className="w-full bg-[rgb(239,246,255)]">
            <div className="px-4 py-6 md:mx-auto md:max-w-6xl font-sans grid grid-cols-1 gap-10 rounded-xl">
              {data
               // ?.filter((r: any) => r.showGallery)
                ?.map((r: any, i: number) => (
                  <GalleryBox
                    key={i}
                    title={r.title}
                    images={r.images}
                    link={`#`}
                    category="Gallery"
                    categoryLink="#"
                    publishedAt={
                      r._createdAt &&
                      moment(r._createdAt).format("MMMM DD, YYYY")
                    }
                  />
                ))}
            </div>
          </div>
          <ShareWidget />
        </div>
      </section>
    </main>
  );
}
