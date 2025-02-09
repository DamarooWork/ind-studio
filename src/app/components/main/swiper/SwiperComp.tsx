'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from './Slide'
import useDeviceSize from '@/app/hooks/useDeviceSize'

export default function SwiperComp({ data }: { data: ISlide[] }) {
  const [width] = useDeviceSize()
  const slidesPerView = () => {
    if (width > 640) {
      return Math.floor((window.innerWidth - 32) / 428)
    }
    return Math.floor((window.innerWidth - 32) / 358)
  }

  return (
    <>
      <Swiper className="" slidesPerView={slidesPerView()} grabCursor={true}>
        {data.length ? (
          data.map((slide) => (
            <SwiperSlide
              style={
                width > 640 ? { maxWidth: '412px' } : { maxWidth: '358px' }
              }
              key={slide.id}
            >
              <Slide {...slide} />
            </SwiperSlide>
          ))
        ) : (
          <p>Нет данных</p>
        )}
      </Swiper>
    </>
  )
}
