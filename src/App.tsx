import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import LandingPage from './components/LandingPage'
import AuthPage from './components/AuthPage'
import { useAuthStore } from './stores/useAuthStore'

function App() {
  const { user, loading } = useAuthStore()

  // Show a dark loader while checking the Supabase session
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
        element={
          user ? (
            <div className='text-white p-20'>
              Willkommen im Dashboard, {user.email}!
            </div>
          ) : (
            <Navigate to='/auth' />
          )
        }
      />

      {/* 404 Catch-all */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
