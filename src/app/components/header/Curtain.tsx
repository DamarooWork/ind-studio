'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)
import Image from 'next/image'
import LogoStemps from 'public/icons/header/logo.png'
export default function Curtain() {
  const curtain = useRef<HTMLDivElement>(null)
  const img = useRef<HTMLImageElement>(null)
  const spanText = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      gsap.to(spanText.current, {
        delay: 0.2,
        yPercent: -100,
        duration: 1,
        ease: 'none',
      })
      gsap.to(img.current, {
        delay: 0.2,
        yPercent: -100,
        duration: 1,
        ease: 'none',
      })
      gsap.to(img.current, {
        delay: 1.4,
        duration: 0.4,
        opacity: 0,
      })
      gsap.to(spanText.current, {
        delay: 1.4,
        duration: 0.4,
        opacity: 0,
      })
      gsap.to(curtain.current, {
        delay: 1.8,
        yPercent: -100,
        duration: 0.6,
        ease: 'none',
      })
    },
    { scope: curtain }
  )
  return (
    <div
      ref={curtain}
      className="fixed top-0 left-0 w-full h-full bg-white z-50 flex  gap-4 justify-center items-center"
    >
      <div className="overflow-hidden flex justify-center">
        <Image
          className="block translate-y-[100%]"
          ref={img}
          src={LogoStemps}
          width={40}
          height={40}
          alt="Stemps logo"
        />
      </div>
      <div className="overflow-hidden text-center text-4xl ">
        <span
          ref={spanText}
          className="block translate-y-[100%]  will-change-transform"
        >
          STEMPS
        </span>
      </div>
    </div>
  )
}
