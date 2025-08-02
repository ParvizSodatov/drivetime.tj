import { create } from 'zustand';
import axios from 'axios';
import { API } from '@/utils/config'



interface ServiceStation {
  id: number;
  name: string;
  description: string;
  location: string;
  phone: string;
  email: string;
  workingHours: string;
  services: string[];
  rating: number;
  isOpen: boolean;
  prices: Record<string, number | string>;
  imageUrl: string;
}

interface ServiceStationState {
  serviceStations: ServiceStation[];
  getServiceStations: () => Promise<void>;
}

export const useServiceStore = create<ServiceStationState>((set,get) => ({
  serviceStations: [],
  getServiceStations: async () => {
    try {
      const { data } = await axios.get<ServiceStation[]>(`${API}/serviceStations`);
      set({ serviceStations: data });
    } catch (error) {
      console.log(error);
    }
  },
}));
