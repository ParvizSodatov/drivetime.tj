"use client";

import PartCard from "@/components/partsCard/partCard";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
} from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { usePartsStore } from "@/store/pages/autoparts/autoparts";
import Link from "next/link";

export default function ZapchastiPage() {
  const { parts, getParts } = usePartsStore();

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceMin, setPriceMin] = useState<number | "">("");
  const [priceMax, setPriceMax] = useState<number | "">("");

  useEffect(() => {
    getParts();
  }, []);

  // Фильтры брендов для выбора (просто пример, можно менять или получать динамически)
  const brandsList = ["Bosch", "VARTA", "Brembo"];

  const filteredParts = useMemo(() => {
    return parts.filter((part) => {
      // Категория фильтра
      const categoryMatch = category === "" || part.category === category;

      // Фильтрация по бренду — ищем в названии части бренды из списка (поиск по подстроке)
      const brandMatch =
        brand === "" ||
        part.name.toLowerCase().includes(brand.toLowerCase());

      // Цена
      const priceMatch =
        (priceMin === "" || part.price >= priceMin) &&
        (priceMax === "" || part.price <= priceMax);

      return categoryMatch && brandMatch && priceMatch;
    });
  }, [parts, category, brand, priceMin, priceMax]);

  return (
    <Box className="max-w-[1280px] mx-auto px-4 py-8">
      <h1 className="text-[40px] font-bold mt-[25px]">Parts & Accessories</h1>

      {/* Фильтры */}
      <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap", alignItems: "center" }}>
        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
          >
            {/* <MenuItem value="">Выбрать категорию</MenuItem> */}
            {/* Сюда можно динамически запихнуть уникальные категории, если хочешь */}
            <MenuItem value="Фильтры">Фильтры</MenuItem>
            <MenuItem value="Электрооборудование">Электрооборудование</MenuItem>
            <MenuItem value="Тормозная система">Тормозная система</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel id="brand-select-label">Brand</InputLabel>
          <Select
            labelId="brand-select-label"
            id="brand-select"
            value={brand}
            label="Brand"
            onChange={(e) => setBrand(e.target.value)}
            displayEmpty
          >
            
            {brandsList.map((b) => (
              <MenuItem key={b} value={b}>
                {b}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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

      {/* Список деталей */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mt: 4, justifyContent: "flex-start" }}>
        {filteredParts.length === 0 ? (
          <Box sx={{ width: "100%", textAlign: "center", color: "gray", mt: 4 }}>
            Деталей с такими параметрами не найдено.
          </Box>
        ) : (
          filteredParts.map((part) => (
            <Link key={part.id} href={`/auto-parts/${part.id}`}>
              <Box sx={{ width: "315px", boxSizing: "border-box" }}>
                <PartCard part={part} />
              </Box>
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
}
