'use client'
import Link from 'next/link'
import { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 py-4 shadow-md bg-white-200/30 backdrop-blur sticky top-0 z-50">

        <nav className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
          
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition shrink-0">
            <ToysOutlinedIcon sx={{ fontSize: '30px' }} />
            <span className="text-2xl font-bold text-gray-800">Logo</span>
          </Link>

       
          <div className="flex-1 mx-4 max-w-[600px] w-full relative hidden sm:flex">
            <input
              type="text"
              placeholder="Поиск..."
              className="w-full px-4 pl-10 py-2 rounded-full bg-white/20 backdrop-blur text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

      
          <div className="flex gap-4 items-center text-gray-700 shrink-0">
            <Link href="/" className="hover:text-blue-500 transition">
              <LanguageIcon />
            </Link>
            <Link href="/" className="hover:text-blue-500 transition">
              <FavoriteBorderIcon />
            </Link>
            <Link href="/" className="hover:text-blue-500 transition">
              <ShoppingCartOutlinedIcon />
            </Link>
            <Link href="/" className="hover:text-blue-500 transition">
              <PersonIcon />
            </Link>
            <button onClick={() => setMenuOpen(true)} className="hover:text-blue-500 transition">
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-xl font-bold text-gray-800">Меню</span>
          <button onClick={() => setMenuOpen(false)} className="hover:text-red-500">
            <CloseIcon />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-gray-800 text-[16px] font-medium">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Главная</Link></li>
          <li><Link href="/auto" onClick={() => setMenuOpen(false)}>Автомобили</Link></li>
          <li><Link href="/arenda" onClick={() => setMenuOpen(false)}>Аренда</Link></li>
          <li><Link href="/auto-parts" onClick={() => setMenuOpen(false)}>Запчасти</Link></li>
          <li><Link href="/sto" onClick={() => setMenuOpen(false)}>СТО</Link></li>
          <li><Link href="/info" onClick={() => setMenuOpen(false)}>Информация</Link></li>
        </ul>
      </div>
    </>
  );
} 