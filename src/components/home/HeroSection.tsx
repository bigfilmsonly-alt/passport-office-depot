import Link from 'next/link';
import Image from 'next/image';
import { YEARS_IN_BUSINESS } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy guilloche-bg">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold" />

      <div className="px-5 pt-8 pb-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-xs text-white/80 font-medium">Trusted for {YEARS_IN_BUSINESS} years</span>
        </div>

        {/* POD Logo */}
        <div className="mx-auto mb-5 w-[220px] h-[220px] relative">
          <Image
            src="/pod-logo.png"
            alt="The POD — Passport Office Depot"
            width={220}
            height={220}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* CTA */}
        <Link
          href="/apply"
          className="inline-flex items-center justify-center w-full max-w-[300px] py-3.5 px-6 bg-red text-white font-semibold rounded-2xl shadow-lg shadow-red/30 text-base transition-transform active:scale-[0.97] mb-3"
        >
          Get Your Passport Fast
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </Link>

        <p className="text-white/50 text-xs">
          From $59 · Free passport photos · 100% money-back guarantee
        </p>

        {/* Security badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
          <svg className="w-3.5 h-3.5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[11px] text-white/60">100% Secure · Gov&apos;t Authorized · Bank-Level Encryption</span>
        </div>
      </div>
    </section>
  );
}
