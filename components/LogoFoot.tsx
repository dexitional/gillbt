import React from 'react'
import Logo from '../public/logo.gif'
import Image from 'next/image'

type Props = {}

function LogoFoot({}: Props) {
  return (
    <div className="relative h-44 w-44">
        <Image src={Logo} alt="" className="object-contain object-center" fill />
    </div>
  )
}

export default LogoFoot