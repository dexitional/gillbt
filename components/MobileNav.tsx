"use client"
import { HomeIcon, MenuIcon, SquareMenu } from 'lucide-react';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { FaHamburger } from 'react-icons/fa';
import Logo from "../public/logo.gif";
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

type Props = {
  data: any;
}

function MobileNav({ data }: Props) {
  return (
    <Menu as="div" className="z-20 font-sans">
      <div className="px-2 py-1 md:hidden block min-h-4 bg-primary/20 text-center">
         <span className="text-[0.7rem] font-bold text-gray-600 tracking-wider">GHANA INSTITUTE OF LINGUISTICS, LITERACY & BIBLE TRANSLATION</span>
      </div>
      <div className="px-4 py-2 min-h-14 md:hidden flex items-center justify-between border-b-8 border-primary/50">
        {/* Hamberger button */}
        <Link href="/">
          <div className="p-2 rounded-full bg-primary/80 hover:bg-primary"><HomeIcon  className="text-white h-5 w-5"/></div>
        </Link>
        {/* Logo */}  
        <div className="relative h-10 w-32 border-primary">
          <Image src={Logo} alt="NMTC-Esiama" className="object-contain object-center" fill/>
        </div>
        {/* Menu */}
        <MenuButton className="p-2 rounded-full bg-primary/80 hover:bg-primary"><MenuIcon  className="text-white h-5 w-5"/></MenuButton>
      </div>
      <MenuItems anchor="bottom"  as="div" className="relative p-6 pt-10 w-full font-sans bg-white/95 border-b-4 border-primary/50 min-h-48 left-0 flex flex-col space-y-4">
        { data?.map((r:any,i:number) => {
          if(r?.subMenu.length)
          return (
            <div className="space-y-0.5" key={i}>
            <span className="text-lg font-bold text-primary">{r.label}</span>
            <ul className="flex flex-col space-y-1">
              { r?.subMenu?.map((s:any) => (
                <MenuItem key={i} as={Fragment}>
                  {({ focus }) => (
                    <a href={s.link} className="text-base font-medium cursor-pointer indent-4"> {s.label}</a>
                  )}  
                </MenuItem> ))
              }
            </ul>
            </div> 
          )

          return (
            <MenuItem key={i} as={Fragment}>
              {({ focus }) => (
                <a href={r.link} className={`text-lg font-bold cursor-pointer ${focus ? 'text-red-400':'text-green-400'}`}>{r.label}</a>
              )}  
            </MenuItem>
          )}
        )}
      </MenuItems>
    </Menu>
  )
}

/*


  <div className="font-sans rounded-none">
                        <ul className="py-3 w-62 font-medium text-base">
                        { r?.subMenu?.map((s:any) => (
                          <MenuItem>
                            <a key={s?.label} href={s.link} className="px-4 py-2 w-full hover:text-primary text-[#0E1A62]">{s?.label}</a>
                          </MenuItem>
                        ))}
                        </ul>
                    </div>



*/

export default MobileNav