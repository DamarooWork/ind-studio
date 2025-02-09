import Image from 'next/image'
import Link from 'next/link'
import entry from 'public/icons/header/entry.png'
export default function Authentication() {
  return (
    <Link href="/authentication" className="flex gap-4 cursor-pointer  ">
      <p>Вход</p>
      <Image src={entry} alt="entry" />
    </Link>
  )
}
