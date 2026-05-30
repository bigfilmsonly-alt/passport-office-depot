'use client';

import { PHONE, PHONE_TEL } from '@/lib/constants';
import { trackEvent } from '@/lib/track';

export function EmergencyBanner() {
  return (
    <section className="px-5 pb-8">
      <a
        href={PHONE_TEL}
        onClick={() => trackEvent('call_clicked', { source: 'emergency_banner' })}
        className="block bg-red rounded-2xl p-5 text-center text-white shadow-lg shadow-red/20 active:scale-[0.98] transition-transform"
      >
        <p className="text-2xl mb-1">🚨</p>
        <h3 className="font-display text-lg font-bold mb-1">
          Need It Tomorrow?
        </h3>
        <p className="text-sm text-white/80 mb-2">
          Call our 24/7 emergency hotline now
        </p>
        <p className="text-xl font-bold font-mono tracking-wide">
          {PHONE}
        </p>
        <p className="text-xs text-white/60 mt-1">Tap to call · Available 24/7/365</p>
      </a>
    </section>
  );
}
