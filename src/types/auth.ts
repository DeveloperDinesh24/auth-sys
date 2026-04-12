import type { User } from '@supabase/supabase-js'

export interface AuthState {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
  setLoading: (isLoading: boolean) => void
  clearAuth: () => void
}

export interface AuthCredentials {
  email: string
  password?: string
}

export interface UserProfile {
  id: string
  updated_at: string
  username: string
  full_name?: string
  avatar_url?: string
  website?: string
}
