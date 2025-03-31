import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata, ResolvingMetadata } from "next";
import { Dancing_Script, Inter, Satisfy } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: "400",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});
const tstar = localFont({
  src: [
    {
      path: "../public/fonts/TStarProRegular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/TStarProMedium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/TStarProLight.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/TStarProBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/TStarProHeavy.ttf",
      weight: "900",
    },
  ],
  variable: "--font-tstar",
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  //const id = params.id
  //const previousImages = (await parent).openGraph?.images || []

  // const settings:any = fetchSettings();
  // {`settings?.attributes?.siteName}
  // settings?.attributes?.siteDescription

  return {
    title: "Gillbt.org",
    description: "GHANA INSTITUTE OF LINGUISTICS, LITERACY & BIBLE TRANSLATION",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satisfy.variable} ${dancing.variable} ${inter.variable} ${tstar.variable} min-h-screen flex flex-col items-end justify-between`}>
        <Header />
        <main className="w-full h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
