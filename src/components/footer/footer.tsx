import React from 'react'

type FooterLink = {
  label: string
  href: string
}

const footerLinks: FooterLink[] = [
  { label: 'Главная', href: '/' },
  { label: 'Авто', href: '/auto' },
  { label: 'Запчасти', href: '/auto-parts' },
  { label: 'Политика конфиденциальности', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-[70px]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">DriveTime.tj</h2>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Все права защищены.</p>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
