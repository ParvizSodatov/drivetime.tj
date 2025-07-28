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
        elevation={0}
        sx={{
          width: 270,
          height: 250,
          borderRadius: 2,
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          },
        }}
      >
        <CardMedia
          component="img"
          image={part.image}
          alt={part.name}
          sx={{
            width: 270,
            height: 190,
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <CardContent sx={{ px: 2, pt: 1.5, pb: 2 }}>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ fontSize: 18, lineHeight: '22px', mb: '10px' }}
          >
            {part.name}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 16, color: '#555' }}>
            ${part.price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
