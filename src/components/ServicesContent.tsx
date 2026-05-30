'use client';

import Link from 'next/link';
import Image from 'next/image';
import { VISA_COUNTRIES } from '@/lib/constants';

const PASSPORT_SERVICES = [
  { id: 'renew', label: 'Passport Renewal', price: 59, desc: 'Renew your expired or expiring U.S. passport (expired within 5 years)', icon: '🔄', time: 'From 4-6 weeks' },
  { id: 'new', label: 'New Adult Passport', price: 79, desc: 'First-time passport application for adults age 16+', icon: '🆕', time: 'From 4-6 weeks' },
  { id: 'child', label: 'Minor Passport', price: 79, desc: 'Passports for infants to age 15 — both parents must consent', icon: '👶', time: 'From 4-6 weeks' },
  { id: 'lost_stolen', label: 'Lost/Stolen Replacement', price: 99, desc: 'Replacement passport with expedited processing available', icon: '🔍', time: 'From 4-6 weeks' },
  { id: 'damaged', label: 'Damaged Passport', price: 89, desc: 'Replace a water-damaged, torn, or mutilated passport', icon: '💧', time: 'From 4-6 weeks' },
  { id: 'name_change', label: 'Name/Gender Change', price: 69, desc: 'Update your passport after marriage, divorce, or legal name change', icon: '✏️', time: 'From 4-6 weeks' },
  { id: 'second', label: 'Second Valid Passport', price: 79, desc: 'For frequent travelers who need a second passport book', icon: '📘', time: 'From 4-6 weeks' },
  { id: 'emergency', label: 'Emergency Passport', price: 199, desc: 'Travel within 72 hours? We can get your passport in 24-48 hrs', icon: '⚡', time: '24-48 hours' },
];

const MORE_SERVICES = [
  { label: 'Passport Photos', desc: 'Free with any service. Compliant 2x2" digital or printed. Also available standalone.', icon: '📸' },
  { label: 'Passport Card', desc: 'Add to any passport service for no extra service fee. $30 gov\'t fee applies.', icon: '💳' },
  { label: 'Document Authentication', desc: 'Apostille & authentication services for international document use.', icon: '📋' },
  { label: 'Birth Certificate', desc: 'Certified copy replacement from any U.S. state.', icon: '📄' },
  { label: 'Concierge Service', desc: 'White-glove service — we handle everything start to finish.', icon: '🎩' },
  { label: 'Corporate Accounts', desc: 'B2B solutions for businesses & travel agencies with volume pricing.', icon: '🏢' },
  { label: 'Passport Review', desc: 'Expert review of your self-submitted application for errors before mailing.', icon: '✅' },
  { label: 'Renewal Reminders', desc: 'Free passport expiration reminders so you never miss a renewal.', icon: '🔔' },
];

export function ServicesContent() {
  return (
    <div className="pb-8">
      {/* Header */}
      <div className="bg-navy guilloche-bg px-5 pt-8 pb-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold" />
        <div className="flex justify-center mb-3">
          <Image src="/pod-logo.png" alt="The POD" width={80} height={80} className="object-contain" />
        </div>
        <h1 className="font-display text-2xl font-bold text-white text-center mb-1">
          Our Services
        </h1>
        <p className="text-center text-white/60 text-sm">
          Error-free applications · 200+ visa destinations · 24/7 support
        </p>
      </div>

      {/* Security Banner */}
      <div className="bg-green/10 border-b border-green/20 px-5 py-2.5 flex items-center justify-center gap-2">
        <svg className="w-4 h-4 text-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="text-xs font-medium text-green">100% Secure · Gov&apos;t Registered · Bank-Level Encryption</span>
      </div>

      {/* Passport Services */}
      <div className="px-5 pt-6">
        <h2 className="font-display text-lg font-bold text-ink mb-1">Passport Services</h2>
        <p className="text-xs text-ink/50 mb-4">Every application reviewed by our expert Passport Review Team</p>
        <div className="space-y-3">
          {PASSPORT_SERVICES.map((svc) => (
            <Link
              key={svc.id}
              href="/documents"
              className="flex items-center gap-3 bg-white rounded-2xl border border-line p-4 shadow-sm active:scale-[0.98] transition-transform"
            >
              <span className="text-2xl">{svc.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-ink">{svc.label}</p>
                <p className="text-xs text-ink/50">{svc.desc}</p>
                <p className="text-xs text-green font-medium mt-0.5">{svc.time}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-ink/40">from</p>
                <p className="text-lg font-bold text-navy">${svc.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Passport Photos */}
      <div className="px-5 pt-8">
        <div className="bg-gradient-to-br from-green/10 to-green/5 rounded-2xl border border-green/20 p-5 text-center">
          <span className="text-3xl block mb-2">📸</span>
          <h2 className="font-display text-lg font-bold text-ink mb-1">Free Passport Photos</h2>
          <p className="text-sm text-ink/60 mb-1">
            Compliant 2x2&quot; passport photos included FREE with every service.
          </p>
          <p className="text-xs text-ink/40 mb-3">
            Immediate digital photos, professionally edited via our app, or shipped to you. Standalone available.
          </p>
          <Link
            href="/photos"
            className="inline-flex px-5 py-2.5 bg-green text-white font-semibold rounded-xl text-sm active:scale-95 transition-transform"
          >
            Get Passport Photos
          </Link>
        </div>
      </div>

      {/* Visa Services */}
      <div className="px-5 pt-8">
        <h2 className="font-display text-lg font-bold text-ink mb-1">Travel Visas</h2>
        <p className="text-sm text-ink/50 mb-1">200+ destinations covered</p>
        <p className="text-xs text-ink/40 mb-4">Tourist · Business · Work · Student · E-Visa · Transit</p>
        <div className="flex flex-wrap gap-2">
          {VISA_COUNTRIES.map((country) => (
            <button
              key={country.name}
              className="px-3 py-2 bg-white rounded-xl text-sm font-medium text-ink border border-line hover:bg-paper transition-colors active:scale-95"
            >
              <span className="block text-center text-lg mb-0.5">{country.flag}</span>
              <span className="text-xs">{country.name}</span>
            </button>
          ))}
        </div>
        <p className="text-xs text-ink/40 mt-3">From $89 · Processing times vary by country · Multiple visa types available</p>
      </div>

      {/* More Services */}
      <div className="px-5 pt-8">
        <h2 className="font-display text-lg font-bold text-ink mb-4">More Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {MORE_SERVICES.map((svc) => (
            <div key={svc.label} className="bg-white rounded-2xl border border-line p-3.5 shadow-sm">
              <span className="text-xl block mb-1.5">{svc.icon}</span>
              <p className="text-sm font-bold text-ink mb-0.5">{svc.label}</p>
              <p className="text-xs text-ink/50 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-5 pt-8">
        <Link
          href="/documents"
          className="flex items-center justify-center w-full py-3.5 bg-red text-white font-semibold rounded-2xl text-sm shadow-lg shadow-red/30 active:scale-[0.97] transition-transform"
        >
          Start Your Application Now
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </Link>
      </div>
    </div>
  );
}
