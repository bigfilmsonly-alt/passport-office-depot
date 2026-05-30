// Single source of truth for all trust claims and stats.
// Edit here only — every component pulls from this file.

export const STATS = {
  rating: '4.9',
  ratingOutOf: '5',
  ratingDisplay: 'Rated 4.9/5 by our customers',
  successRate: '99.8%',
  processed: '2,000,000+',
  processedShort: '2M+',
  founded: 1976,
  get yearsInBusiness() {
    return new Date().getFullYear() - this.founded;
  },
  get foundedPhrase() {
    return `Since ${this.founded}`;
  },
  trustBBB: 'BBB A+ Rated',
  trustPAVAA: 'PAVAA Founding Member',
  trustGovt: "Gov't Authorized",
  trustSecurity: 'Bank-Level Encryption',
  guarantee: '100% On-Time, or your service fee back',
  disclaimer:
    'Passport Office Depot is a private expediting service and is not affiliated with the U.S. Department of State or any government agency. You may apply directly with the government at travel.state.gov.',
  imposterNote:
    'Beware of imposters. Passport Office Depot operates exclusively at passportofficedepot.com and 1-800-PASSPORT.',
} as const;
