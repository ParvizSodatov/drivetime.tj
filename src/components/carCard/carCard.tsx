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
    image: '/car.png', // Помести car.png в /public
  },
];

const CarCard = () => {
  return (
    <Grid container spacing={2}>
      {fakeCars.map((car) => (
        <Grid item xs={12} sm={6} md={4} key={car.id}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              boxShadow: 'none',
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={car.image}
              alt={car.title}
              sx={{
                objectFit: 'cover',
                borderRadius: '16px',
                width: '100%',
              }}
            />
            <CardContent sx={{ px: 1.5, pt: 1.5, pb: 2 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ fontSize: '18px', mb: 0.5 }}
              >
                {car.year} {car.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#6e7c87', fontSize: '15px' }}
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
