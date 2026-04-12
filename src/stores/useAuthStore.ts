import { create } from 'zustand'
import type { AuthState } from '../types/auth'

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  setUser: (user) =>
    set({
      user,
      loading: false,
    }),

  setLoading: (isLoading) =>
    set({
      loading: isLoading,
    }),

  clearAuth: () =>
    set({
      user: null,
      loading: false,
    }),
}))
