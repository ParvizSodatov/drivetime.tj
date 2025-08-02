'use client'
import Image from 'next/image'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CarCard from '@/components/carCard/carCard'
import PartCard from '@/components/partsCard/partCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link'
import Parts from '@/components/parts/parts'
import { useCarsStore } from '@/store/pages/cars/cars'
import { useEffect } from 'react'
import { Box, Skeleton } from '@mui/material'
import { useRentaStore } from '@/store/pages/renta/renta'
import RentaCard from '@/components/rentaCard/rentaCard'
import { usePartsStore } from '@/store/pages/autoparts/autoparts'
import { Car, Wrench, CarFront, Cog } from 'lucide-react';
import { Button } from '@mui/material';
import CategoryCards from '@/components/categoryCards/categoryCards';
import ScrollReveal from './../../components/ScrollReveal/ScrollReveal';


export default function Home() {
  const { cars, getCars } = useCarsStore()
  const { renta, getRenta } = useRentaStore();
  const { parts, getParts } = usePartsStore();

  useEffect(() => {
    getCars();
    getRenta();
    getParts();
  }, []);

  return (
    <div className='max-w-[1520px] mx-auto'>
      {/* Hero Section */}
   <section 
  className="relative overflow-hidden"
  style={{
    height: "622px",
    marginBottom: '30px',
    color: 'white',
  }}
>
  {/* Видеофон */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full object-cover"
    style={{ height: 'calc(100% - 82px)', bottom: '0' }}
  >
    <source src="/backvideo.mp4" type="video/mp4" />
    Ваш браузер не поддерживает видеофон.
  </video>

  {/* Затемнение поверх видео */}
  <div
    className="absolute inset-0 bg-black/50"
    style={{ height: 'calc(100% - 82px)' }}
  ></div>

  {/* Контент поверх видео */}
  <div className="relative z-10 h-full flex items-center">
    <div className="hidden lg:block lg:w-1/2"></div>

    <div className="w-full lg:w-1/2 flex flex-col justify-center mt-[-100px] items-end  pr-30 pl-8 text-right">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Совершенство <br />на каждой дороге
      </h1>
      <p className="text-lg md:text-xl max-w-lg mb-8">
        Откройте для себя лучшие автомобильные решения для любых потребностей
      </p>
      <div className="flex flex-wrap gap-4 justify-end">
        <Link href={'/auto'}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-all">
          Подобрать авто
        </button>
        </Link>
        <button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-md border border-white transition-all">
          Наш сервис
        </button>
      </div>
    </div>
  </div>
</section>


<ScrollReveal>

      <CategoryCards/>
</ScrollReveal>

      {/* Автомобили */}
    <ScrollReveal>
  <div
    className="relative w-[90%] mx-auto mt-20 mb-10 rounded-[24px] overflow-hidden"
    style={{ height: '380px' }}
  >
    {/* Видеофон */}
    <video
      src="/autosales.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ objectPosition: 'center 87%' }}
    />

    {/* Затемнение */}
    <div className="absolute inset-0 bg-black/30 z-10" />

    {/* Контент поверх */}
    <div className="relative z-20 h-full flex items-center justify-end">
      <div className="text-white text-right pr-20">
        <h1
          className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
          style={{
            textShadow: '0 4px 10px rgba(0, 0, 0, 0.6)', // красивая глубокая тень
          }}
        >
          Автомобили<br />в наличии
        </h1>
        <Link href="/auto">
          <button className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-full font-semibold transition-all">
            Все авто
          </button>
        </Link>
      </div>
    </div>
  </div>
</ScrollReveal>


{/* Список автомобилей */}
  <section className="flex justify-center">
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
      {(cars.length ? cars : Array(4).fill(null)).map((car, index) => (
        <ScrollReveal key={car?.id || index} delay={index * 0.1}>
          {car ? (
            <Link href={`/home/${car.id}`}>
              <Box sx={{ width: "325px", boxSizing: "border-box" }}>
                <CarCard car={car} />
              </Box>
            </Link>
          ) : (
            <Skeleton
              variant="rectangular"
              width={325}
              height={300}
              sx={{ borderRadius: 2 }}
            />
          )}
        </ScrollReveal>
      ))}
    </Box>
  </section>


      {/* Аренда */}
      <section className="w-full px-4 pt-[30px] mt-15">

  <ScrollReveal>
    <div
      className="relative w-[92%] mx-auto mb-10 rounded-[24px] overflow-hidden"
      style={{ height: '380px' }}
    >
      {/* Видеофон */}
      <video
        src="/renta.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 87%' }}
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Контент поверх */}
      <div className="relative z-20 h-full flex items-center justify-end">
        <div className="text-white text-right pr-20">
          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{
              textShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
            }}
          >
            Доступные машины <br /> для аренды
          </h1>
          <Link href="/arenda">
            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-full font-semibold transition-all">
              Все аренды
            </button>
          </Link>
        </div>
      </div>
    </div>
  </ScrollReveal>

  <section className="flex justify-center">
    <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      {(renta.length ? renta.slice(0, 4) : Array(4).fill(null)).map((auto, index) => (
        <ScrollReveal key={auto?.id || index} delay={index * 0.1}>
          {auto ? (
            <Box sx={{ width: '325px', boxSizing: 'border-box' }}>
              <RentaCard auto={auto} />
            </Box>
          ) : (
            <Skeleton variant="rectangular" width={325} height={300} sx={{ borderRadius: 2 }} />
          )}
        </ScrollReveal>
      ))}
    </Box>
  </section>
</section>


      {/* Запчасти */}
      <section className="w-full px-4 pt-[30px] mb-20 mt-15">

  <ScrollReveal>
    <div
      className="relative w-[92%] mx-auto mb-10 rounded-[24px] overflow-hidden"
      style={{ height: '380px' }}
    >
      {/* Видеофон */}
      <video
        src="/parts.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 87%' }}
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Контент поверх */}
      <div className="relative z-20 h-full flex items-center justify-start">
        <div className="text-white text-left pl-20">
          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{
              textShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
            }}
          >
            Качественныезапчасти <br /> для вашего авто
          </h1>
          <Link href="/sto">
            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-full font-semibold transition-all">
              Все запчасти
            </button>
          </Link>
        </div>
      </div>
    </div>
  </ScrollReveal>

  <section className="flex flex-wrap gap-2 w-full justify-center p-4">
    {(parts.length ? parts.slice(0, 4) : Array(4).fill(null)).map((part, index) => (
      <ScrollReveal key={part?.id || index} delay={index * 0.1}>
        {part ? (
          <PartCard part={part} />
        ) : (
          <Skeleton variant="rectangular" width={300} height={180} sx={{ borderRadius: 2 }} />
        )}
      </ScrollReveal>
    ))}
  </section>
</section>

    </div>
  );
}
