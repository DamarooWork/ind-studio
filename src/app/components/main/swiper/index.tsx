import Pagination from './Pagination'
import Slide from './Slide'

export default function Index() {
  return (
    <section className="flex flex-col gap-2">
      <Slide />
      <Pagination />
    </section>
  )
}
