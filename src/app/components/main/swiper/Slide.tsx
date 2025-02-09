import useDeviceSize from '@/app/hooks/useDeviceSize'
import Image from 'next/image'
export default function Slide(slide: ISlide) {
  const [width] = useDeviceSize()
  return (
    <section className="slide flex flex-col justify-between h-[256px]  p-4 bg-[#F0F0F0] rounded-lg mb-2">
      {width > 640 ? (
        <>
          <Image src={slide.img.src} alt={slide.img.alt} />
          <p className="text-3xl">{slide.title}</p>
        </>
      ) : (
        <div className="flex gap-4 items-center">
          <Image src={slide.img.src} alt={slide.img.alt} />
          <p className="text-3xl">{slide.title}</p>
        </div>
      )}

      {width < 640 ? <p className="text-sm">{slide.about}</p> : null}
    </section>
  )
}
