import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='flex gap-4'>
      <Link href={'/'}>О школе</Link>
      <Link href={'/'}>Курсы</Link>
      <Link href={'/'}>Библиотека</Link>
    </nav>
  )
}
