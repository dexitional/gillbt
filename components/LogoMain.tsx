import React from 'react'
import Logo from '../public/logo.gif'
import Link from 'next/link'

type Props = {}

function LogoMain({}: Props) {
  return (
    <Link href="/" className="flex flex-col -space-y-4 items-center justify-center">
        <img src={Logo.src} alt="" className="relative h-24 "/>
    </Link>
  )
}

export default LogoMain