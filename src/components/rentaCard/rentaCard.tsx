'use client';

import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { Heart, Calendar } from 'lucide-react';

type RentaCar = {
  id: number;
  title: string;
  images: string[];
  specifications: {
    year: number;
  };
  price?: number;
};

type CarCardProps = {
  auto: RentaCar;
  isFavorite?: boolean;
};

const RentaCard: React.FC<CarCardProps> = ({ auto, isFavorite = false }) => {
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
        image={auto.images[0] ?? '/placeholder.svg'}
        alt={auto.title}
        sx={{
          width: '100%',
          height: 210,
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
            {auto.title}
          </Typography>

          <div style={{ display: 'flex', gap: 16, color: '#6e7c87', fontSize: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={16} />
              <span>{auto.specifications.year ?? '—'}</span>
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
            {auto.price ? `$${auto.price.toLocaleString()}` : '—'}
          </Typography>

          <IconButton
            aria-label="Избранное"
            disableRipple
            sx={{
              color: isFavorite ? '#ef4444' : '#c0c0c0',
              '&:hover': { backgroundColor: 'transparent' },
              padding: 0,
            }}
            disabled
          >
            <Heart fill={isFavorite ? '#ef4444' : 'none'} stroke={isFavorite ? '#ef4444' : '#c0c0c0'} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default RentaCard;