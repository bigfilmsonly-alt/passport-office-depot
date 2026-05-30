import Link from 'next/link';
import { BRAND, HQ_ADDRESS, PHONE, PHONE_TEL } from '@/lib/constants';
import { STATS } from '@/lib/stats';

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 px-5 pt-8 pb-28">
      {/* Brand */}
      <div className="text-center mb-6">
        <p className="font-display text-lg font-bold text-white">{BRAND}</p>
        <p className="text-xs text-white/40 mt-0.5">{STATS.foundedPhrase} · {STATS.trustBBB}</p>
      </div>

      {/* Contact */}
      <div className="space-y-2 text-center text-sm mb-6">
        <a href={PHONE_TEL} className="block text-gold font-semibold">{PHONE}</a>
        <p className="text-xs">{HQ_ADDRESS}</p>
        <p className="text-xs">info@passportofficedepot.com · Open 24/7/365</p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs mb-6">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
        <Link href="/apply" className="hover:text-white transition-colors">Get Quote</Link>
        <Link href="/track" className="hover:text-white transition-colors">Track Order</Link>
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10 pt-4 space-y-2">
        <p className="text-[10px] text-white/30 leading-relaxed text-center">
          {STATS.disclaimer}
        </p>
        <p className="text-[10px] text-gold/50 leading-relaxed text-center font-medium">
          {STATS.imposterNote}
        </p>
        <p className="text-[10px] text-white/20 text-center mt-2">
          &copy; {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
