"use client";

import PartCard from "@/components/partsCard/partCard";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState, useEffect } from "react";
import { usePartsStore } from "@/store/pages/autoparts/autoparts";

export default function ZapchastiPage() {
  const { parts, getParts } = usePartsStore();

  const [make, setMake] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");

  const handleChangeMake = (e: SelectChangeEvent) => {
    setMake(e.target.value);
  };

  const handleChangeCategory = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  const handleChangeBrand = (e: SelectChangeEvent) => {
    setBrand(e.target.value);
  };

  useEffect(() => {
    getParts();
  }, []);

  return (
    <div className="max-w-[1180px] mx-auto px-4 py-8">
      <h1 className="text-[40px] font-bold mt-[25px]">Parts & Accessories</h1>

      {/* Фильтры */}
      <section className="flex items-center gap-4 mt-8">
        <FormControl sx={{ width: "120px" }}>
          <InputLabel id="make-select-label">Make</InputLabel>
          <Select
            labelId="make-select-label"
            id="make-select"
            value={make}
            label="Make"
            onChange={handleChangeMake}
          >
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="BMW">BMW</MenuItem>
            <MenuItem value="Mercedes">Mercedes</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "120px" }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={handleChangeCategory}
          >
            <MenuItem value="Фильтры">Фильтры</MenuItem>
            <MenuItem value="Электрооборудование">Электрооборудование</MenuItem>
            <MenuItem value="Тормозная система">Тормозная система</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "120px" }}>
          <InputLabel id="brand-select-label">Brand</InputLabel>
          <Select
            labelId="brand-select-label"
            id="brand-select"
            value={brand}
            label="Brand"
            onChange={handleChangeBrand}
          >
            <MenuItem value="Bosch">Bosch</MenuItem>
            <MenuItem value="VARTA">VARTA</MenuItem>
            <MenuItem value="Brembo">Brembo</MenuItem>
          </Select>
        </FormControl>
      </section>

      <section className="flex flex-wrap gap-4 mt-8 w-full  justify-start p-4">
        {parts.map((part) => (
          <PartCard key={part.id} part={part} />
        ))}
      </section>
    </div>
  );
}
