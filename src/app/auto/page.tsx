'use client';
import CarCard from "@/components/carCard/carCard";
import { useCarsStore } from "@/store/pages/cars/cars";
import { useEffect } from "react";
import MarqueeDemo from "@/components/magicui/marquee-demo";



export default function About() {

	const { cars, getCars } = useCarsStore();


	  useEffect(() => {
    getCars();
  }, []);


  console.log(cars)

  return (
	 <main className="about">
		<h1 className="about-title">Automobile page</h1>
		<MarqueeDemo/>
		{cars.map((el)=> (
			<div>
				<CarCard/>
				
			</div>
		))}
		
	 </main>
  );
}
