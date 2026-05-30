type EventName =
  | 'quote_started'
  | 'quote_completed'
  | 'checkout_started'
  | 'purchase'
  | 'assistant_opened'
  | 'assistant_message'
  | 'call_clicked'
  | 'referral_shared';

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(event: EventName, params?: EventParams) {
  // GA4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', event, params);
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && 'fbq' in window) {
    (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('trackCustom', event, params);
  }
}
