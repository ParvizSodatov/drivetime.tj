"use client";

import { useEffect, useState, useMemo } from "react";
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
  TextField,
} from "@mui/material";
import Link from "next/link";

export default function About() {
  const { cars, getCars } = useCarsStore();

  const [make, setMake] = useState("");
  const [priceMin, setPriceMin] = useState<number | "">("");
  const [priceMax, setPriceMax] = useState<number | "">("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");

  useEffect(() => {
    getCars();
  }, []);

  const filteredCars = useMemo(() => {
    let minPrice = priceMin === "" ? null : priceMin;
    let maxPrice = priceMax === "" ? null : priceMax;

    let minMileage: number | null = null;
    let maxMileage: number | null = null;

    if (mileage) {
      const parts = mileage.split("-").map((p) => parseInt(p));
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        minMileage = parts[0];
        maxMileage = parts[1];
      }
    }

    return cars.filter((car) => {
      const carMake = car.specifications.make;
      const carYear = car.specifications.year;
      const carMileage = parseInt(car.specifications.mileage.replace(/[^0-9]/g, ""));
      const carPrice = car.price;

      const priceMatch =
        (minPrice === null || carPrice >= minPrice) &&
        (maxPrice === null || carPrice <= maxPrice);

      return (
        (make === "" || carMake === make) &&
        (year === "" || carYear === parseInt(year)) &&
        priceMatch &&
        (minMileage === null || (carMileage >= minMileage && carMileage <= maxMileage!))
      );
    });
  }, [cars, make, priceMin, priceMax, year, mileage]);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1380px",
        width: "100%",
        mx: "auto",
        mt: 4,
        mb:'20px',
        height: "auto",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Used Cars for Sale
      </Typography>

      <Box   sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start", 
    gap: 2,
    mb: 4,
    p: 2,
    backgroundColor: "#f9f9f9",
    borderRadius: 2,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}>
      
        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel >Make</InputLabel>
          <Select value={make} onChange={(e) => setMake(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
            <MenuItem value="Ford">Ford</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <TextField
            label="Min Price"
            type="number"
            size="small"
            value={priceMin}
            onChange={(e) => {
              const val = e.target.value;
              setPriceMin(val === "" ? "" : Number(val));
            }}
            sx={{ width: 100 }}
            InputProps={{ inputProps: { min: 0 } }}
          />
          <Typography sx={{ userSelect: "none" }}>—</Typography>
          <TextField
            label="Max Price"
            type="number"
            size="small"
            value={priceMax}
            onChange={(e) => {
              const val = e.target.value;
              setPriceMax(val === "" ? "" : Number(val));
            }}
            sx={{ width: 100 }}
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Box>

    
        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel>Year</InputLabel>
          <Select value={year} onChange={(e) => setYear(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel>Mileage</InputLabel>
          <Select value={mileage} onChange={(e) => setMileage(e.target.value)}>
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
          justifyContent: "flex-start",
          gap: 3,
        }}
      >
      {filteredCars.length === 0 ? (
  <Typography sx={{ mt: 4, width: "100%", textAlign: "center", color: "gray" }}>
    Машин с такими параметрами не найдено.
  </Typography>
) : (
  filteredCars.map((car) => (
    <Link key={car.id} href={`/auto/${car.id}`}>
      <Box sx={{ width: "315px", boxSizing: "border-box" }}>
        <CarCard car={car} />
      </Box>
    </Link>
  ))
)}
      </Box>
    </Container>
  );
}
