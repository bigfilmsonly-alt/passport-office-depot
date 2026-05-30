'use client';

import { useState, useEffect } from 'react';
import { calculateQuote, formatPrice, recommendSpeed, getUrgencyMessage } from '@/lib/pricing';
import type { ServiceType, SpeedType } from '@/lib/pricing';
import { SERVICE_LABELS, SPEED_LABELS, TURNAROUND, GUARANTEE } from '@/lib/constants';
import { trackEvent } from '@/lib/track';

const SERVICES: { value: ServiceType; label: string; desc: string }[] = [
  { value: 'renew', label: 'Passport Renewal', desc: 'Expired within 5 years' },
  { value: 'new', label: 'New Adult Passport', desc: 'First-time, age 16+' },
  { value: 'child', label: 'Minor Passport', desc: 'Infants to age 15' },
  { value: 'lost_stolen', label: 'Lost/Stolen Replacement', desc: 'Replace a lost or stolen passport' },
  { value: 'damaged', label: 'Damaged Passport', desc: 'Water-damaged, torn, or mutilated' },
  { value: 'name_change', label: 'Name/Gender Change', desc: 'Marriage, divorce, or legal change' },
  { value: 'second', label: 'Second Valid Passport', desc: 'For frequent travelers' },
  { value: 'passport_card', label: 'Passport Card Only', desc: 'Land/sea travel to Canada, Mexico, Caribbean' },
  { value: 'visa', label: 'Travel Visa', desc: '200+ destinations' },
  { value: 'both', label: 'Passport + Visa Bundle', desc: 'Save with a combo' },
];

const SPEEDS: { value: SpeedType; label: string; time: string }[] = [
  { value: 'economical', label: 'Economical', time: TURNAROUND.economical },
  { value: 'expedited', label: 'Expedited', time: TURNAROUND.expedited },
  { value: 'emergency', label: 'Emergency', time: TURNAROUND.emergency },
];

export function QuoteBuilder() {
  const [step, setStep] = useState(0);
  const [nationality, setNationality] = useState('US');
  const [service, setService] = useState<ServiceType>('renew');
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
    trackEvent('quote_completed', {
      service,
      speed,
      fee: quote.serviceFee,
    });
  };

  const handleCheckout = () => {
    trackEvent('checkout_started', { service, speed, fee: quote.serviceFee });
    // In production, this would call /api/checkout
    alert('Stripe Checkout would open here in production. Configure STRIPE_SECRET_KEY to enable.');
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="bg-navy guilloche-bg px-5 pt-8 pb-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold" />
        <h1 className="font-display text-2xl font-bold text-white text-center mb-1">
          Get Your Quote
        </h1>
        <p className="text-center text-white/60 text-sm">
          60-second quote · No obligation
        </p>
      </div>

      <div className="px-5 pt-6">
        {!showResult ? (
          <div className="space-y-6">
            {/* Progress dots */}
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${step >= i ? 'bg-navy' : 'bg-line'}`} />
              ))}
            </div>

            {/* Step 0: Nationality */}
            {step === 0 && (
              <div className="animate-fade-in">
                <label className="block text-sm font-semibold text-ink mb-2">Nationality</label>
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-line text-ink focus:outline-none focus:ring-2 focus:ring-navy/30 text-sm"
                >
                  <option value="US">United States</option>
                  <option value="other">Other</option>
                </select>
                <button onClick={() => setStep(1)} className="w-full mt-4 py-3 bg-navy text-white font-semibold rounded-xl text-sm active:scale-[0.97] transition-transform">
                  Continue
                </button>
              </div>
            )}

            {/* Step 1: Service & Travel Date */}
            {step === 1 && (
              <div className="animate-fade-in space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">What do you need?</label>
                  <div className="space-y-2">
                    {SERVICES.map((s) => (
                      <button
                        key={s.value}
                        onClick={() => setService(s.value)}
                        className={`w-full px-4 py-3 rounded-xl text-left border transition-colors ${
                          service === s.value
                            ? 'bg-navy text-white border-navy'
                            : 'bg-white text-ink border-line hover:bg-paper'
                        }`}
                      >
                        <span className="text-sm font-semibold block">{s.label}</span>
                        <span className={`text-xs ${service === s.value ? 'text-white/70' : 'text-ink/50'}`}>{s.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">When do you travel?</label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-line text-ink focus:outline-none focus:ring-2 focus:ring-navy/30 text-sm"
                  />
                  {urgency && (
                    <div className="mt-2 px-3 py-2 bg-red/10 border border-red/20 rounded-lg text-xs text-red font-medium">
                      ⚠️ {urgency}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(0)} className="flex-1 py-3 bg-paper text-ink font-semibold rounded-xl text-sm border border-line">
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
                        className={`w-full px-4 py-3 rounded-xl text-left border transition-colors ${
                          speed === s.value
                            ? 'bg-navy text-white border-navy'
                            : 'bg-white text-ink border-line hover:bg-paper'
                        }`}
                      >
                        <span className="text-sm font-semibold block">{s.label}</span>
                        <span className={`text-xs ${speed === s.value ? 'text-white/70' : 'text-ink/50'}`}>{s.time}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 bg-paper text-ink font-semibold rounded-xl text-sm border border-line">
                    Back
                  </button>
                  <button onClick={handleGetQuote} className="flex-1 py-3 bg-red text-white font-semibold rounded-xl text-sm shadow-lg shadow-red/30 active:scale-[0.97] transition-transform">
                    Get My Quote
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Result card */
          <div className="animate-float-up">
            <div className="bg-white rounded-2xl border border-line shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-navy p-4 text-center">
                <p className="text-gold-soft text-xs font-medium uppercase tracking-wider">Your Custom Quote</p>
                <p className="text-white font-display text-3xl font-bold mt-1">{formatPrice(quote.serviceFee)}</p>
                <p className="text-white/60 text-xs">service fee</p>
              </div>

              {/* Details */}
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
                  <span className="font-semibold text-green">FREE</span>
                </div>
                <div className="border-t border-line pt-3 flex justify-between text-sm">
                  <span className="font-bold text-ink">Estimated total</span>
                  <span className="font-bold text-ink">{formatPrice(quote.totalEstimate)}</span>
                </div>

                {/* Turnaround */}
                <div className="bg-paper rounded-xl p-3 text-center">
                  <p className="text-xs text-ink/50">Turnaround</p>
                  <p className="text-sm font-bold text-navy">{SPEED_LABELS[speed]} · {quote.turnaround}</p>
                </div>

                {/* Savings */}
                {quote.savings > 0 && (
                  <div className="bg-green/10 border border-green/20 rounded-xl p-3 text-center">
                    <p className="text-sm font-bold text-green">
                      You save ~{formatPrice(quote.savings)} vs. typical expediters
                    </p>
                  </div>
                )}

                {/* Guarantee */}
                <p className="text-xs text-ink/40 text-center">{GUARANTEE}</p>

                {/* CTA */}
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-red text-white font-semibold rounded-xl text-sm shadow-lg shadow-red/30 active:scale-[0.97] transition-transform"
                >
                  Lock In This Price
                </button>

                <button
                  onClick={() => { setShowResult(false); setStep(0); }}
                  className="w-full py-2.5 text-sm text-ink/50 font-medium"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
