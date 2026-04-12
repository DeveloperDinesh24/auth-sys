import { useState } from 'react'
import { Mail, Lock, ArrowRight, Globe, GitBranch } from 'lucide-react'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='min-h-screen bg-black flex flex-col justify-center items-center px-6 selection:bg-indigo-500/30'>
      {/* Background Decor */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-600/10 blur-[120px] rounded-full' />
      </div>

      <div className='relative z-10 w-full max-w-md'>
        {/* Logo / Header */}
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold text-white tracking-tighter'>
            {isLogin ? 'Welcome Back' : 'Join the Pipeline'}
          </h2>
          <p className='text-slate-400 mt-2'>
            {isLogin
              ? 'Enter your credentials to access DevTrack'
              : 'Start tracking your career growth today'}
          </p>
        </div>

        {/* Auth Card */}
        <div className='bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl'>
          <form className='space-y-5' onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className='block text-sm font-medium text-slate-300 mb-2'>
                Email Address
              </label>
              <div className='relative group'>
                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors' />
                <input
                  type='email'
                  placeholder='name@company.com'
                  className='w-full bg-black/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-slate-300 mb-2'>
                Password
              </label>
              <div className='relative group'>
                <Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors' />
                <input
                  type='password'
                  placeholder='••••••••'
                  className='w-full bg-black/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all'
                />
              </div>
            </div>

            <button className='w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/20'>
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className='w-4 h-4' />
            </button>
          </form>

          {/* Divider */}
          <div className='relative my-8'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-slate-800'></div>
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-slate-900/0 px-2 text-slate-500 backdrop-blur-sm'>
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Logins */}
          <div className='grid grid-cols-2 gap-4'>
            <button className='flex items-center justify-center gap-2 bg-black/40 border border-slate-800 hover:bg-slate-800 py-2.5 rounded-xl text-sm font-medium text-slate-300 transition-all'>
              <Globe className='w-4 h-4' /> Google
            </button>
            <button className='flex items-center justify-center gap-2 bg-black/40 border border-slate-800 hover:bg-slate-800 py-2.5 rounded-xl text-sm font-medium text-slate-300 transition-all'>
              <GitBranch className='w-4 h-4' /> Github
            </button>
          </div>
        </div>

        {/* Toggle link */}
        <p className='text-center mt-8 text-slate-500 text-sm'>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className='text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4 transition-colors'
          >
            {isLogin ? 'Sign up for free' : 'Log in here'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default AuthPage
