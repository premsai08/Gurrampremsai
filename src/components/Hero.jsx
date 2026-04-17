import { motion } from 'framer-motion';

export function Hero({ title, subtitle, ctaText, onCtaClick }) {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute right-[-8%] top-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-1/3 bottom-[-10%] h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.36em] text-lime-300">Premium Developer Portfolio</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] text-white sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {subtitle}
          </p>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center rounded-full bg-lime-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(180,255,57,0.3)] transition duration-300 hover:bg-lime-300"
          >
            {ctaText}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotateY: 15 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-lime-400/20 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,0,0,0.22)] backdrop-blur-md"
        >
          <div className="grid gap-3">
            <span className="inline-flex items-center rounded-full bg-lime-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-lime-200">
              Industrial green aesthetic
            </span>
            <div className="space-y-3">
              <div className="h-3 rounded-full bg-lime-400/20" />
              <div className="h-3 rounded-full bg-lime-400/15 w-5/6" />
              <div className="h-3 rounded-full bg-lime-400/15 w-2/3" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-20 rounded-3xl bg-lime-400/10" />
              <div className="h-20 rounded-3xl bg-lime-400/10" />
              <div className="h-20 rounded-3xl bg-lime-400/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
