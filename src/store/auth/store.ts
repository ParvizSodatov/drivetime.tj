import { API } from '@/utils/config'
import axios from "axios";
import { create } from "zustand";

type RegisterForm = {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

type LoginForm = {
  fullName: string;
  password: string;
};

type AuthState = {
  register: (data: RegisterForm) => Promise<boolean>;
  login: (data: LoginForm) => Promise<boolean>;
  token: string | null;
  setToken: (token: string) => void;
};

export const useAuth = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),

  register: async (data) => {
    try {
      const response = await axios.post(
        `${API}/register`,
        data
      );
      if (response.status === 200 || response.status === 201) {
        set({ token: response?.data?.token });
        return true;
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  login: async (data) => {
    try {
      const response = await axios.post(
        `${API}/auth`,
        data
      );

      if ((response.status === 200 || response.status === 201) && response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        set({ token: response?.data?.token });
        return true;
      }
      return true
    } catch (error) {
      console.error(error);
      return false;
    }
  },
}));
