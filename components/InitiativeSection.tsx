import { fetchInitiatives } from "@/lib/api";
import { urlFor } from "@/sanity";
import Link from "next/link";
import NoImg from "../public/g4A.png";
import ProjectMiniCard from "./ProjectMiniCard";

type Props = {};

async function InitiativeSection({}: Props) {
  const data = await fetchInitiatives();

  return (
    <section className="px-6 md:px-0 w-full">
      <div className="mx-auto py-10 max-w-[68rem] flex flex-col space-y-4">
        <div className="space-y-2">
          <h1 className="text-lg md:text-2xl font-medium flex items-center justify-between">
            <span className="px-3 py-1 md:px-6 md:py-2 bg-primary text-white rounded-r-full">
              Projects & Initiatives
            </span>
            <Link
              href="#"
              className="px-3 py-1 bg-black text-sm text-white font-semibold"
            >
              More
            </Link>
          </h1>
          <p>Wonderful intiatives and projects.</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-10">
          {data?.map((row: any) => {
            return (
              <ProjectMiniCard
                key={row._id}
                title={row.title}
                content={row.body}
                link={`/${row.slug?.current}`}
                image={row?.mainImage ? urlFor(row.mainImage).url() : NoImg}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InitiativeSection;
