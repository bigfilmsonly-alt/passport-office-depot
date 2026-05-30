import Link from 'next/link';

export function ValuePropSection() {
  return (
    <section className="px-5 py-6">
      <div className="grid grid-cols-3 gap-3">
        <PropCard
          href="/documents"
          icon={
            <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          title="Document Preparation"
        />
        <PropCard
          href="/review"
          icon={
            <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          }
          title="Review & Assistance"
        />
        <PropCard
          href="/photos"
          icon={
            <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          title="Passport Photos"
        />
      </div>
    </section>
  );
}

function PropCard({ href, icon, title }: { href: string; icon: React.ReactNode; title: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center p-3 bg-white rounded-2xl border-2 border-gold shadow-md shadow-gold/20 active:scale-95 transition-transform ring-2 ring-gold/40 ring-offset-1"
    >
      <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-2">
        {icon}
      </div>
      <p className="text-[11px] font-bold text-ink text-center leading-tight">{title}</p>
    </Link>
  );
}
