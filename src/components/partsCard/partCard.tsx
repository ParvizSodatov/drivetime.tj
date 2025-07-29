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
          width: '270px',
          height: '223px',
          borderRadius: 2,
          boxShadow: 'none',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={part.image}
          alt={part.name}
          sx={{
            width: '270px',
            height: '145px',
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
            {part.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#6e7c87', fontSize: '15px', lineHeight: '20px' }}
          >
            ${part.price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
