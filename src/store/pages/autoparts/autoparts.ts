import { create } from 'zustand';
import axios from 'axios';
import { API } from '../../../utils/config';

interface Part {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  inStock: boolean;
  image: string;
}

interface PartsState {
  parts: Part[];
  getParts: () => Promise<void>;
}

export const usePartsStore = create<PartsState>((set) => ({
  parts: [],
  getParts: async () => {
    try {
      const { data } = await axios.get<Part[]>(`${API}/parts`);
      set({ parts: data });
    } catch (error) {
    }
  },
}));

