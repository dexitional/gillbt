import { getPage, getPost } from "@/lib/api";
import Image from "next/image";
import Img from '@/public/bread.jpg'
import { FaFacebookF, FaInstagram, FaLinkedin, FaPeopleGroup, FaXTwitter, FaYoutube } from "react-icons/fa6";
import VisionSection from "@/components/VisionSection";
import Link from "next/link";
import MessageSection from "@/components/MessageSection";
import PastSection from "@/components/PastSection";
import BoardSection from "@/components/BoardSection";
import PageContentWrapper from "@/components/PageContentWrapper";
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
  const data = await getPage('board');
  return (
    <main className="font-sans min-h-[30rem]">
      <section className="px-6 py-2 md:px-0 md:pt-12 md:pb-6 w-full border-b-2 bg-primary bg-header-bg bg-repeat-x">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-2xl md:tracking-wider font-bold text-white capitalize">Board Members</h1>
        </div>
      </section>
      <section className="px-4 md:px-0 w-full bg-header-bg">
        <div className="mx-auto py-4 md:py-10 md:max-w-5xl flex flex-col space-y-4 text-sm md:text-lg text-justify font-medium text-gray-600">
          <PageContentWrapper  className="px-4 md:px-0 w-full bg-header-bg">
          {<PortableText value={data.body} />}
        </PageContentWrapper>
        </div>
      </section>
      <BoardSection />
    </main>
  );
}
