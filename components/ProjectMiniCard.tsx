import { urlFor } from "@/sanity";
import { toPlainText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image?: any;
  title?: string;
  content?: any;
  link?: string;
};

function ProjectMiniCard({ title, content, link, image }: Props) {
  return (
    <div className="flex flex-col space-y-3">
      {/* <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-slate-100"></div>
            <span>{category}</span>
        </div> */}
      <div className="relative h-36">
        <Image
          height={100}
          width={100}
          alt={title || ""}
          src={image && urlFor(image).url()}
          className="mx-auto md:m-0 w-full h-36 bg-white border border-slate-200 rounded object-cover object-left-top"
        />
      </div>

      <div className="space-y-3">
        <Link href={link || "#"}>
          <h2 className="text-base font-medium">{title}</h2>
        </Link>
        <p className="text-sm line-clamp-4">
          {content ? toPlainText(content) : ""}
        </p>
        <Link
          href={link || "#"}
          className="px-4 border border-black text-sm inline-block"
        >
          <span>Explore </span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectMiniCard;
