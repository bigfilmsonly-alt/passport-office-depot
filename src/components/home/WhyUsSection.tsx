import { YEARS_IN_BUSINESS, PRESS_MENTIONS } from '@/lib/constants';

const REASONS = [
  { icon: '💰', title: 'Lowest Prices', desc: 'Service fees from just $59 — up to 75% less than competitors.' },
  { icon: '📸', title: 'Free Photos', desc: 'Compliant passport photos included free — digital or printed, professionally edited.' },
  { icon: '🏛️', title: `${YEARS_IN_BUSINESS} Years Trusted`, desc: 'BBB A+ rated, PAVAA founding member, 2M+ passports processed.' },
  { icon: '✅', title: 'Error-Free Applications', desc: 'Expert Passport Review Team checks every application before submission.' },
  { icon: '🔒', title: 'Gov\'t Authorized', desc: '100% secure, government-registered agency with bank-level encryption.' },
  { icon: '⚡', title: '24-48hr Emergency', desc: 'Travel within 72 hours? We can get your passport in as little as 24 hrs.' },
  { icon: '🤖', title: 'AI-Powered', desc: 'Our AI concierge answers your questions instantly, 24/7/365.' },
  { icon: '🔒', title: 'Money-Back Guarantee', desc: '100% on-time or your service fee back. Zero risk.' },
];

export function WhyUsSection() {
  return (
    <section className="px-5 pb-8">
      <h2 className="font-display text-lg font-bold text-ink text-center mb-5">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {REASONS.map((r, i) => (
          <div key={i} className="bg-white rounded-2xl border border-line p-3.5 shadow-sm">
            <span className="text-xl mb-1.5 block">{r.icon}</span>
            <p className="text-sm font-bold text-ink mb-0.5">{r.title}</p>
            <p className="text-xs text-ink/60 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* Press Mentions */}
      <div className="mt-6 text-center">
        <p className="text-xs text-ink/40 uppercase tracking-wider font-medium mb-2">As Featured In</p>
        <div className="flex items-center justify-center gap-4">
          {PRESS_MENTIONS.map((name) => (
            <span key={name} className="text-sm font-semibold text-ink/30">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
