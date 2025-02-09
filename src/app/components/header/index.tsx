import Authentication from './Authentication'
import Logo from './Logo'
import Navigation from './Navigation'

export default function Index() {
  return (
    <header className="sticky top-0 left-0 w-full p-4 h-[60px] flex justify-between items-center border-b-[1px] border-b-[#E1E1E1]">
      <Logo />
      <Navigation />
      <Authentication />
    </header>
  )
}
