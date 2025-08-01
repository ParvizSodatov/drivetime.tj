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
import CategoryCards from '@/components/categoryCards/categoryCards';

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
        }}
        className="flex flex-col items-center justify-center text-center px-4"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            zIndex: 0,
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
              Найти авто
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
              Купить запчасти
            </Button>
          </div>
        </div>
      </section>

      <CategoryCards/>

      <section className="w-full px-4 pt-[30px]">
        <div className="flex justify-between items-center max-w-[1340px] mx-auto mb-6">
          <h1 className="text-[40px] font-bold text-gray-900">Автомобили в наличии</h1>
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

        <div style={{
          position: 'relative',
          width: '90%',
          margin: '0 auto 40px auto',
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
          <h1 className="text-[40px] font-bold text-gray-900">Доступные машины для аренды</h1>
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

        <div style={{
          position: 'relative',
          width: '90%',
          margin: '0 auto 40px auto',
          height: '380px',
          borderRadius: '24px',
          overflow: 'hidden',
        }}>
          <video
            src="/renta.mp4"
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
          <h1 className="text-[40px] font-bold text-gray-900">Качественные запчасти для вашего авто</h1>
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
              Все запчасти
            </Button>
          </Link>
        </div>

        <div style={{
          position: 'relative',
          width: '90%',
          margin: '0 auto 40px auto',
          height: '380px',
          borderRadius: '24px',
          overflow: 'hidden',
        }}>
          <video
            src="/parts.mp4"
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

        <section className="flex flex-wrap gap-2 w-full justify-center p-4">
          {parts.slice(0, 4).map((part) => (
            <PartCard key={part.id} part={part} />
          ))}
        </section>
      </section>
    </>
  );
}
