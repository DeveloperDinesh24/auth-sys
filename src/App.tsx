import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import LandingPage from './components/LandingPage'
import AuthPage from './components/AuthPage'
import { useAuthStore } from './stores/useAuthStore'
import Dashboard from './components/Dashboard'

function App() {
  const { user, loading } = useAuthStore()

  // if (loading) return <div className='min-h-screen bg-black' />

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
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
