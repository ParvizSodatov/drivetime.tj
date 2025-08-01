'use client'
import { useCarsStore } from '@/store/pages/cars/cars'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
	Heart,
	CalendarDays,
	Gauge,
	FuelIcon as Engine,
	Car,
	Settings,
	CarFront,
	Fuel,
} from 'lucide-react'

const Page=()=>{
	const { id } = useParams()
		const { cars, getCars } = useCarsStore()
		const car = cars.find(e => Number(e.id) === Number(id))


		
	useEffect(() => {
			getCars()
		}, [])
return (
	<div className='container mx-auto p-4 md:p-8 bg-white'>
			<div className='grid grid-cols-1 lg:grid-cols-[minmax(0,500px)_1fr] gap-8'>
				
				<div className='flex flex-col gap-4'>
					<div className='bg-gray-100 rounded-lg overflow-hidden aspect-[3/2] flex items-center justify-center'>
						<img
							src={car?.images[0]}
							alt='Toyota Camry thumbnail 3'
							width={100}
							height={100}
							className='object-cover w-full h-full'
						/>
					</div>
					<div className='grid grid-cols-3 gap-4'>
						<div className='bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center'>
							<img
								src={car?.images[0]}
								alt='Toyota Camry thumbnail 3'
								width={100}
								height={100}
								className='object-cover w-full h-full'
							/>
						</div>
						<div className='bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center'>
							<img
								src={car?.images[0]}
								alt='Toyota Camry thumbnail 3'
								width={100}
								height={100}
								className='object-cover w-full h-full'
							/>
						</div>
						<div className='bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center'>
							<img
								src={car?.images[0]}
								alt='Toyota Camry thumbnail 3'
								width={100}
								height={100}
								className='object-cover w-full h-full'
							/>
						</div>
					</div>
				</div>

				{/* Right Column: Details */}
				<div className='flex flex-col'>
					<div className='flex justify-between items-center'>
						<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>
							{car?.title}
						</h1>
						<Heart className='w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500 transition-colors' />
					</div>
					<div className='text-3xl md:text-4xl font-bold mt-2 text-gray-900'>
						$ {car?.price}
					</div>

					<div className='grid grid-cols-2 gap-x-8 gap-y-4 mt-6 text-gray-700'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5 text-gray-500' />
							<span>{car?.specifications.year}</span>
						</div>
						<div className='flex items-center gap-2'>
							<Gauge className='w-5 h-5 text-gray-500' />
							<span>{car?.specifications.mileage}</span>
						</div>
						<div className='flex items-center gap-2'>
							<Engine className='w-5 h-5 text-gray-500' />
							<span>Двигатель: 2.5L I4</span>
						</div>
						<div className='flex items-center gap-2'>
							<Car className='w-5 h-5 text-gray-500' />
							<span>Мощность: 203 л.с.</span>
						</div>
						<div className='flex items-center gap-2'>
							<Settings className='w-5 h-5 text-gray-500' />
							<span>Трансмиссия: Автомат</span>
						</div>
						<div className='flex items-center gap-2'>
							<CarFront className='w-5 h-5 text-gray-500' />
							<span>Привод: Передний</span>
						</div>
						<div className='flex items-center gap-2'>
							<Fuel className='w-5 h-5 text-gray-500' />
							<span>Расход топлива: 7.5 л/100 км</span>
						</div>
					</div>

					<div className='mt-8'>
						<h2 className='text-xl font-bold text-gray-900'>Описание</h2>
						<p className='text-gray-600 mt-2'>
							Надежный и комфортный седан, идеально подходит для города и
							дальних поездок. В отличном состоянии, один владелец.
						</p>
					</div>

					<Button className='mt-8 w-full py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white text-lg font-semibold rounded-lg shadow-md'>
						Связаться с продавцом
					</Button>
				</div>
			</div>
		</div>
)
}
export default Page