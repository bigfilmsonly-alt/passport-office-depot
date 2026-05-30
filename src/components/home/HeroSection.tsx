import Link from 'next/link';
import Image from 'next/image';
import { STATS } from '@/lib/stats';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gold border frame all around */}
      <div className="m-2 rounded-2xl border-2 border-gold bg-navy guilloche-bg overflow-hidden shadow-lg shadow-gold/10">
        <div className="px-5 pt-7 pb-7 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-xs text-white/80 font-medium">{STATS.foundedPhrase} · {STATS.yearsInBusiness} Years Trusted</span>
          </div>

          {/* POD Logo */}
          <div className="mx-auto mb-4 w-[200px] h-[200px] relative">
            <Image
              src="/pod-logo.png"
              alt="The POD — Passport Office Depot"
              width={200}
              height={200}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Dual CTA — Passport + Visa */}
          <div className="flex gap-2 mb-3 max-w-[320px] mx-auto">
            <Link
              href="/apply"
              className="flex-1 flex items-center justify-center py-3 px-4 bg-red text-white font-semibold rounded-xl shadow-lg shadow-red/30 text-sm transition-transform active:scale-[0.97]"
            >
              🛂 Passport
            </Link>
            <Link
              href="/apply?service=visa"
              className="flex-1 flex items-center justify-center py-3 px-4 bg-gold text-ink font-semibold rounded-xl shadow-lg shadow-gold/30 text-sm transition-transform active:scale-[0.97]"
            >
              🌍 Travel Visa
            </Link>
          </div>

          <p className="text-white/50 text-xs">
            From $59 · Free photos · 200+ visa destinations · 100% guarantee
          </p>

          {/* Security badge */}
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
            <svg className="w-3.5 h-3.5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[11px] text-white/60">Gov&apos;t Authorized · BBB A+ · Bank-Level Encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
}
