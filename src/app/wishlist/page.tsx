'use client'

import { useWishlistStore } from '@/store/wishlist/wishlist'

export default function WishlistPage() {
  const items = useWishlistStore((state) => state.items)

  const cars = items.filter((i) => i.category === 'car')
  const rentas = items.filter((i) => i.category === 'renta')
  const parts = items.filter((i) => i.category === 'part')

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Мой Wishlist</h1>

      <Section title="Машины" items={cars} emptyMessage="Пока нет добавленных машин." />
      <Section title="Аренда" items={rentas} emptyMessage="Пока нет добавленных автомобилей для аренды." />
      <Section title="Запчасти" items={parts} emptyMessage="Пока нет добавленных запчастей." />
    </div>
  )
}

function Section({
  title,
  items,
  emptyMessage,
}: {
  title: string
  items: { id: number; title: string; image?: string; price?: number }[]
  emptyMessage: string
}) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-300 pb-2">{title}</h2>
      {items.length === 0 ? (
        <p className="text-gray-500 italic">{emptyMessage}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  )
}

function ListItem({ item }: { item: { id: number; title: string; image?: string; price?: number } }) {
  return (
    <li
      className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      tabIndex={0}
      role="button"
      aria-label={item.title}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-full sm:w-28 h-28 object-cover rounded-md flex-shrink-0"
          loading="lazy"
          draggable={false}
        />
      ) : (
        <div className="w-full sm:w-28 h-28 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 flex-shrink-0 select-none">
          Нет изображения
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 truncate">{item.title}</h3>
        {item.price !== undefined && (
          <span className="mt-2 text-indigo-600 font-bold text-lg">
            {item.price.toLocaleString()} сомони
          </span>
        )}
      </div>
    </li>
  )
}
