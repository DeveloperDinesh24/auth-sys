import { useAuthStore } from '../stores/useAuthStore'
import { supabase } from '../lib/supabase'
import { LogOut, ShieldCheck, User, Clock, Key } from 'lucide-react'

const Dashboard = () => {
  const { user, clearAuth } = useAuthStore()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    clearAuth()
  }

  return (
    <div className='min-h-screen bg-black text-white p-6 md:p-12'>
      {/* Background Glow */}
      <div className='fixed inset-0 pointer-events-none'>
        <div className='absolute top-0 right-0 w-125 h-125 bg-indigo-600/5 blur-[120px] rounded-full' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto'>
        {/* Header */}
        <header className='flex justify-between items-center mb-12'>
          <div>
            <h1 className='text-2xl font-bold tracking-tighter'>
              Control <span className='text-indigo-500'>Center</span>
            </h1>
            <p className='text-slate-500 text-sm'>Auth System v1.0.0</p>
          </div>
          <button
            onClick={handleLogout}
            className='flex items-center gap-2 bg-slate-900 hover:bg-red-950/30 border border-slate-800 hover:border-red-500/50 px-4 py-2 rounded-lg text-sm font-medium transition-all group'
          >
            <LogOut className='w-4 h-4 text-slate-400 group-hover:text-red-500' />
            <span>Sign Out</span>
          </button>
        </header>

        {/* Status Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-slate-900/40 border border-white/10 p-6 rounded-2xl backdrop-blur-md'>
            <div className='bg-indigo-500/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4'>
              <ShieldCheck className='text-indigo-400 w-6 h-6' />
            </div>
            <h3 className='text-slate-400 text-sm font-medium'>
              Session Status
            </h3>
            <p className='text-xl font-bold mt-1 text-emerald-400'>
              Authenticated
            </p>
          </div>

          <div className='bg-slate-900/40 border border-white/10 p-6 rounded-2xl backdrop-blur-md md:col-span-2'>
            <div className='bg-indigo-500/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4'>
              <User className='text-indigo-400 w-6 h-6' />
            </div>
            <h3 className='text-slate-400 text-sm font-medium'>
              Active Account
            </h3>
            <p className='text-xl font-bold mt-1 truncate'>{user?.email}</p>
          </div>
        </div>

        {/* Technical Details Card */}
        <div className='bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden'>
          <div className='px-6 py-4 border-b border-white/10 bg-white/5'>
            <h3 className='font-semibold flex items-center gap-2'>
              <Key className='w-4 h-4 text-indigo-400' />
              User Metadata (JWT Payload)
            </h3>
          </div>
          <div className='p-6 space-y-4'>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-slate-500 flex items-center gap-2'>
                <Clock className='w-4 h-4' /> Last Sign In:
              </span>
              <span className='font-mono text-indigo-300'>
                {user
                  ? new Date(user.last_sign_in_at!).toLocaleString()
                  : 'N/A'}
              </span>
            </div>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-slate-500'>Provider:</span>
              <span className='bg-slate-800 px-2 py-0.5 rounded text-xs uppercase font-bold tracking-widest text-slate-300'>
                {user?.app_metadata.provider}
              </span>
            </div>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-slate-500'>Unique ID:</span>
              <span className='font-mono text-xs text-slate-400'>
                {user?.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
