'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function Header() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lang: 'ru' | 'tj') => {
    console.log(`Выбран язык: ${lang}`);
    setLanguageMenuOpen(false);
    // здесь можно добавить i18n.changeLanguage(lang)
  };

  return (
    <header className="w-full px-6 py-4 shadow-md bg-white/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        {/* ЛОГО */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition shrink-0">
          <DirectionsCarIcon sx={{ fontSize: '30px' }} />
          <span className="text-2xl font-bold text-gray-800">DriveTime.tj</span>
        </Link>

        {/* МЕНЮ */}
        <ul className="hidden lg:flex gap-6 text-gray-700 text-[16px] font-medium">
          <li><Link href="/">Главная</Link></li>
          <li><Link href="/auto">Автомобили</Link></li>
          <li><Link href="/arenda">Аренда</Link></li>
          <li><Link href="/auto-parts">Запчасти</Link></li> 
          <li><Link href="/service">СТО</Link></li>
        </ul>

        {/* ПОИСК + ИКОНКИ */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative max-w-[300px] w-full">
            <input
              type="text"
              placeholder="Поиск..."
              className="w-full px-4 pl-10 py-2 rounded-full bg-white/20 backdrop-blur text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="relative" ref={langRef}>
            <button onClick={() => setLanguageMenuOpen(!languageMenuOpen)} className="hover:text-blue-500 transition">
              <LanguageIcon />
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border shadow-lg rounded-md z-50">
                <button
                  onClick={() => changeLanguage('ru')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Русский
                </button>
                <button
                  onClick={() => changeLanguage('tj')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Тоҷикӣ
                </button>
              </div>
            )}
          </div>

          <Link href="/wishlist" className="hover:text-blue-500 transition">
            <FavoriteBorderIcon />
          </Link>
          <Link href="/cart" className="hover:text-blue-500 transition">
            <ShoppingCartOutlinedIcon />
          </Link>
          <Link href="/profile" className="hover:text-blue-500 transition">
            <PersonIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}
