'use client';

import Link from 'next/link';
import { CollapsibleSection } from './CollapsibleSection';
import { GUARANTEE, PHONE, PHONE_TEL, YEARS_IN_BUSINESS, PRESS_MENTIONS } from '@/lib/constants';
import { trackEvent } from '@/lib/track';
import { useEffect, useRef, useState } from 'react';

export function HomeDropdowns() {
  return (
    <div className="bg-white rounded-t-2xl border-t border-line">
      {/* Guarantee — highest converting, default open */}
      <CollapsibleSection title="100% On-Time Guarantee" icon="🛡️" defaultOpen>
        <div className="bg-green/5 border border-green/20 rounded-2xl p-4 text-center">
          <p className="text-sm font-bold text-green mb-1">Money-Back Promise</p>
          <p className="text-sm text-ink/70 leading-relaxed">
            {GUARANTEE}. We&apos;ve maintained a 99.8% success rate across 2M+ passports processed since 1976.
          </p>
          <Link
            href="/documents"
            className="inline-flex mt-3 px-5 py-2.5 bg-green text-white font-semibold rounded-xl text-sm active:scale-95 transition-transform"
          >
            Start Your Application
          </Link>
        </div>
      </CollapsibleSection>

      {/* Price Comparison */}
      <CollapsibleSection title="Why We're #1 in Value" icon="💰">
        <PriceCompare />
      </CollapsibleSection>

      {/* Reviews */}
      <CollapsibleSection title="Customer Reviews (4.9/5)" icon="⭐">
        <Reviews />
      </CollapsibleSection>

      {/* How It Works */}
      <CollapsibleSection title="How It Works — 3 Steps" icon="📋">
        <div className="space-y-3">
          <Step num="1" title="Get Your Quote" desc="Tell us what you need in 60 seconds. Our smart form calculates your exact price." />
          <Step num="2" title="Submit Documents" desc="We review everything, take your free passport photo, and handle the paperwork." />
          <Step num="3" title="Get Your Passport" desc="Track your order in real time. We deliver on time, guaranteed." />
          <Link
            href="/apply"
            className="flex items-center justify-center w-full py-3 bg-navy text-white font-semibold rounded-xl text-sm active:scale-[0.97] transition-transform mt-2"
          >
            Get My Quote
          </Link>
        </div>
      </CollapsibleSection>

      {/* Why Us */}
      <CollapsibleSection title={`Why Choose Us (${YEARS_IN_BUSINESS} Years)`} icon="🏛️">
        <div className="grid grid-cols-2 gap-2.5">
          <Reason icon="💰" title="Lowest Prices" desc="From $59 — up to 75% less" />
          <Reason icon="📸" title="Free Photos" desc="Compliant photos included" />
          <Reason icon="✅" title="Error-Free" desc="Expert review team" />
          <Reason icon="🔒" title="Gov't Authorized" desc="Bank-level encryption" />
          <Reason icon="⚡" title="24-48hr Rush" desc="Emergency available" />
          <Reason icon="🛡️" title="Money Back" desc="100% on-time guarantee" />
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-ink/40 uppercase tracking-wider font-medium mb-1.5">As Featured In</p>
          <div className="flex items-center justify-center gap-4">
            {PRESS_MENTIONS.map((name) => (
              <span key={name} className="text-xs font-semibold text-ink/25">{name}</span>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      {/* Emergency */}
      <CollapsibleSection title="Emergency — Need It Tomorrow?" icon="🚨">
        <a
          href={PHONE_TEL}
          onClick={() => trackEvent('call_clicked', { source: 'home_dropdown' })}
          className="block bg-red rounded-2xl p-4 text-center text-white active:scale-[0.98] transition-transform"
        >
          <p className="font-bold text-base mb-0.5">Call Our 24/7 Hotline</p>
          <p className="text-xl font-bold font-mono tracking-wide">{PHONE}</p>
          <p className="text-xs text-white/60 mt-1">Tap to call · 24-48 hour emergency service</p>
        </a>
      </CollapsibleSection>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{num}</div>
      <div>
        <p className="text-sm font-bold text-ink">{title}</p>
        <p className="text-xs text-ink/50">{desc}</p>
      </div>
    </div>
  );
}

function Reason({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-paper rounded-xl p-2.5">
      <span className="text-base">{icon}</span>
      <p className="text-xs font-bold text-ink mt-0.5">{title}</p>
      <p className="text-[10px] text-ink/50">{desc}</p>
    </div>
  );
}

function PriceCompare() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div ref={ref} className="space-y-3">
      <div>
        <div className="flex justify-between items-end mb-1">
          <span className="text-xs text-ink/60">Typical Expediter</span>
          <span className="text-xs font-bold text-red">$250+</span>
        </div>
        <div className="h-7 bg-red/10 rounded-lg overflow-hidden">
          <div className={`h-full bg-red/30 rounded-lg transition-all duration-1000 ${visible ? 'w-full' : 'w-0'}`} />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-end mb-1">
          <span className="text-xs font-semibold text-navy">Passport Office Depot</span>
          <span className="text-xs font-bold text-green">From $59</span>
        </div>
        <div className="h-7 bg-green/10 rounded-lg overflow-hidden">
          <div
            className={`h-full bg-green/80 rounded-lg flex items-center justify-end pr-2 transition-all duration-1000 delay-300 ${visible ? 'w-[35%]' : 'w-0'}`}
          >
            <span className="text-[9px] font-bold text-white whitespace-nowrap">SAVE 75%+</span>
          </div>
        </div>
      </div>
      <p className="text-center text-[11px] text-ink/40">+ Free passport photos with every order</p>
    </div>
  );
}

function Reviews() {
  const reviews = [
    { author: 'Maria S.', loc: 'Houston, TX', body: 'Got my passport renewed in just 5 days! Unbeatable price.' },
    { author: 'James K.', loc: 'Chicago, IL', body: 'Emergency passport in 24 hours — saved our family vacation!' },
    { author: 'Sarah L.', loc: 'Miami, FL', body: 'So easy and affordable. The whole process was seamless.' },
    { author: 'Michael R.', loc: 'Los Angeles, CA', body: 'Free photos saved me $15 on top of their already low prices.' },
  ];

  return (
    <div className="space-y-2.5">
      {reviews.map((r, i) => (
        <div key={i} className="bg-paper rounded-xl p-3">
          <div className="flex gap-0.5 mb-1">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xs text-ink leading-relaxed">&ldquo;{r.body}&rdquo;</p>
          <p className="text-[10px] text-ink/40 mt-1 font-medium">{r.author} · {r.loc}</p>
        </div>
      ))}
      <p className="text-center text-[11px] text-ink/40">50,000+ verified reviews</p>
    </div>
  );
}
