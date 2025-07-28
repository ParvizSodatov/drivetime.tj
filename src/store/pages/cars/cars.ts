
import { create } from 'zustand';
import { API } from './../../../utils/config';
import  axios  from 'axios';

interface Car {
  id: number,
  title: string;
  description: string;
  images: string[];
  specifications: {
    make: string;
    model: string;
    year: number;
    mileage: string;
    bodyType: string;
    fuelType: string;
    transmission: string;
    color: string;
  };
  seller: {
    name: string;
    contactAvailable: boolean;
  };
  actions: {
    contactSeller: boolean;
    addToFavorites: boolean;
  };
}

interface CarsState {
  cars: Car[];
  getCars: () => Promise<void>;
}

export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  getCars: async () => {
    try {
      const { data } = await axios.get<Car[]>(`${API}/cars`);
      set(() => ({ cars: data }));
    } catch (error) {
      console.log(error);
    }
  },
}));
