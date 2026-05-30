'use client';

import { useState } from 'react';

export function ReferralBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <section className="px-5 pb-8">
      <div className="relative bg-gradient-to-r from-gold/20 to-gold-soft/30 rounded-2xl p-5 border border-gold/30">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-ink/30 hover:text-ink/60"
          aria-label="Dismiss"
        >
          ✕
        </button>
        <div className="text-center">
          <p className="text-2xl mb-1">🎁</p>
          <h3 className="font-display text-lg font-bold text-ink mb-1">
            Give $20, Get $20
          </h3>
          <p className="text-sm text-ink/70 mb-3">
            Refer a friend and you both save $20 on your next passport service.
          </p>
          <button className="px-5 py-2.5 bg-gold text-white font-semibold rounded-xl text-sm transition-transform active:scale-95 shadow-sm">
            Share Your Referral Link
          </button>
        </div>
      </div>
    </section>
  );
}
