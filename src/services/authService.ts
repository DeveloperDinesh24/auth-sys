import { supabase } from '../lib/supabase'
import type { AuthCredentials } from '../types/auth'

export const signUp = async ({ email, password }: AuthCredentials) => {
  if (!password) throw new Error('Password is required')

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) throw error
  return data
}

export const signIn = async ({ email, password }: AuthCredentials) => {
  if (!password) throw new Error('Password is required')

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
  return data
}
