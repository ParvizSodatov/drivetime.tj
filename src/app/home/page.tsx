'use client'
import Image from 'next/image'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
import { Box } from '@mui/material'
import { useRentaStore } from '@/store/pages/renta/renta'
import RentaCard from '@/components/rentaCard/rentaCard'
import { usePartsStore } from '@/store/pages/autoparts/autoparts'
import { Car, Wrench, CarFront, Cog } from 'lucide-react';
import { Button } from '@mui/material';

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
    <>
      <section
        style={{
          minHeight: '80vh',
          backgroundImage: 'url(/bgImage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: "60px",
          position: 'relative',
          color: 'white',
          borderRadius: '0 0 40px 40px'
        }}
        className="flex flex-col items-center justify-center text-center px-4"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            zIndex: 0,
            borderRadius: '0 0 40px 40px'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)', color: '#fff' }}
          >
            Ваш путь к<br />совершенству на дороге
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mb-8"
            style={{
              color: '#ffd9b3',
              fontStyle: 'italic',
              letterSpacing: '0.03em',
              textShadow: '0 1px 4px rgba(0,0,0,0.6)',
            }}
          >
            Откройте для себя мир автомобилей: покупка, аренда, обслуживание и
            запчасти — всё в одном месте, с максимальным удобством.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: '9999px',
                px: 4,
                backgroundColor: '#ff7f50',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#ff4500',
                },
              }}
            >
              Найти авто →
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                borderRadius: '9999px',
                px: 4,
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#2c3e50',
                },
              }}
            >
              Купить запчасти →
            </Button>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50">
        <div className="bg-[#102b46]  text-white rounded-[24px] pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="pt-16 text-center">
              <h1 className="text-4xl font-bold mb-6">Почему выбирают CarMarket?</h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
                Мы предлагаем широкий спектр услуг, высокое качество обслуживания и индивидуальный подход к каждому клиенту.
                Ваше удобство и удовлетворение - наш главный приоритет.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="bg-[#4a69bd] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <path d="M9 17h6" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Автосалон</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Широкий выбор проверенных подержанных автомобилей с гарантией качества.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="bg-[#4a69bd] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Аренда авто</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Гибкие условия аренды с водителем и без, для любых ваших нужд.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="bg-[#4a69bd] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-800">СТО</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Профессиональный ремонт и обслуживание вашего автомобиля на высшем уровне.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="bg-[#4a69bd] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m7.8 16.2-2.9 2.9" /><path d="M6 12H2" /><path d="m7.8 7.8-2.9-2.9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Запчасти</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Оригинальные и аналоговые запчасти для любых марок автомобилей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'relative',
        width: '90%',
        margin: 'auto',
        height: '380px',
        borderRadius: '24px',
        overflow: 'hidden',
      }}>
        <video
          src="/autosales.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 87%',
            display: 'block',
            transition: 'all 0.5s ease',
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          borderRadius: '24px',
          transition: 'background-color 0.5s ease',
        }} />
      </div>

      <section className="w-full px-4 pt-[30px]">
        <div className="flex justify-between items-center max-w-[1340px] mx-auto mb-6">
          <h1 className="text-[40px] font-bold text-gray-900">Популярные автомобили</h1>
          <Link href="/auto">
            <Button
              variant="outlined"
              sx={{
                borderRadius: '30px',
                textTransform: 'none',
                fontWeight: 'bold',
                borderColor: '#4a69bd',
                color: '#4a69bd',
                '&:hover': {
                  backgroundColor: '#4a69bd',
                  color: 'white',
                },
              }}
            >
              Все авто
            </Button>
          </Link>
        </div>

        <section className='flex justify-center '>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            {cars.map((car) => (
              <Link key={car.id} href={`/home/${car.id}`}>
              <Box
                key={car.id}
                sx={{
                  width: "325px",
                  boxSizing: "border-box",
                }}
              >
                <CarCard car={car} />
              </Box>
              </Link>
            ))}
          </Box>
        </section>
      </section>

      <section className="w-full px-4 pt-[30px]">
        <div className="flex justify-between items-center max-w-[1340px] mx-auto mb-6">
          <h1 className="text-[40px] font-bold text-gray-900">Популярные машины для аренды</h1>
          <Link href="/arenda">
            <Button
              variant="outlined"
              sx={{
                borderRadius: '30px',
                textTransform: 'none',
                fontWeight: 'bold',
                borderColor: '#4a69bd',
                color: '#4a69bd',
                '&:hover': {
                  backgroundColor: '#4a69bd',
                  color: 'white',
                },
              }}
            >
              Все аренды
            </Button>
          </Link>
        </div>

        <section className='flex justify-center '>
          <Box
            sx={{
              display: "flex",
              gap: "24px"
            }}
          >
            {renta.slice(0, 4).map((auto) => (
              <Box
                key={auto.id}
                sx={{
                  width: "325px",
                  boxSizing: "border-box",
                }}
              >
                <RentaCard auto={auto} />
              </Box>
            ))}
          </Box>
        </section>
      </section>

      <section className="w-full px-4 pt-[30px]">
        <div className="flex justify-between items-center max-w-[1340px] mx-auto mb-6">
          <h1 className="text-[40px] font-bold text-gray-900">Популярные СТО</h1>
          <Link href="/sto">
            <Button
              variant="outlined"
              sx={{
                borderRadius: '30px',
                textTransform: 'none',
                fontWeight: 'bold',
                borderColor: '#4a69bd',
                color: '#4a69bd',
                '&:hover': {
                  backgroundColor: '#4a69bd',
                  color: 'white',
                },
              }}
            >
              Все СТО
            </Button>
          </Link>
        </div>

        <section className="flex flex-wrap gap-2 w-full justify-center p-4">
          {parts.slice(0, 4).map((part) => (
            <PartCard key={part.id} part={part} />
          ))}
        </section>
      </section>

    </>
  );
}
