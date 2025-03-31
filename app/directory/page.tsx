'use client'

import DirectoryStaffCard from "@/components/DirectoryStaffCard";
import DirectoryWidget from "@/components/DirectoryWidget";
import NoStaffCard from "@/components/NoStaffCard";
import { fetchStaff } from "@/lib/api";
import { useLayoutEffect, useState } from "react";

export default function Page() {

  const loadData = async () => {
    const data = await fetchStaff();
    console.log(data)
    return data;
  }
  
  const [ filter, setFilter ] = useState("")
  const [ recs, setRecs ] = useState([])
  useLayoutEffect(() => {
    loadData().then((dm) => {
      setRecs(dm);
    });
  },[])
  return (
    <main className="pb-20 space-y-10 md:space-y-0">
      <DirectoryWidget data={filter} setData={setFilter} />
      <section className="px-6 md:px-0 mb-10 w-full font-sans">
        <div className="w-full md:mx-auto md:py-10 md:max-w-[68rem] flex flex-col space-y-10">
          <h1 className="px-3 py-1 md:px-6 md:py-2 md:w-1/4 bg-primary text-lg text-white md:rounded-r-full font-bold">OFFICIAL STAFF MEMBERS</h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
             { recs.filter((r:any,i:number) => r?.firstName?.toLowerCase().includes(filter?.toLowerCase()) || r?.lastName?.toLowerCase().includes(filter?.toLowerCase()) || r?.phone?.toLowerCase().includes(filter?.toLowerCase()) || r?.email?.toLowerCase().includes(filter?.toLowerCase())).map((r:any,i:number) => <DirectoryStaffCard key={i} data={r} /> )}
             { recs.filter((r:any,i:number) => r?.firstName?.toLowerCase().includes(filter?.toLowerCase()) || r?.lastName?.toLowerCase().includes(filter?.toLowerCase()) || r?.phone?.toLowerCase().includes(filter?.toLowerCase()) || r?.email?.toLowerCase().includes(filter?.toLowerCase())).length == 0 && (<NoStaffCard />)}
          </div>
        </div>
      </section>
    </main>
  );
}
