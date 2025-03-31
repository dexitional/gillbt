import { fetchTopPublications } from "@/lib/api";
import { urlFor } from "@/sanity";
import Link from "next/link";
import NoImg from "../public/g4A.png";
import ReviewCard from "./ReviewCard";

type Props = {};

async function TopPublicationSection({}: Props) {
  const data = await fetchTopPublications();

  return (
    <section className="px-6 md:px-0 w-full">
      <div className="mx-auto py-6 max-w-[68rem] flex flex-col space-y-4">
        <div className="space-y-2">
          <h1 className="text-lg md:text-2xl font-medium flex items-center justify-between">
            <span className="px-3 py-1 md:px-6 md:py-2 bg-primary text-white rounded-r-full">
              Top Publications{" "}
            </span>
            <Link
              href="/reviews"
              className="px-3 py-1 bg-black text-sm text-white font-semibold"
            >
              Goto Blog
            </Link>
          </h1>
          <p>Well reviewed articles for potential gardeners and farmers.</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
          {data?.map((row: any) => {
            return (
              <ReviewCard
                key={row?._id}
                category={row?.categories[0].title}
                categoryImage=""
                categoryLink={`/${row?.categories[0].slug}`}
                title={row?.title}
                content={row?.body}
                link={`/${row.slug?.current}`}
                ImageSrc={row?.mainImage ? urlFor(row.mainImage).url() : NoImg}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TopPublicationSection;
