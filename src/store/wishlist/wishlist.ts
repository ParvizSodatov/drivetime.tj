import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type WishlistItem = {
  id: number
  title: string
  image?: string
  price?: number
  category: 'car' | 'renta' | 'part'  // указываем тип объекта
}

type WishlistState = {
  items: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: number, category: WishlistItem['category']) => void
  isInWishlist: (id: number, category: WishlistItem['category']) => boolean
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (item) => {
        const exists = get().items.find(i => i.id === item.id && i.category === item.category)
        if (!exists) {
          set({ items: [...get().items, item] })
        }
      },
      removeFromWishlist: (id, category) => {
        set({
          items: get().items.filter(i => !(i.id === id && i.category === category))
        })
      },
      isInWishlist: (id, category) => {
        return !!get().items.find(i => i.id === id && i.category === category)
      }
    }),
    {
      name: 'wishlist-storage'
    }
  )
)
