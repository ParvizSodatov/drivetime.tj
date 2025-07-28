'use client'
import PartCard from '@/components/partsCard/partCard'
import { FormControl, InputLabel, MenuItem, Select ,SelectChangeEvent} from '@mui/material'
import { useState,ChangeEvent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
export default function ZapchastiPage() {
  const [make, setMake] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [brand, setBrand] = useState<string>('');

  const handleChangeMake = (e: SelectChangeEvent) => {
    setMake(e.target.value);
  };

  const handleChangeCategory = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };
  const handleChangeBrand = (e: SelectChangeEvent) => {
    setBrand(e.target.value);
  };
  return (
    <div className='max-w-[1180px] mx-auto px-4 py-8'>
      <h1 className='text-[40px] font-bold mt-[25px]'>Parts & Accessories</h1>
      <section className='flex items-center gap-4 mt-8'>
        <FormControl sx={{ width: '120px' }}>
  <InputLabel id="demo-simple-select-label">Make</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={make}
    label="Make"
    onChange={handleChangeMake}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
        <FormControl sx={{ width: '120px' }} >
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label="Category"
    onChange={handleChangeCategory}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
        <FormControl sx={{ width: '120px' }}>
  <InputLabel id="demo-simple-select-label">Brand</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={brand}
    label="Age"
    onChange={handleChangeBrand}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

      </section>
      <section className='flex  gap-2 mt-8 w-full bg-amber-50 justify-around '>
   
        
        <PartCard />
      </section>
    </div>
  );
}
