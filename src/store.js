import { create } from 'zustand'

export const useStore = create((set) => ({
  isAltered: false,
  toggle: () => set((state) => ({ isAltered: !state.isAltered }))
}))