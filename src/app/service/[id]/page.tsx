'use client'

import { useServiceStore } from '@/store/pages/sto/sto'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Star,
  CheckCircle,
  XCircle,
} from 'lucide-react'

export default function ServicePage() {
  const { id } = useParams()
  const { serviceStations, getServiceStations } = useServiceStore()
  const service = serviceStations.find(e => Number(e.id) === Number(id))

  useEffect(() => {
    getServiceStations()
  }, [])

  if (!service) return <div className="p-6 text-center">Загрузка...</div>

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Фото */}
      <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Название и рейтинг */}
      <div className="flex items-center justify-between flex-wrap mb-4 gap-2">
        <h1 className="text-3xl font-bold text-gray-900">{service.name}</h1>
        <div className="flex items-center gap-2 text-yellow-500 text-lg">
          <Star className="w-5 h-5 fill-yellow-400" />
          <span>{service.rating}</span>
        </div>
      </div>

      {/* Контакты и Услуги рядом */}
      <div className="flex flex-col md:flex-row gap-8 mb-6">
        {/* Контакты */}
        <div className="flex-1 flex flex-col gap-3 text-gray-700">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span>{service.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-500" />
            <a href={`tel:${service.phone}`} className="hover:underline">
              {service.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <a href={`mailto:${service.email}`} className="hover:underline">
              {service.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-500" />
            <span>{service.workingHours}</span>
          </div>
          <div className="flex items-center gap-3">
            {service.isOpen ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-medium">Открыт</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Закрыт</span>
              </>
            )}
          </div>
        </div>

        {/* Услуги */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">Услуги</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
            {service.services.map((serviceName, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-500" />
                {serviceName}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Цены */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Цены</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(service.prices).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-xl shadow-sm"
            >
              <span className="capitalize text-gray-700">{key}</span>
              <span className="font-semibold text-gray-900">
                {typeof value === 'number' ? `${value} сомони` : value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопка */}
      <Button className="w-full py-[28px] bg-[#1e2133] hover:bg-[#687288] text-white text-lg font-semibold rounded-xl shadow-lg transition-all ">
        Связаться с сервисом
      </Button>
    </div>
  )
}
