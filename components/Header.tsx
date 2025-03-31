import LogoMain from "./LogoMain";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

function Header() {
  const navigations = [
    {
      label: "About Us",
      link: "",
      subMenu: [
        { label: "What We Do", link: "/what-we-do" },
        { label: "History", link: "/history" },
        { label: "Vision", link: "/vision" },
        { label: "Mission", link: "/mission" },
        { label: "Leadership", link: "/leadership" },   
        { label: "Facilities", link: "/facilities" },                     
        
        //   { label: "Legends & Hall of Fame", link: "/legends" },
      ],
    },
    {
      label: "Projects and Programs",
      link: "",
      subMenu: [
        { label: "⁠Literacy", link: "/literacy" },
        { label: "⁠Translations", link: "/translations" },
        { label: "Others", link: "/others  " },
        
      ],
    },
    {
      label: "Resources and Library",
      link: "",
      subMenu: [
        // { label: "Public Health Department", link: "/public-health" },
        // { label: "Midwifery Department", link: "/midwifery" },
        // { label: "General Nursing Department", link: "/nursing" },
        { label: "Periodic Reports", link: "/reports" },
        { label: "Bible Translations", link: "/bible_translations" },
        { label: "Literacy Materials", link: "/literacy_materials" },
      ],
    },

    {
      label: "Media & Press",
      link: "",
      subMenu: [
        { label: "Publications", link: "/news" },
        { label: "Upcoming Events", link: "/upcoming_events" },
        { label: "Workshops and Training", link: "/workshops_training" },
        { label: "Gallery", link: "/gallery" },
       
      ],
    },
    {
      label: "Get Involved",
      link: "",
      subMenu: [
        { label: "Volunteering", link: "/volunteering" },
        { label: " Partners", link: "/partners" },
        { label: "Impact Stories", link: "/impact_stories" },
        // { label: "Gallery", link: "/gallery" },
        //{ label: 'Journals', link: '#' },
      ],
    },
    {
      label: "Directory",
      link: "/directory",
      subMenu: []
    },
  ];

  return (
    <header className="z-20 sm:sticky sm:top-0 bg-white w-full shadow-[0px_10px_10px_rgba(0,0,0,0.1)] font-sans">
      {/* Top Nav Bar */}
      <div className="hidden sm:block w-full bg-[rgb(167,185,215)]">
        <div className="px-6 md:mx-auto w-full h-10 sm:max-w-7xl font-medium text-primary text-sm flex items-center justify-between">
          <span className="font-black tracking-widest text-base">GHANA INSTITUTE OF LINGUISTICS, LITERACY & BIBLE TRANSLATION</span>
          <div className="space-x-4 divide divide-x-2">
            <span>(050) 1329465</span>
            <span className="pl-3">communication_gillbt@gillbt.org</span>
          </div>
        </div>
      </div>
      {/* Menu Bar */}
      <div className="w-full">
        <div className="px-6 hidden mx-auto w-full sm:h-[7rem] sm:max-w-7xl sm:flex items-center justify-between ">
          <LogoMain />
          <MainNav data={navigations} />
        </div>
      </div>
      <MobileNav data={navigations} />
    </header>
  );
}

export default Header;
