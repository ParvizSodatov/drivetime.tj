'use client'
import { useServiceStore } from '@/store/pages/sto/sto'
import { useEffect } from 'react'

export default function StoPage() {
const {serviceStations,getServiceStations}=useServiceStore()
console.log('serviceStations :',serviceStations);


useEffect(()=>{
  getServiceStations()
},[])
  return (
    <div>
      <h1>Страница СТО</h1>
      <div>

        {
          serviceStations?.map((el)=>(
            <h1>{el.name}</h1>
          ))
        }
      </div>


    </div>
  );
}