'use client'
import useDeviceSize from '@/app/hooks/useDeviceSize'
import Image from 'next/image'
import Link from 'next/link'
import LogoStemps from 'public/icons/header/logo.png'
export default function Logo() {
  const [width]= useDeviceSize()
  return (
    <Link href={'/'} className="flex gap-3 items-center w-[20vw] ">
      <Image src={LogoStemps} width={28} height={28} alt="Stemps logo" />
      {width > 640 ? <p>STEMPS</p> : null}
    </Link>
  )
}
