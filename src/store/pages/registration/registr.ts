import { create } from 'zustand'
import axios from 'axios'
import { API } from '@/utils/config'

interface User {
  id: number
  name: string
  email: string
  password: string
}

interface AuthStore {
  isLoading: boolean
  register: (name: string, email: string, password: string) => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoading: false,

  register: async (name, email, password) => {
    try {
      set({ isLoading: true })	

      const { data: existing } = await axios.get(
       ` ${API}/users?email=${email}`
      )

      if (existing.length > 0) {
        throw new Error('Пользователь с такой почтой уже существует')
      }

      await axios.post(`${API}/users`, {
        name,
        email,
        password
      })

      console.log('Регистрация прошла успешно')
    } catch (error) {
      console.error('Ошибка регистрации:', error)
      throw error
    } finally {
      set({ isLoading: false })
    }
  }
}))