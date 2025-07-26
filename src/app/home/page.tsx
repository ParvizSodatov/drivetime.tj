import Image from 'next/image'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CarCard from '@/components/carCard/carCard'

export default function Home() {
  return (
	<div className='max-w-[1180px] mx-auto px-4 py-8'>
		 <section
  style={{
    backgroundImage: "url('/parviz/i (1).webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '580px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    marginBottom: '20px',
    justifyContent: 'center',
  }}
>
  <h1
    style={{
      color: 'white',
      fontSize: '90px',
      marginLeft:'0px',
      marginRight: '170px',
      marginTop: '10px',
      fontWeight: 'bold',
      textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
      textAlign: 'center',
      padding: '1rem',
    }}
  >
    Find Your Perfect Ride
  </h1>
</section>



       <h1 className='text-[50px] py-[30px]'>
        Featured Used Cars
       </h1>

   <section className='flex jusstify-start gap-15 '>
{/* <CarCard/> */}
<CarCard/>
<CarCard/>
<CarCard/>

   </section>


     <h1 className='text-[50px] py-[30px]'>
        Featured Used Cars
       </h1>

   <section className='flex jusstify-start gap-15 '>
{/* <CarCard/> */}
<CarCard/>
<CarCard/>
<CarCard/>

   </section>

   
     <h1 className='text-[50px] py-[30px]'>
        Find Repair Shops
       </h1>

   <section className='flex justify-around'>
<CarCard/>
<CarCard/>
<CarCard/>
<CarCard/>

   </section>



   
     <h1 className='text-[50px] py-[30px]'>
       Shop Parts & Accessories
       </h1>
   <section className='flex justify-around'>
<CarCard/>
<CarCard/>
<CarCard/>
<CarCard/>

   </section>


	</div>
  );
}
