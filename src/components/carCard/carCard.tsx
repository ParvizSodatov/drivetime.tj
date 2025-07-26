'use client'

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

type Car = {
  id: number;
  year: number;
  title: string;
  description: string;
  image: string;
};

const fakeCars: Car[] = [
  {
    id: 1,
    year: 2018,
    title: 'Sedan',
    description: 'Sedan, 2018, $15,000',
    image: '/car.png',
  },
];

const CarCard = () => {
  return (
    <Grid container spacing={2}>
      {fakeCars.map((car) => (
        <Grid item key={car.id}>
          <Card
            elevation={0}
            sx={{
              width: '2700px',
              height: '223px',
              borderRadius: 2,
              boxShadow: 'none',
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              image={car.image}
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
                {car.year} {car.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#6e7c87', fontSize: '15px', lineHeight: '20px' }}
              >
                {car.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CarCard;
