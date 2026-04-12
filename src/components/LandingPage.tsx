import { Rocket, UserCircle } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-black text-slate-100 selection:bg-indigo-500/30'>
      {/* Subtle Background Glow */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]' />
        <div className='absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]' />
      </div>

      {/* Navigation */}
      <nav className='relative z-10 flex items-center justify-between px-6 py-6 mx-auto max-w-7xl'>
        <div className='text-2xl font-bold tracking-tighter text-white'>
          DevTrack<span className='text-indigo-500'>.io</span>
        </div>
        <div className='hidden md:flex gap-8 text-sm font-medium text-slate-400'>
          <a href='#' className='hover:text-white transition-colors'>
            Features
          </a>
          <a href='#' className='hover:text-white transition-colors'>
            Pricing
          </a>
          <a href='#' className='hover:text-white transition-colors'>
            Changelog
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className='relative z-10 flex flex-col items-center justify-center px-6 mt-20 text-center lg:mt-32'>
        <div className='inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium tracking-wide text-indigo-400 uppercase rounded-full border border-indigo-500/30 bg-indigo-500/10 animate-fade-in'>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-indigo-500'></span>
          </span>
          Now in Private Beta
        </div>

        <h1 className='max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl'>
          Track your job apps <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 to-indigo-600'>
            with engineering precision.
          </span>
        </h1>

        <p className='max-w-2xl mt-8 text-lg leading-relaxed text-slate-400'>
          A minimalist application tracker built for developers. Manage your
          pipeline, store resumes, and automate follow-ups in one dark-themed
          workspace.
        </p>

        {/* Buttons */}
        <div className='flex flex-col items-center gap-4 mt-12 sm:flex-row'>
          <button className='group relative flex items-center gap-2 px-8 py-4 font-bold text-white transition-all bg-indigo-600 rounded-xl hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.4)]'>
            <Rocket className='w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
            Get Started
          </button>

          <button className='flex items-center gap-2 px-8 py-4 font-bold transition-all border rounded-xl border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-slate-700 text-slate-300 active:scale-95'>
            <UserCircle className='w-5 h-5 text-indigo-400' />
            Sign in as Guest
          </button>
        </div>

        {/* Mockup Preview (Empty Glassmorphism Box) */}
        <div className='w-full max-w-5xl mt-24 aspect-video rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden relative group'>
          <div className='absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
          <div className='flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5'>
            <div className='w-3 h-3 rounded-full bg-red-500/50' />
            <div className='w-3 h-3 rounded-full bg-amber-500/50' />
            <div className='w-3 h-3 rounded-full bg-emerald-500/50' />
          </div>
          <div className='p-8 flex flex-col gap-4'>
            <div className='h-8 w-1/3 rounded-md bg-white/5 animate-pulse' />
            <div className='grid grid-cols-3 gap-4 mt-4'>
              <div className='h-32 rounded-lg bg-white/5 border border-white/5' />
              <div className='h-32 rounded-lg bg-white/5 border border-white/5' />
              <div className='h-32 rounded-lg bg-white/5 border border-white/5' />
            </div>
          </div>
        </div>
      </main>

      <footer className='py-12 mt-20 text-sm text-center border-t border-white/5 text-slate-500'>
        &copy; 2026 DevTrack.io — Built with React & Supabase
      </footer>
    </div>
  )
}

export default LandingPage
