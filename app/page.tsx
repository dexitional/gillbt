import GlobalInsightWidget from "@/components/GlobalInsightWidget";
import ImpactSection from "@/components/ImpactSection";
import MapSection from "@/components/MapSection";
import MessageWidget from "@/components/MessageWidget";
import NewsLetterWidget from "@/components/NewsLetterWidget";
import NewsWidget from "@/components/NewsWidget";
import ProgramSection from "@/components/ProgramSection";
import SpotlightMain from "@/components/SpotlightMain";

export default function Home() {
  return (
    <main className="z-1 p-0 w-full flex flex-col items-start justify-start bg-red-50">
      <SpotlightMain />
      <GlobalInsightWidget />
      <MessageWidget />
      <ProgramSection />
      <ImpactSection />
      <NewsWidget />
      {/* TakeAction widget */}
      {/* <TakeActionWidget /> */}
      {/* NewsLetter */}
      <MapSection />
      {/* <NewsLetterWidget /> */}
    </main>
  );
}
