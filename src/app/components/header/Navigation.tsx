import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex gap-4  flex-1">
      <Link href="/about">О школе</Link>
      <Link href="/courses">Курсы</Link>
      <Link href="/library">Библиотека</Link>
    </nav>
  )
}
