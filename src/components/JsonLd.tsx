import { BRAND, HQ_ADDRESS, PHONE, RATING, PROCESSED } from '@/lib/constants';

type JsonLdType = 'LocalBusiness' | 'FAQPage' | 'Service';

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BRAND,
  description: "America's most affordable passport & visa expediting service since 1976.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: '200 Park Ave, MetLife Building',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10166',
    addressCountry: 'US',
  },
  telephone: PHONE,
  url: 'https://passportofficedepot.com',
  openingHours: 'Mo-Su 00:00-23:59',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: PROCESSED.replace('+', '000'),
    bestRating: '5',
  },
  priceRange: '$$',
};

export function JsonLd({ type, data }: { type: JsonLdType; data?: Record<string, unknown> }) {
  let jsonLd;
  switch (type) {
    case 'LocalBusiness':
      jsonLd = LOCAL_BUSINESS;
      break;
    case 'FAQPage':
      jsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', ...data };
      break;
    case 'Service':
      jsonLd = { '@context': 'https://schema.org', '@type': 'Service', ...data };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
