'use client'
import Link from 'next/link'

const categories = [
  {
    title: 'Автосалон',
    description: 'Широкий выбор проверенных подержанных автомобилей с гарантией качества.',
    icon: 'https://img.icons8.com/ios-filled/100/car--v1.png',
    href: '/auto',
  },
  {
    title: 'Аренда авто',
    description: 'Гибкие условия аренды с водителем и без, для любых ваших нужд.',
    icon: 'https://img.icons8.com/ios-filled/100/key--v1.png',
    href: '/renta',
  },
  {
    title: 'СТО',
    description: 'Профессиональный ремонт и обслуживание вашего автомобиля на высшем уровне.',
    icon: 'https://img.icons8.com/ios-filled/100/maintenance.png',
    href: '/service',
  },
  {
    title: 'auto-parts',
    description: 'Оригинальные и аналоговые запчасти для любых марок автомобилей.',
    icon: 'https://img.icons8.com/ios-filled/100/engine.png',
    href: '/parts',
  },
]

export default function CategoryCards() {
  return (
    <section className="py-15">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={cat.href}
            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 text-center block hover:scale-[1.02]"
          >
            <img
              src={cat.icon}
              alt={cat.title}
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h3>
            <p className="text-sm text-gray-600">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
