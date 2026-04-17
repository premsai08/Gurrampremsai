export function Card({ title, description, children }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-500 hover:border-lime-400/60">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-lime-500/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="h-10 w-10 rounded-full border border-lime-400/40 bg-lime-400/10 shadow-[0_0_18px_rgba(180,255,57,0.18)]" />
        </div>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
        {children}
      </div>
    </div>
  );
}
