'use server'

import SwiperComp from './SwiperComp'
import analysis from 'public/icons/header/services/analysis.png'
import cover from 'public/icons/header/services/cover.png'
import preparing from 'public/icons/header/services/preparing.png'
import recomendations from 'public/icons/header/services/recomendations.png'
import searchWork from 'public/icons/header/services/searchWork.png'
import training from 'public/icons/header/services/training.png'

const data: ISlide[] = [
  {
    id: 1,
    title: 'Анализ текущего состояния карьеры',
    about: 'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
    img: {
      src: analysis,
      alt: 'Вспомогательное лого',
    },
  },
  {
    id: 2,
    title: 'Поиск работы',
    about: 'Определим вашу карьерную цель и разработаем стратегию для трудоустройства.',
    img: {
      src: cover,
      alt: 'Вспомогательное лого',
    },
  },
  {
    id: 3,
    title: 'Сопроводительные письма и резюме',
    about: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
    img: {
      src: preparing,
      alt: 'Вспомогательное лого',
    },
  },
  {
    id: 4,
    title: 'Тренинг по презентации личного бренда',
    about: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.',
    img: {
      src: recomendations,
      alt: 'Вспомогательное лого',
    },
  },
  {
    id: 5,
    title: 'Подготовка к собеседованию',
    about: 'Научим говорить о себе кратко, ярко и профессионально.',
    img: {
      src: searchWork,
      alt: 'Вспомогательное лого',
    },
  },
  {
    id: 6,
    title: 'Рекомендация по базе STEMPS Career',
    about: 'Поможем встретиться соискателю и работодателю.',
    img: {
      src: training,
      alt: 'Вспомогательное лого',
    },
  },
]
export default async function Index() {
  return (
    <section className=" p-4">
      <SwiperComp data={data} />
    </section>
  )
}
