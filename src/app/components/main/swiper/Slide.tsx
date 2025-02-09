import Image from 'next/image'
export default function Slide(slide: ISlide) {
  return (
    <section className="flex flex-col justify-between h-[256px]  p-4 bg-[#F0F0F0] rounded-lg ">
      <Image src={slide.img.src} alt={slide.img.alt} />
      <p className="text-3xl">{slide.title}</p>
    </section>
  )
}
