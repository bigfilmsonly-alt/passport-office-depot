'use client';

import { useState } from 'react';
import Image from 'next/image';

type ServiceItem = {
  title: string;
  desc: string;
  embedUrl: string;
  icon: string;
};

type Props = {
  title: string;
  subtitle: string;
  services: ServiceItem[];
  defaultEmbedUrl: string;
};

export function EmbeddedService({ title, subtitle, services, defaultEmbedUrl }: Props) {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState('');

  const handleOpen = (svc: ServiceItem) => {
    setActiveUrl(svc.embedUrl);
    setActiveTitle(svc.title);
  };

  const handleBack = () => {
    setActiveUrl(null);
    setActiveTitle('');
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="bg-navy guilloche-bg px-5 pt-8 pb-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold" />
        <div className="flex justify-center mb-3">
          <Image src="/pod-logo.png" alt="The POD" width={60} height={60} className="object-contain" />
        </div>
        <h1 className="font-display text-2xl font-bold text-white text-center mb-1">
          {title}
        </h1>
        <p className="text-center text-white/60 text-sm">
          {subtitle}
        </p>
      </div>

      {activeUrl ? (
        /* Embedded ItsEasy content */
        <div className="animate-fade-in">
          {/* Back bar */}
          <div className="sticky top-0 z-40 bg-white border-b border-line px-4 py-2.5 flex items-center gap-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-navy font-medium text-sm active:scale-95 transition-transform"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <span className="text-sm font-semibold text-ink truncate">{activeTitle}</span>
          </div>

          {/* POD branding strip */}
          <div className="bg-paper-2 border-b border-line px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/pod-logo.png" alt="" width={20} height={20} className="object-contain" />
              <span className="text-[11px] font-semibold text-ink/60">Powered by Passport Office Depot</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[10px] text-green font-medium">Secure</span>
            </div>
          </div>

          {/* Iframe */}
          <div className="relative" style={{ height: 'calc(100vh - 220px)' }}>
            <iframe
              src={activeUrl}
              className="w-full h-full border-0"
              title={activeTitle}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              allow="camera; microphone"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        /* Service list */
        <div className="px-5 pt-5 space-y-2.5">
          {services.map((svc) => (
            <button
              key={svc.title}
              onClick={() => handleOpen(svc)}
              className="w-full flex items-center gap-3 bg-white rounded-2xl border border-line p-4 shadow-sm text-left active:scale-[0.98] transition-transform"
            >
              <span className="text-2xl flex-shrink-0">{svc.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-ink">{svc.title}</p>
                <p className="text-xs text-ink/50">{svc.desc}</p>
              </div>
              <svg className="w-4 h-4 text-ink/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}

          {/* Quick start */}
          <div className="pt-3">
            <button
              onClick={() => { setActiveUrl(defaultEmbedUrl); setActiveTitle('Get Started — TripBuilder'); }}
              className="w-full py-3.5 bg-red text-white font-semibold rounded-2xl text-sm shadow-lg shadow-red/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
            >
              Get Started Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
