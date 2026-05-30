import { BRAND, PHONE } from '@/lib/constants';
import { STATS } from '@/lib/stats';

type JsonLdType = 'LocalBusiness' | 'FAQPage' | 'Service';

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://passportofficedepot.com/#organization',
  name: BRAND,
  alternateName: 'The POD',
  description: "America's most affordable passport & visa expediting service. Government-authorized, BBB A+ rated private expediting company since 1976. Passport renewals, new passports, child passports, lost/stolen replacements, travel visas for 200+ countries, and free passport photos.",
  foundingDate: '1976',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '200 Park Ave, MetLife Building',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10166',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7527,
    longitude: -73.9772,
  },
  telephone: PHONE,
  email: 'info@passportofficedepot.com',
  url: 'https://passportofficedepot.com',
  sameAs: [],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: STATS.rating,
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Passport & Visa Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Passport Renewal', description: 'Expedited U.S. passport renewal service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'New Passport', description: 'First-time adult passport application' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Child Passport', description: 'Passports for minors under 16' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Passport', description: '24-48 hour emergency passport service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Travel Visa Expediting', description: 'Visa services for 200+ countries' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Passport Photos', description: 'Free compliant 2x2 passport photos' } },
    ],
  },
  knowsAbout: [
    'passport expediting', 'visa expediting', 'passport renewal', 'emergency passport',
    'passport photos', 'travel visa', 'passport application', 'expedited passport',
  ],
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
      jsonLd = { '@context': 'https://schema.org', '@type': 'Service', provider: { '@id': 'https://passportofficedepot.com/#organization' }, ...data };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
