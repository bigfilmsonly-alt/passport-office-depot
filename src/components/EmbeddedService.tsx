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
    window.scrollTo({ top: 0 });
  };

  const handleBack = () => {
    setActiveUrl(null);
    setActiveTitle('');
    window.scrollTo({ top: 0 });
  };

  if (activeUrl) {
    return (
      <div className="fixed inset-0 z-[45] flex flex-col bg-white max-w-[430px] mx-auto">
        {/* Back bar */}
        <div className="flex-shrink-0 bg-white border-b border-line px-4 py-2.5 flex items-center gap-3">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-navy font-medium text-sm active:scale-95 transition-transform"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <span className="text-sm font-semibold text-ink truncate flex-1">{activeTitle}</span>
          <div className="flex items-center gap-1">
            <Image src="/pod-logo.png" alt="" width={18} height={18} className="object-contain" />
            <svg className="w-3 h-3 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Iframe — fills remaining space */}
        <iframe
          src={activeUrl}
          className="flex-1 w-full border-0"
          title={activeTitle}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          allow="camera; microphone"
          loading="eager"
        />

        {/* Bottom safe area so tab bar doesn't overlap */}
        <div className="flex-shrink-0 h-[80px] bg-white" />
      </div>
    );
  }

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

      {/* Service list */}
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
            onClick={() => { setActiveUrl(defaultEmbedUrl); setActiveTitle('Get Started — TripBuilder'); window.scrollTo({ top: 0 }); }}
            className="w-full py-3.5 bg-red text-white font-semibold rounded-2xl text-sm shadow-lg shadow-red/30 active:scale-[0.97] transition-transform flex items-center justify-center gap-2"
          >
            Get Started Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
