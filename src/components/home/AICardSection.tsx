export function AICardSection() {
  return (
    <section className="px-5 pb-8">
      <div className="bg-gradient-to-br from-navy to-navy-2 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg">✨</div>
          <div>
            <p className="font-semibold text-sm">AI Passport Concierge</p>
            <p className="text-[11px] text-white/60">Instant answers, 24/7</p>
          </div>
        </div>
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          Not sure what you need? Our AI assistant can help you figure out the right service,
          estimate costs, and explain timelines — all in seconds.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Renewal help', 'Visa requirements', 'Emergency options', 'Pricing info'].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white/90 cursor-pointer hover:bg-white/20 transition-colors"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
