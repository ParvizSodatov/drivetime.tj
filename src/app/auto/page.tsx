"use client";

import { useEffect } from "react";
import CarCard from "@/components/carCard/carCard";
import { useCarsStore } from "@/store/pages/cars/cars";

import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import Grid from "@mui/material/Grid";

export default function About() {
  const { cars, getCars } = useCarsStore();

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ maxWidth: "1180px", mt: 4 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Used Cars for Sale
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
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

      <Grid container spacing={3}>
        {cars.map((car) => (
          <Grid item sm={6} md={3} key={car.id}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
