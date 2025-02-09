import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex flex-col max-sm:items-end max-sm:text-[--background] sm:flex-row max-sm:text-2xl sm:gap-4  sm:flex-1">
      <Link href="/about">О школе</Link>
      <Link href="/courses">Курсы</Link>
      <Link href="/library">Библиотека</Link>
    </nav>
  )
}
