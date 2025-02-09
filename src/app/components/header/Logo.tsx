'use client'
import Image from 'next/image'
import Link from 'next/link'
import LogoStemps from 'public/icons/header/logo.png'
export default function Logo() {
  return (
    <Link href={'/'} className="flex gap-3 items-center w-[20vw] ">
      <Image src={LogoStemps} width={28} height={28} alt="Stemps logo" />
      <p>STEMPS</p>
    </Link>
  )
}
