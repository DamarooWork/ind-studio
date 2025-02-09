import { useRef, useState } from 'react'
import Navigation from './Navigation'
import Authentication from './Authentication'
import { useClickOutside } from '@/app/hooks/useClickOutside'
export default function Menu() {
  const ref = useRef<HTMLElement>(null)
  const [showMenu, setShowMenu] = useState(false)
  useClickOutside(ref, () => setShowMenu(false))
  return (
    <section ref={ref} className="relative duration-200">
      {showMenu ? (
        <section className="fixed flex flex-col  items-end  w-[100vw] h-[30vh]  bg-[--foreground] top-0 right-0 p-4 z-40  ">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="bg-[--foreground] w-[59px] h-[28px] text-[--background] rounded-[4px] z-50 mb-4"
          >
            <p>Закрыть</p>
          </button>
          <Navigation />
          <Authentication />
        </section>
      ) : null}
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="bg-[--foreground] w-[59px] h-[28px] text-[--background] rounded-[4px] z-50"
      >
        <p> Меню</p>
      </button>
    </section>
  )
}
