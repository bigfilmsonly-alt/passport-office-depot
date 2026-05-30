import { PRICING, TURNAROUND } from './constants';

export type ServiceType = 'renew' | 'new' | 'child' | 'lost_stolen' | 'damaged' | 'name_change' | 'second' | 'passport_card' | 'visa' | 'both';
export type SpeedType = 'economical' | 'expedited' | 'emergency';

export function calculateQuote(service: ServiceType, speed: SpeedType) {
  const baseFee = PRICING.base[service];
  const speedAddon = PRICING.speedAddon[speed];
  const serviceFee = baseFee + speedAddon;
  const govFee = service === 'passport_card' ? PRICING.passportCardGovFee : PRICING.govFee;
  const competitorAddon = PRICING.typicalCompetitor[speed];
  const typicalTotal = baseFee + competitorAddon;
  const savings = typicalTotal - serviceFee;

  return {
    serviceFee,
    govFee,
    totalEstimate: serviceFee + govFee,
    savings: Math.max(savings, 0),
    turnaround: TURNAROUND[speed],
    photosIncluded: true,
  };
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}

export function recommendSpeed(travelDate: Date): SpeedType {
  const now = new Date();
  const diffMs = travelDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 3) return 'emergency';
  if (diffDays < 14) return 'expedited';
  return 'economical';
}

export function getUrgencyMessage(travelDate: Date): string | null {
  const now = new Date();
  const diffMs = travelDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'Your travel date has passed.';
  if (diffDays < 3) return 'Emergency processing required — travel within 72 hours!';
  if (diffDays < 14) return 'Expedited processing recommended for your timeline.';
  return null;
}
