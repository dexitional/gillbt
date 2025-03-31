import { fetchImpacts } from "@/lib/api";
import { urlFor } from "@/sanity";
import Link from "next/link";
import NoImg from "../public/logo.png";
import ProjectMiniCard from "./ProjectMiniCard";

type Props = {};

async function ImpactSection({}: Props) {
  const data = await fetchImpacts();

  return (
    <section className="px-6 md:px-0 w-full bg-white font-sans">
      <div className="mx-auto py-6 md:max-w-7xl flex flex-col space-y-4">
        <div className="space-y-2">
          <h1 className="text-lg md:text-2xl font-medium flex items-center justify-between">
            <span className="px-3 py-1 md:px-6 md:py-2 bg-primary text-white rounded-r-full">PUBLICATIONS & PRESS</span>
            <Link href="/publications" className="px-3 py-1 bg-primary text-sm text-white font-bold tracking-wide">More</Link>
          </h1>
          <p>General Publications & Press Releases of the instititution </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
          {data?.map((row: any, i: number) => {
            console.log(row.body);
            return (
              <ProjectMiniCard
                key={i}
                title={row?.title}
                content={row?.body}
                link={`/${row.slug?.current}`}
                image={row?.mainImage ? urlFor(row.mainImage).url() : NoImg}
              />
            );
          })}

          {/* <ProjectMiniCard
            title="The Rolex Datejust: Unmatched Craftsmanship for Everyday Luxury"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum."
            link="/reviews/test1"
            image={P2}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
