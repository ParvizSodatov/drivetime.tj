'use client'

import React from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material'
import { Heart, Calendar, Gauge } from 'lucide-react'
import { useWishlistStore } from '@/store/wishlist/wishlist'

type Car = {
  id: number
  title: string
  images: string[]
  specifications: {
    year: number
    mileage?: string
    fuelType?: string
  }
  price?: number
}

type CarCardProps = {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore()

  const carItem = {
    id: car.id,
    title: car.title,
    image: car.images?.[0],
    price: car.price,
    category: 'car' as const,
  }

  const liked = isInWishlist(car.id, 'car')

  const toggleWishlist = () => {
    if (liked) {
      removeFromWishlist(car.id, 'car')
    } else {
      addToWishlist(carItem)
    }
  }

  return (
    <Card
      elevation={1}
      sx={{
        width: 325,
        height: 370,
        borderRadius: 3,
        boxShadow: '0 1px 6px rgb(0 0 0 / 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image={car.images[0] ?? '/placeholder.svg'}
        alt={car.title}
        className="h-[210px]"
        sx={{
          width: '100%',
          objectFit: 'cover',
          backgroundColor: '#f0f0f0',
        }}
      />

      <CardContent
        sx={{
          p: 2,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
            {car.title}
          </Typography>

          <div style={{ display: 'flex', gap: 16, color: '#6e7c87', fontSize: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={16} />
              <span>{car.specifications.year ?? '—'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Gauge size={16} />
              <span>{car.specifications.mileage ? car.specifications.mileage + ' км' : '—'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>{car.specifications.fuelType ?? '—'}</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 14,
          }}
        >
          <Typography variant="h6" fontWeight={700} sx={{ fontSize: 24 }}>
            {car.price ? `$${car.price}` : '—'}
          </Typography>

          <IconButton
            aria-label="Избранное"
            disableRipple
            sx={{
              color: liked ? '#ef4444' : '#c0c0c0',
              '&:hover': { backgroundColor: 'transparent' },
              padding: 0,
              cursor: 'pointer',
            }}
            onClick={toggleWishlist}
          >
            <Heart fill={liked ? '#ef4444' : 'none'} stroke={liked ? '#ef4444' : '#c0c0c0'} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  )
}
