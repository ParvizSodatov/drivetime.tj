'use client'
import Image from 'next/image'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
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
      <section className="relative overflow-hidden" style={{ height: "622px", marginBottom: '30px', color: 'white' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full object-cover transition-all duration-500 ease-in-out"
          style={{ height: 'calc(100% - 82px)', bottom: '0' }}
        >
          <source src="/backvideo.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className="absolute inset-0 bg-black/50" style={{ height: 'calc(100% - 82px)' }}></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="hidden lg:block lg:w-1/2"></div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center mt-[-100px] items-end pr-30 pl-8 text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-500">
              Совершенство <br />на каждой <span className='text-blue-600'>дороге</span>
            </h1>
            <p className="text-lg md:text-xl max-w-lg mb-8 transition-all duration-500">
              Откройте для себя лучшие автомобильные решения для любых потребностей
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Link href={'/auto'}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                  Подобрать авто
                </button>
              </Link>
              <button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-md border border-white transition-all duration-300 ease-in-out transform hover:scale-105">
                Наш сервис
              </button>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <CategoryCards />
      </ScrollReveal>

      {/* Автомобили */}
      <ScrollReveal>
        <div className="relative w-[90%] mx-auto mt-20 mb-10 rounded-[24px] overflow-hidden" style={{ height: '380px' }}>
          <video
            src="/autosales.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            style={{ objectPosition: 'center 87%' }}
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 h-full flex items-center justify-end">
            <div className="text-white text-right pr-10 sm:pr-16 lg:pr-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-white" style={{ textShadow: '0 6px 24px rgba(0, 0, 0, 0.8)' }}>
                <span>Автомобили</span><br />
                <span className="text-[#ad5a2a]">в наличии</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium max-w-xl mb-6 text-white/90">Выгодные цены и большой выбор — для города, семьи и отдыха.</p>
              <Link href="/auto">
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm">
                  Смотреть авто
                </button>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <section className="flex justify-center">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {(cars.length ? cars : Array(4).fill(null)).map((car, index) => (
            <ScrollReveal key={car?.id || index} delay={index * 0.1}>
              {car ? (
                <Link href={`/home/${car.id}`}>
                  <Box
                    sx={{
                      width: "325px",
                      boxSizing: "border-box",
                      transition: "all 0.3s ease-in-out",
                      '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <CarCard car={car} />
                  </Box>
                </Link>
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={325}
                  height={300}
                  sx={{ borderRadius: 2, transition: 'all 0.3s ease-in-out' }}
                />
              )}
            </ScrollReveal>
          ))}
        </Box>
      </section>

      {/* Аренда */}
      <section className="w-full px-4 pt-[30px] mt-15">
        <ScrollReveal>
          <div className="relative w-[92%] mx-auto mb-10 rounded-[24px] overflow-hidden" style={{ height: '380px' }}>
            <video
              src="/renta.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              style={{ objectPosition: 'center 87%' }}
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 h-full flex items-center justify-end">
              <div className="text-white text-right pr-10 sm:pr-16 lg:pr-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ textShadow: '0 6px 24px rgba(0, 0, 0, 0.8)' }}>
                  <span className="text-white">Доступные машины</span><br />
                  <span className="text-[#0066ff]">для аренды</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium max-w-xl mb-6 text-white/90">
                  Арендуй авто и будь свободен — помоги друзьям, уезжай за город или просто катайся!
                </p>
                <Link href="/arenda">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm">
                    Смотреть автомобили
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
                  <Link href={`/home/renta/${auto.id}`}>
                    <Box
                      sx={{
                        width: "325px",
                        boxSizing: "border-box",
                        transition: "all 0.3s ease-in-out",
                        '&:hover': {
                          transform: 'scale(1.03)',
                          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      <RentaCard auto={auto} />
                    </Box>
                  </Link>
                ) : (
                  <Skeleton variant="rectangular" width={325} height={300} sx={{ borderRadius: 2, transition: 'all 0.3s ease-in-out' }} />
                )}
              </ScrollReveal>
            ))}
          </Box>
        </section>
      </section>

      {/* Запчасти */}
      <section className="w-full px-4 pt-[30px] mb-20 mt-15">
        <ScrollReveal>
          <div className="relative w-[92%] mx-auto mb-10 rounded-[24px] overflow-hidden" style={{ height: '380px' }}>
            <video
              src="/parts.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              style={{ objectPosition: 'center 87%' }}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 h-full flex items-center justify-start">
              <div className="text-white text-left pl-10 sm:pl-16 lg:pl-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ textShadow: '0 6px 24px rgba(0, 0, 0, 0.8)' }}>
                  <span className="text-white">Качественные</span>{' '}
                  <span className="text-[#eaa61e]">запчасти</span><br />
                  <span className="text-white">для вашего</span>{' '}
                  <span className="text-[#eaa61e]">авто</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium max-w-xl mb-6 text-white/90">
                  Хорошие детали — залог уверенной дороги.
                </p>
                <Link href="/sto">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm">
                    Смотреть запчасти
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
                <Link href={`/home/parts/${part.id}`}>
                  <Box
                    sx={{
                      width: "300px",
                      transition: "all 0.3s ease-in-out",
                      '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <PartCard part={part} />
                  </Box>
                </Link>
              ) : (
                <Skeleton variant="rectangular" width={300} height={180} sx={{ borderRadius: 2, transition: 'all 0.3s ease-in-out' }} />
              )}
            </ScrollReveal>
          ))}
        </section>
      </section>
    </div>
  );
}
