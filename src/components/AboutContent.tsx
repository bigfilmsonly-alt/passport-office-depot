'use client';

import { useState } from 'react';
import { BRAND, CEO, COO, COO_TITLE, YEARS_IN_BUSINESS, HQ_ADDRESS, PHONE, PHONE_TEL, GUARANTEE } from '@/lib/constants';
import { trackEvent } from '@/lib/track';

type FaqItem = { q: string; a: string };

export function AboutContent({ faqItems }: { faqItems: FaqItem[] }) {
  return (
    <div className="pb-8">
      {/* Header */}
      <div className="bg-navy guilloche-bg px-5 pt-8 pb-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold" />
        <h1 className="font-display text-2xl font-bold text-white text-center mb-1">
          About Us
        </h1>
        <p className="text-center text-white/60 text-sm">
          Trusted since 1976 · {YEARS_IN_BUSINESS} years of service
        </p>
      </div>

      {/* Leadership */}
      <div className="px-5 pt-6">
        <h2 className="font-display text-lg font-bold text-ink mb-4">Our Leadership</h2>
        <div className="space-y-3">
          <LeaderCard name={CEO} title="Chief Executive Officer" desc={`Founded ${BRAND} in 1976 with a mission to make passport services affordable for every American.`} />
          <LeaderCard name={COO} title={COO_TITLE} desc="Oversees daily operations and ensures every application meets our 99.8% success standard." />
        </div>
      </div>

      {/* Founder Guarantee */}
      <div className="px-5 pt-8">
        <div className="bg-navy rounded-2xl p-5 text-center">
          <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="text-2xl">🤝</span>
          </div>
          <h3 className="font-display text-lg font-bold text-white mb-2">The Founder&apos;s Guarantee</h3>
          <p className="text-sm text-white/80 leading-relaxed mb-2">
            &ldquo;For nearly {YEARS_IN_BUSINESS} years, I&apos;ve personally stood behind every passport we process.
            {GUARANTEE}. That&apos;s not just a policy — it&apos;s my word.&rdquo;
          </p>
          <p className="text-gold-soft text-sm font-semibold">— {CEO}, Founder & CEO</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-5 pt-8">
        <h2 className="font-display text-lg font-bold text-ink mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <FaqAccordion key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-5 pt-8">
        <h2 className="font-display text-lg font-bold text-ink mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickLink icon="📍" label="Visit Us" detail={HQ_ADDRESS} />
          <QuickLink icon="📧" label="Email Us" detail="info@passportofficedepot.com" />
          <QuickLink icon="🕐" label="Hours" detail="24/7/365" />
          <QuickLink icon="📱" label="Download App" detail="Coming Soon" />
        </div>
      </div>

      {/* 24/7 Phone */}
      <div className="px-5 pt-8">
        <a
          href={PHONE_TEL}
          onClick={() => trackEvent('call_clicked', { source: 'about' })}
          className="block bg-green rounded-2xl p-5 text-center text-white active:scale-[0.98] transition-transform"
        >
          <p className="text-2xl mb-1">📞</p>
          <h3 className="font-display text-lg font-bold mb-1">Call Us 24/7</h3>
          <p className="text-xl font-bold font-mono">{PHONE}</p>
          <p className="text-sm text-white/70 mt-1">Real humans, any time</p>
        </a>
      </div>
    </div>
  );
}

function LeaderCard({ name, title, desc }: { name: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl border border-line p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center text-navy font-display font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-ink">{name}</p>
          <p className="text-xs text-ink/50">{title}</p>
        </div>
      </div>
      <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-line overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3.5 flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-ink pr-4">{question}</span>
        <svg
          className={`w-4 h-4 text-ink/40 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-3.5 text-sm text-ink/60 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}

function QuickLink({ icon, label, detail }: { icon: string; label: string; detail: string }) {
  return (
    <div className="bg-white rounded-xl border border-line p-3.5">
      <span className="text-xl block mb-1">{icon}</span>
      <p className="text-sm font-semibold text-ink">{label}</p>
      <p className="text-xs text-ink/50 leading-relaxed">{detail}</p>
    </div>
  );
}
