import useDeviceSize from '@/app/hooks/useDeviceSize'
import Image from 'next/image'
import Link from 'next/link'
import entry from 'public/icons/header/entry.png'
export default function Authentication() {
  const [width] = useDeviceSize()
  return (
    <Link
      href="/authentication"
      className="flex max-sm:items-end  gap-4 cursor-pointer max-sm:text-[--background] "
    >
      <p className="max-sm:text-2xl">Вход</p>
      {width > 640 ? <Image src={entry} alt="entry" /> : null}
    </Link>
  )
}
