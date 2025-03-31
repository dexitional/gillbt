import MapSection from "@/components/MapSection";
import PageContentWrapper from "@/components/PageContentWrapper";
import ShareWidget from "@/components/ShareWidget";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* PageTitleCover */}
       <PageContentWrapper>
          <h2>HOW TO REACH US</h2>
          <h3>Our institution is located in Esiama, Ghana. We train middle-level nurses and midwives to strengthen Ghana&apos;s healthcare workforce, improving and maintaining health for all, both locally and beyond.</h3>
          <p>Our institution provides quality training, hands-on experience, and a supportive learning environment to prepare you for a rewarding career in healthcare. Join us as we empower future healthcare leaders to make a difference in communities across Ghana and beyond!</p>
          <p>Feel free to reach out with any inquiries — we are happy to assist you, email us at <a>chntsesiama@gmail.com</a> or Call us at Phone: <a>031-209-2320</a></p>
          
          <hr/>
          <div className="py-6 md:mx-auto md:w-4/5 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm md:text-lg">
            <div className="flex flex-col space-y-1 md:space-y-6">
              <h4 className="text-base md:text-xl font-bold">MAILING ADDRESS</h4>
              <p>
                Nursing and Midwifery Training College, Esiama<br/>
                P.O.Box 7, Esiama W/R<br/>
                Ghana - West Africa
              </p>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-6">
              <h4 className="text-base md:text-xl font-bold">CONTACT US BY PHONE</h4>
              <p>
                Tel: &nbsp;+233 (31) 209-2320 <br />
                Fax: +233 (31) 209-2320
              </p>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-6">
              <h4 className="text-base md:text-xl font-bold">CONTACT US BY EMAIL</h4>
              <p>
                General Inquiries
                chntsesiama@gmail.com <br />

                Donor inquiries 
                chntsesiama@gmail.com
              </p>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-6">
              <h4 className="text-base md:text-xl font-bold">MEDIA REQUESTS</h4>
              <p>
                Ernest<br/>
                Web & Communications <br />
                {/* (277) 767-0000 <br /> */}
                media.nmtce@gmail.com
              </p>
            </div>
          </div>
       </PageContentWrapper>
       <MapSection />
       <ShareWidget />
    </main>
  );
}
