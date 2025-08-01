"use client";

import { useEffect } from "react";
import { useRentaStore } from "@/store/pages/renta/renta";
import RentaCard from "@/components/rentaCard/rentaCard";

import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import Link from 'next/link'

export default function About() {
  const { renta, getRenta } = useRentaStore();

  useEffect(() => {
    getRenta();
  }, []);

  return (
    <Container maxWidth={false} sx={{  maxWidth: "1380px",
    width: "100%",
    mx: "auto",
    mt: 4,
    height: "500px",
    boxSizing: "border-box",}}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Used Cars for Rent
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel>Make</InputLabel>
          <Select defaultValue="">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
            <MenuItem value="Ford">Ford</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel>Price Range</InputLabel>
          <Select defaultValue="">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="0-20000">$0 - $20,000</MenuItem>
            <MenuItem value="20000-40000">$20,000 - $40,000</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel>Year</InputLabel>
          <Select defaultValue="">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel>Mileage</InputLabel>
          <Select defaultValue="">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="0-50000">0 - 50,000 km</MenuItem>
            <MenuItem value="50000-100000">50,000 - 100,000 km</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:'space-around',
          gap: 3,
        }}
      >
        {renta.map((auto) => (
        <Link key={auto.id}  href={`/arenda/${auto.id}`}>
          <Box
            key={auto.id}
            sx={{
              width: "270px",
              boxSizing: "border-box",
            }}
          >
            <RentaCard auto={auto} />
          </Box>
        </Link>
        ))}
      </Box>
    </Container>
  );
}
