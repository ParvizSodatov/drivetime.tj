'use client'

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { API } from '@/utils/config';

type Car = {
  id: number;
  title: string;
  images: string[];
  specifications: {
    year: number;
  };
  price?: number;
};


type CarCardProps = {
  car: Car;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Card
      elevation={0}
      sx={{
        width: '270px',
        height: '223px',
        borderRadius: 2,
        boxShadow: 'none',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        image={car.images[0]}
        alt={car.title}
        sx={{
          width: '270px',
          height: '155px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
      <CardContent sx={{ px: 2, pt: 1.5, pb: 2 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ fontSize: '18px', lineHeight: '22px', mb: 0.5 }}
        >
          {car.title} {car.specifications.year}
        </Typography>
        {car.price && (
          <Typography
            variant="body2"
            sx={{ color: '#6e7c87', fontSize: '15px', lineHeight: '20px' }}
          >
            ${car.price}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};


export default CarCard;
