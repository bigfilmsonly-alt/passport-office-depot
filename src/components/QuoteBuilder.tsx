'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { calculateQuote, formatPrice, recommendSpeed, getUrgencyMessage } from '@/lib/pricing';
import type { ServiceType, SpeedType } from '@/lib/pricing';
import { SERVICE_LABELS, SPEED_LABELS, TURNAROUND, GUARANTEE } from '@/lib/constants';
import { STATS } from '@/lib/stats';
import { trackEvent } from '@/lib/track';

const PASSPORT_SERVICES: { value: ServiceType; label: string; desc: string; icon: string }[] = [
  { value: 'renew', label: 'Passport Renewal', desc: 'Expired within 5 years', icon: '🔄' },
  { value: 'new', label: 'New Adult Passport', desc: 'First-time, age 16+', icon: '🆕' },
  { value: 'child', label: 'Minor Passport', desc: 'Infants to age 15', icon: '👶' },
  { value: 'lost_stolen', label: 'Lost/Stolen Replacement', desc: 'Replace a lost or stolen passport', icon: '🔍' },
  { value: 'damaged', label: 'Damaged Passport', desc: 'Water-damaged, torn, or mutilated', icon: '💧' },
  { value: 'name_change', label: 'Name/Gender Change', desc: 'Marriage, divorce, or legal change', icon: '✏️' },
  { value: 'second', label: 'Second Valid Passport', desc: 'For frequent travelers', icon: '📘' },
  { value: 'passport_card', label: 'Passport Card Only', desc: 'Land/sea — Canada, Mexico, Caribbean', icon: '💳' },
];

const VISA_SERVICES: { value: ServiceType; label: string; desc: string; icon: string }[] = [
  { value: 'visa', label: 'Travel Visa', desc: '200+ countries · Tourist, Business, Work, Student', icon: '🌍' },
  { value: 'both', label: 'Passport + Visa Bundle', desc: 'Get both and save', icon: '✈️' },
];

const SPEEDS: { value: SpeedType; label: string; time: string; desc: string }[] = [
  { value: 'economical', label: 'Economical', time: TURNAROUND.economical, desc: 'Best price' },
  { value: 'expedited', label: 'Expedited', time: TURNAROUND.expedited, desc: 'Most popular' },
  { value: 'emergency', label: 'Emergency', time: TURNAROUND.emergency, desc: 'Travel within 72hrs' },
];

