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
import 'swiper/css/autoplay'; // 
import Link from 'next/link'
import Parts from '@/components/parts/parts'
import { useCarsStore } from '@/store/pages/cars/cars'
import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useRentaStore } from '@/store/pages/renta/renta'
import RentaCard from '@/components/rentaCard/rentaCard'
export default function Home() {
  const { cars, getCars } = useCarsStore()
  const { renta, getRenta } = useRentaStore();


  console.log(cars);
  
  useEffect(() => {
    getCars();
    getRenta();
  }, []);
  return (
	<div className='max-w-[1180px] mx-auto px-4 py-8'>

<Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      spaceBetween={20}
      speed={1500}

    >
     <SwiperSlide>
  <section
    style={{
      backgroundImage: "url('/parviz/i (1).webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '580px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      marginBottom: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
  
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      }}
    />

=
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
      }}
    >
      <h2 style={{ fontSize: '42px', marginBottom: '20px' ,fontWeight: 'bold'}}>
      Двигайся вперёд с уверенностью
      </h2>
      <Link href='/auto'>
      <button
        style={{
          padding: '12px 30px',
          fontSize: '16px',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '6px',
          color: 'black',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = 'gray')
          
        }
        onMouseOut={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = 'white')
        }
      >
        Посмотреть машины
      </button>
      </Link>
    </div>
  </section>
</SwiperSlide>
  <SwiperSlide>
  <section
    style={{
      backgroundImage: "url('/parviz/bgcar.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '580px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      marginBottom: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >

    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      }}
    />

    {/* текст и кнопка */}
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
      }}
    >
      <h2 style={{ fontSize: '42px', marginBottom: '20px' ,fontWeight: 'bold'}}>
     Аренда авто без головной боли
      </h2>
     <Link href='/arenda'>
 <button 
      
        style={{
          padding: '12px 30px',
          fontSize: '16px',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '6px',
          color: 'black',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = 'gray')
          
        }
        onMouseOut={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = 'white')
        }
      >
        Посмотреть машины
      </button>
     </Link>
    </div>
  </section>
</SwiperSlide>
<SwiperSlide>
  <section
    style={{
      backgroundImage: "url('/parviz/sto.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '580px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      marginBottom: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
  
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      }}
    />

    
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
      }}
    >
      <h2 style={{ fontSize: '42px', marginBottom: '20px' ,fontWeight: 'bold'}}>
    Качественный ремонт — по честной цене
      </h2>
     <Link href='/sto'>
 <button 
      
        style={{
          padding: '12px 30px',
          fontSize: '16px',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '6px',
          color: 'black',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = 'gray')
          
        }
        onMouseOut={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = 'white')
        }
      >
        Посмотреть услуги
      </button>
     </Link>
    </div>
  </section>
</SwiperSlide>
<SwiperSlide>
  <section
    style={{
      backgroundImage: "url('/parviz/zapchast.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '580px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      marginBottom: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
  
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      }}
    />

    
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
      }}
    >
      <h2 style={{ fontSize: '42px', marginBottom: '20px' ,fontWeight: 'bold'}}>
  Запчасти, которые служат долго
      </h2>
     <Link href='/auto-parts'>
 <button 
      
        style={{
          padding: '12px 30px',
          fontSize: '16px',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '6px',
          color: 'black',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = 'gray')
          
        }
        onMouseOut={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = 'white')
        }
      >
        Посмотреть услуги
      </button>
     </Link>
    </div>
  </section>
</SwiperSlide>
       
    
    </Swiper>
    


       <h1 className='text-[50px] py-[30px]'>
     Авто для продажи
       </h1>

   <section className=''>
<Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {cars.slice(0, 3).map((car) => (
          <Box
            key={car.id}
            sx={{
              width: "270px",
              boxSizing: "border-box",
            }}
          >
            <CarCard car={car} />
          </Box>
        ))}
      </Box>


   </section>


     <h1 className='text-[50px] py-[30px]'>
        Featured Used Cars
       </h1>

   <section className='flex jusstify-start gap-15 '>
<Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {renta.slice(0,3).map((auto) => (
          <Box
            key={auto.id}
            sx={{
              width: "270px",
              boxSizing: "border-box",
            }}
          >
            <RentaCard auto={auto} />
          </Box>
        ))}
      </Box>

   </section>

   
     <h1 className='text-[50px] py-[30px]'>
        Find Repair Shops
       </h1>

   <section className='flex justify-around'>

   </section>



   
     <h1 className='text-[40px] py-[30px] font-bold'>
       Shop Parts & Accessories
       </h1>
   <section className=''>
<Parts/>


   </section>


	</div>
  );
}
