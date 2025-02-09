'use client'
import useDeviceSize from '@/app/hooks/useDeviceSize'
import Authentication from './Authentication'
import Logo from './Logo'
import Navigation from './Navigation'
import Menu from './Menu'

export default function Index() {
  const [width] = useDeviceSize()
  return (
    <header className="fixed top-0 left-0 w-full p-4 h-[60px] flex justify-between items-center border-b-[1px] border-b-[#E1E1E1] z-50 bg-[--background] ">
      <Logo />
      {width > 640 ? (
        <>
          <Navigation />
          <Authentication />
        </>
      ) : (
        <Menu />
      )}
    </header>
  )
}
