'use client';

import { useWishlistStore } from '@/store/wishlist/wishlist';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();

  const partItem = {
    id: part.id,
    title: part.name,
    image: part.image ?? '',
    price: part.price,
    category: 'part' as const,
  };

  const isFav = isInWishlist(part.id, 'part');

  const toggleWishlistPart = () => {
    if (isFav) {
      removeFromWishlist(part.id, 'part');
    } else {
      addToWishlist(partItem);
    }
  };

  return (
    <Card
      elevation={1}
      sx={{
        width: '100%',
        minWidth: 0,
        height: 370,
        borderRadius: 3,
        boxShadow: '0 1px 6px rgb(0 0 0 / 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Сердечко */}
      <IconButton
        onClick={toggleWishlistPart}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: 'white',
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        {isFav ? (
          <Tooltip title="Убрать из избранного">
            <FavoriteIcon sx={{ color: '#e91e63' }} />
          </Tooltip>
        ) : (
          <Tooltip title="Добавить в избранное">
            <FavoriteBorderIcon sx={{ color: '#555' }} />
          </Tooltip>
        )}
      </IconButton>

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
  );
}
