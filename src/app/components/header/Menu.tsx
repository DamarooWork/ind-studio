import { useRef, useState } from 'react'
import Navigation from './Navigation'
import Authentication from './Authentication'
import { useClickOutside } from '@/app/hooks/useClickOutside'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)
export default function Menu() {
  const ref = useRef<HTMLElement>(null)
  const modal = useRef<HTMLElement>(null)
  const menuBtn = useRef<HTMLButtonElement>(null)
  const [showMenu, setShowMenu] = useState(false)
  useClickOutside(ref, () => handleMenuToggle(false))
  function handleMenuToggle(open: boolean) {
    if (open) {
      if (showMenu) return
      gsap.to(menuBtn.current, {
        opacity: 0,
        duration: 1,
      })
      gsap.fromTo(
        modal.current,
        {
          display: 'none',
          opacity: 0,
        },
        {
          opacity: 1,
          display: 'flex',
          duration: 1,
          ease: 'power1.inOut',
        }
      )
    } else {
      if (!showMenu) return
      gsap.to(menuBtn.current, {
        opacity: 1,
        duration: 1,
      })
      gsap.fromTo(
        modal.current,
        {
          display: 'flex',
          opacity: 1,
        },
        {
          opacity: 0,
          display: 'none',
          duration: 1,
          ease: 'power1.inOut',
        }
      )
    }
    setShowMenu(open)
  }
  return (
    <section ref={ref} className="relative duration-200">
      <section
        ref={modal}
        className="fixed hidden flex-col  items-end  w-[100vw]  bg-[--foreground] top-0 right-0 p-4 z-40  rounded-b-xl"
      >
        <button
          onClick={() => handleMenuToggle(false)}
          className="bg-[--foreground] w-[59px] h-[28px] text-[--background] rounded-[4px] z-50 mb-4"
        >
          <p>Закрыть</p>
        </button>
        <Navigation />
        <Authentication />
      </section>

      <button
        ref={menuBtn}
        onClick={() => handleMenuToggle(true)}
        className="bg-[--foreground] w-[59px] h-[28px] text-[--background] rounded-[4px] "
      >
        <p> Меню</p>
      </button>
    </section>
  )
}
