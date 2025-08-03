import { create } from 'zustand'
import axios from 'axios'

interface AuthStore {
  isLoading: boolean
  token: string | null
  error: string | null

  login: (name: string, password: string) => Promise<void>
}

export const useLoginStore = create<AuthStore>((set) => ({
  isLoading: false,
  token: null,
  error: null,

  login: async (name, password) => {
    set({ isLoading: true, error: null })

    try {
      const { data } = await axios.get(
        `https://88a5511dc17889a1.mokky.dev/users?name=${name}&password=${password}`
      )

      if (data.length === 0) {
        throw new Error('Неверный email или пароль')
      }

      // ✅ Генерируем фейковый токен (например, userId + время)
      const fakeToken = `token-${data[0].id}-${Date.now()}`

  
      localStorage.setItem('accessToken', fakeToken)

      set({ token: fakeToken, isLoading: false })
    } catch (err: any) {
      set({ error: err.message || 'Ошибка входа', isLoading: false })
      throw err
    }
  }
}))
