'use client';

import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

type Part = {
  id: number;
  name: string;
  description?: string;
  category?: string;
  price: number;
  inStock?: boolean;
  image: string;
};

type Props = {
  part: Part;
};

export default function PartCard({ part }: Props) {
  return (
    <Box sx={{ m: 1 }}>
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
          image={part.image}
          alt={part.name}
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
              {part.name}
            </Typography>

            {part.category && (
              <div style={{ display: 'flex', gap: 16, color: '#6e7c87', fontSize: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>{part.category}</span>
                </div>
                {part.inStock !== undefined && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>{part.inStock ? 'В наличии' : 'Под заказ'}</span>
                  </div>
                )}
              </div>
            )}
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
              ${part.price.toLocaleString()}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}