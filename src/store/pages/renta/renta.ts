
import { create } from 'zustand';
import { API } from './../../../utils/config';
import  axios  from 'axios';

interface Renta {
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
  price: number
  seller: {
    name: string;
    contactAvailable: boolean;
  };
  actions: {
    contactSeller: boolean;
    addToFavorites: boolean;
  };
}

interface RentaState {
  renta: Renta[];
  getRenta: () => Promise<void>;
}

export const useRentaStore = create<RentaState>((set, get) => ({
  renta: [],
  getRenta: async () => {
    try {
      const { data } = await axios.get<Renta[]>(`${API}/renta`);
      set(() => ({ renta: data }));
    } catch (error) {
      console.log(error);
    }
  },
}));
