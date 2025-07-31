import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Car, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111827',
        color: '#D1D5DB',
        py: 8,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: 2,
        }}
      >
        {/* Основное содержимое */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            mb: 6,
          }}
        >
          {/* Лого и контакты */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Car size={36} color="#6366F1" />
              <Typography variant="h5" component="h1" sx={{ fontWeight: 800, color: 'white' }}>
                CarMarket
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
              Ваш надежный партнер в мире автомобилей: покупка, аренда, обслуживание и запчасти.<br />
              Мы делаем процесс простым и удобным.
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <Phone size={18} color="#6366F1" />
              <Typography variant="body2">+992 000 000 000</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <Mail size={18} color="#6366F1" />
              <Typography variant="body2">info@carmarket.tj</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <MapPin size={18} color="#6366F1" />
              <Typography variant="body2">г. Душанбе, ул. Примерная, 123</Typography>
            </Box>
          </Box>

          {/* Группа колонок */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 4, sm: 2 },
              justifyContent: 'space-between',
            }}
          >
            {/* Категории */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ 
                mb: 3, 
                color: 'white', 
                fontWeight: 700,
                fontSize: '1.1rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#6366F1',
                  mt: 1
                }
              }}>
                Категории
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {['Автосалон', 'Аренда авто', 'СТО', 'Запчасти и аксессуары'].map((item) => (
                  <Typography 
                    key={item}
                    variant="body2"
                    sx={{
                      '&:hover': { color: '#6366F1', cursor: 'pointer' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Информация */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ 
                mb: 3, 
                color: 'white', 
                fontWeight: 700,
                fontSize: '1.1rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#6366F1',
                  mt: 1
                }
              }}>
                Информация
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {['О нас', 'Контакты', 'Политика конфиденциальности', 'Условия использования'].map((item) => (
                  <Typography 
                    key={item}
                    variant="body2"
                    sx={{
                      '&:hover': { color: '#6366F1', cursor: 'pointer' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Для клиентов */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ 
                mb: 3, 
                color: 'white', 
                fontWeight: 700,
                fontSize: '1.1rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#6366F1',
                  mt: 1
                }
              }}>
                Для клиентов
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {['Личный кабинет', 'Мои заказы', 'Избранное', 'Добавить объявление'].map((item) => (
                  <Typography 
                    key={item}
                    variant="body2"
                    sx={{
                      '&:hover': { color: '#6366F1', cursor: 'pointer' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Разделитель */}
        <Divider sx={{ 
          my: 6, 
          backgroundColor: '#374151',
          height: '1px'
        }} />

        {/* Копирайт */}
        <Typography 
          variant="body2" 
          align="center"
          sx={{ color: '#9CA3AF' }}
        >
          © {new Date().getFullYear()} CarMarket. Все права защищены.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;