'use client'
import useDeviceSize from '@/app/hooks/useDeviceSize'

export default function Index() {
  const [width] = useDeviceSize()
  return (
    <header className="px-4 w-full text-[40px] text-[#A59DFF]">
      <section className="w-full flex   items-center border-b-[1px] border-b-[#E1E1E1]">
        <p className={`w-[20vw]`}>1.0</p>
        {width > 640 ? <p>Наши услуги</p> : null}
      </section>
      {width < 640 ? <p>Наши услуги</p> : null}
    </header>
  )
}