export function QuoteBuilder() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get('service') as ServiceType | null;

  const [step, setStep] = useState(preselected ? 1 : 0);
  const [service, setService] = useState<ServiceType>(preselected || 'renew');
  const [travelDate, setTravelDate] = useState('');
  const [speed, setSpeed] = useState<SpeedType>('economical');
  const [urgency, setUrgency] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    if (!tracked) {
      trackEvent('quote_started');
      setTracked(true);
    }
  }, [tracked]);

  useEffect(() => {
    if (travelDate) {
      const date = new Date(travelDate);
      const rec = recommendSpeed(date);
      setSpeed(rec);
      setUrgency(getUrgencyMessage(date));
    }
  }, [travelDate]);

  const quote = calculateQuote(service, speed);

  const handleGetQuote = () => {
    setShowResult(true);
    trackEvent('quote_completed', { service, speed, fee: quote.serviceFee });
  };

  const handleCheckout = () => {
    trackEvent('checkout_started', { service, speed, fee: quote.serviceFee });
    alert('Stripe Checkout would open here in production. Configure STRIPE_SECRET_KEY to enable.');
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="m-2 rounded-2xl border-2 border-gold bg-navy guilloche-bg overflow-hidden">
        <div className="px-5 pt-6 pb-5 text-center">
          <Image src="/pod-logo.png" alt="POD" width={50} height={50} className="object-contain mx-auto mb-2" />
          <h1 className="font-display text-xl font-bold text-white mb-0.5">
            Get Your Passport & Visa Quote
          </h1>
          <p className="text-white/60 text-xs">60-second quote · No obligation · {STATS.ratingDisplay}</p>
        </div>
      </div>

      <div className="px-5 pt-4">
        {!showResult ? (
          <div className="space-y-5">
            {/* Progress */}
            <div className="flex items-center justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step > i ? 'bg-green text-white' : step === i ? 'bg-navy text-white' : 'bg-line text-ink/30'
                  }`}>
                    {step > i ? '✓' : i + 1}
                  </div>
                  {i < 2 && <div className={`w-8 h-0.5 ${step > i ? 'bg-green' : 'bg-line'}`} />}
                </div>
              ))}
            </div>

            {/* Step 0: Service Selection */}
            {step === 0 && (
              <div className="animate-fade-in space-y-4">
                {/* Passport section */}
                <div>
                  <p className="text-xs font-bold text-ink/50 uppercase tracking-wider mb-2">🛂 Passport Services</p>
                  <div className="space-y-1.5">
                    {PASSPORT_SERVICES.map((s) => (
                      <button
                        key={s.value}
                        onClick={() => { setService(s.value); setStep(1); }}
                        className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-left border border-line bg-white hover:bg-paper active:scale-[0.98] transition-all"
                      >
                        <span className="text-lg">{s.icon}</span>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-ink block">{s.label}</span>
                          <span className="text-[11px] text-ink/40">{s.desc}</span>
                        </div>
                        <svg className="w-4 h-4 text-ink/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Visa section — highlighted */}
                <div>
                  <p className="text-xs font-bold text-gold uppercase tracking-wider mb-2">🌍 Visa Services</p>
                  <div className="space-y-1.5">
                    {VISA_SERVICES.map((s) => (
                      <button
                        key={s.value}
                        onClick={() => { setService(s.value); setStep(1); }}
                        className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-left border-2 border-gold/40 bg-gold/5 hover:bg-gold/10 active:scale-[0.98] transition-all"
                      >
                        <span className="text-lg">{s.icon}</span>
                        <div className="flex-1">
                          <span className="text-sm font-bold text-ink block">{s.label}</span>
                          <span className="text-[11px] text-ink/50">{s.desc}</span>
                        </div>
                        <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Travel Date */}
            {step === 1 && (
              <div className="animate-fade-in space-y-4">
                <div className="bg-white rounded-2xl border border-line p-4 shadow-sm">
                  <p className="text-xs text-ink/40 mb-1">Selected service</p>
                  <p className="text-sm font-bold text-navy">{SERVICE_LABELS[service]}</p>
                </div>

                <div>
                  <label htmlFor="travel-date" className="block text-sm font-semibold text-ink mb-2">When do you travel?</label>
                  <div className="relative">
                    <input
                      id="travel-date"
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-line text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/30 appearance-none"
                      style={{ colorScheme: 'light' }}
                    />
                  </div>
                  <p className="text-[11px] text-ink/30 mt-1.5">We&apos;ll recommend the best speed for your timeline</p>
                  {urgency && (
                    <div className="mt-2.5 px-3 py-2.5 bg-red/10 border border-red/20 rounded-xl text-xs text-red font-medium flex items-center gap-2">
                      <span className="text-base">⚠️</span>
                      {urgency}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(0)} className="flex-1 py-3 bg-paper text-ink font-semibold rounded-xl text-sm border border-line active:scale-[0.97] transition-transform">
                    Back
                  </button>
                  <button onClick={() => setStep(2)} className="flex-1 py-3 bg-navy text-white font-semibold rounded-xl text-sm active:scale-[0.97] transition-transform">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Speed */}
            {step === 2 && (
              <div className="animate-fade-in space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Processing Speed</label>
                  <div className="space-y-2">
                    {SPEEDS.map((s) => (
                      <button
                        key={s.value}
                        onClick={() => setSpeed(s.value)}
                        className={`w-full px-4 py-3.5 rounded-xl text-left border-2 transition-colors ${
                          speed === s.value
                            ? 'bg-navy text-white border-navy'
                            : 'bg-white text-ink border-line hover:bg-paper'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold">{s.label}</span>
                          {s.value === 'expedited' && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${speed === s.value ? 'bg-white/20 text-white' : 'bg-gold/20 text-gold'}`}>POPULAR</span>
                          )}
                        </div>
                        <span className={`text-xs block mt-0.5 ${speed === s.value ? 'text-white/70' : 'text-ink/50'}`}>{s.time} · {s.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 bg-paper text-ink font-semibold rounded-xl text-sm border border-line">
                    Back
                  </button>
                  <button onClick={handleGetQuote} className="flex-1 py-3.5 bg-red text-white font-bold rounded-xl text-sm shadow-lg shadow-red/30 active:scale-[0.97] transition-transform">
                    Get My Quote →
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Result */
          <div className="animate-float-up">
            <div className="bg-white rounded-2xl border-2 border-gold/30 shadow-lg overflow-hidden">
              <div className="bg-navy p-4 text-center">
                <p className="text-gold-soft text-xs font-medium uppercase tracking-wider">Your Custom Quote</p>
                <p className="text-white font-display text-3xl font-bold mt-1">{formatPrice(quote.serviceFee)}</p>
                <p className="text-white/60 text-xs">service fee</p>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-ink/60">{SERVICE_LABELS[service]}</span>
                  <span className="font-semibold text-ink">{formatPrice(quote.serviceFee)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink/60">Gov&apos;t fee (est.)</span>
                  <span className="font-semibold text-ink">{formatPrice(quote.govFee)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink/60">Passport photos</span>
                  <span className="font-bold text-green">FREE</span>
                </div>
                <div className="border-t border-line pt-3 flex justify-between">
                  <span className="font-bold text-ink">Estimated total</span>
                  <span className="font-bold text-ink text-lg">{formatPrice(quote.totalEstimate)}</span>
                </div>

                <div className="bg-paper rounded-xl p-3 text-center">
                  <p className="text-xs text-ink/50">Turnaround</p>
                  <p className="text-sm font-bold text-navy">{SPEED_LABELS[speed]} · {quote.turnaround}</p>
                </div>

                {quote.savings > 0 && (
                  <div className="bg-green/10 border border-green/20 rounded-xl p-3 text-center">
                    <p className="text-sm font-bold text-green">
                      You save ~{formatPrice(quote.savings)} vs. typical expediters
                    </p>
                  </div>
                )}

                <p className="text-xs text-ink/40 text-center">{GUARANTEE}</p>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-red text-white font-bold rounded-xl text-sm shadow-lg shadow-red/30 active:scale-[0.97] transition-transform"
                >
                  Lock In This Price →
                </button>

                <button
                  onClick={() => { setShowResult(false); setStep(0); }}
                  className="w-full py-2 text-sm text-ink/40 font-medium"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        )}

        <p className="text-[10px] text-ink/25 leading-relaxed text-center mt-5">
          {STATS.disclaimer}
        </p>
      </div>
    </div>
  );
}
