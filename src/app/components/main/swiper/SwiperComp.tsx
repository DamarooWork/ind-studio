'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from './Slide'
import 'swiper/css/pagination'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
export default function SwiperComp({ data }: { data: ISlide[] }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + '</span>'
    },
  }
  return (
    <>
      <Swiper
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
          },
        }}
        speed={1500}
        spaceBetween={16}
        grabCursor={true}
        pagination={pagination}
        modules={[Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {data.length ? (
          data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slide {...slide} />
            </SwiperSlide>
          ))
        ) : (
          <p>Нет услуг</p>
        )}
      </Swiper>
    </>
  )
}
