import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import LandingPage from './components/LandingPage'
import AuthPage from './components/AuthPage'
import { useAuthStore } from './stores/useAuthStore'
import Dashboard from './components/Dashboard'
import { useEffect } from 'react'
import { supabase } from './lib/supabase'

function App() {
  const { user, loading, setUser } = useAuthStore()

  useEffect(() => {
    // Define function to check for existing session on app load
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      // setUser automatically sets loading to false in your store!
    }

    // 1. Check for an existing session on mount
    checkSession()

    // 2. Listen for changes (Login, Logout, Token Refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    // 3. Cleanup subscription on unmount
    return () => subscription.unsubscribe()
  }, [setUser])

  if (loading) return <div className='min-h-screen bg-black' />

  return (
    <Routes>
      {/* Home Route */}
      <Route path='/' element={<LandingPage />} />

      {/* Auth Route: If already logged in, skip to dashboard */}
      <Route
        path='/auth'
        element={!user ? <AuthPage /> : <Navigate to='/dashboard' />}
      />

      {/* Protected Dashboard Route */}
      <Route
        path='/dashboard'
        element={user ? <Dashboard /> : <Navigate to='/auth' />}
      />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
