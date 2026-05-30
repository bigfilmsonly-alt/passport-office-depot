export const BRAND = 'Passport Office Depot';
export const BRAND_SHORT = 'The POD';
export const POSITIONING = "America's most affordable passport & visa expediting";
export const FOUNDED = 1976;
export const YEARS_IN_BUSINESS = new Date().getFullYear() - FOUNDED;
export const CEO = 'David Alwadish';
export const COO = 'Antoinette Leon';
export const COO_TITLE = 'Sr. VP & COO';
export const HQ_ADDRESS = '200 Park Ave, MetLife Building, New York, NY 10166';
export const PHONE = '1-800-PASSPORT'; // [CONFIRM real number]
export const PHONE_TEL = 'tel:+18007277767';
export const TRUST_BBB = 'BBB A+';
export const TRUST_PAVAA = 'PAVAA Founding Member';
export const TRUST_GOVT = 'Gov\'t Authorized';
export const SUCCESS_RATE = '99.8%';
export const RATING = '4.9/5';
export const REVIEW_COUNT = '50,000+';
export const PROCESSED = '2M+';
export const GUARANTEE = '100% On-Time, or your service fee back';
export const PRESS_MENTIONS = ['NY Times', 'Condé Nast Traveler', 'BuzzFeed'];

export const PRICING = {
  base: {
    renew: 5900,
    new: 7900,
    child: 7900,
    lost_stolen: 9900,
    damaged: 8900,
    name_change: 6900,
    second: 7900,
    passport_card: 3000,
    visa: 8900,
    both: 14900,
  },
  speedAddon: {
    economical: 0,
    expedited: 4000,
    emergency: 14000,
  },
  govFee: 13000, // $130 [CONFIRM]
  passportCardGovFee: 3000, // $30 for passport card
  typicalCompetitor: {
    economical: 9000,
    expedited: 16000,
    emergency: 26000,
  },
} as const;

export const TURNAROUND = {
  economical: '4-6 weeks',
  expedited: '1-2 weeks',
  emergency: '24-48 hours',
} as const;

export const SERVICE_LABELS: Record<string, string> = {
  renew: 'Passport Renewal',
  new: 'New Passport',
  child: 'Child Passport (Under 16)',
  lost_stolen: 'Lost/Stolen Replacement',
  damaged: 'Damaged Passport Renewal',
  name_change: 'Name/Gender Change',
  second: 'Second Valid Passport',
  passport_card: 'Passport Card',
  visa: 'Travel Visa',
  both: 'Passport + Visa',
};

export const SPEED_LABELS: Record<string, string> = {
  economical: 'Economical',
  expedited: 'Expedited',
  emergency: 'Emergency',
};

export const VISA_COUNTRIES = [
  { flag: '🇨🇳', name: 'China', types: ['Tourist', 'Business', 'Work', 'Student'] },
  { flag: '🇮🇳', name: 'India', types: ['Tourist', 'Business', 'E-Visa'] },
  { flag: '🇷🇺', name: 'Russia', types: ['Tourist', 'Business'] },
  { flag: '🇧🇷', name: 'Brazil', types: ['Tourist', 'Business', 'Work'] },
  { flag: '🇻🇳', name: 'Vietnam', types: ['Tourist', 'Business', 'E-Visa'] },
  { flag: '🇰🇪', name: 'Kenya', types: ['Tourist', 'Business', 'Transit'] },
  { flag: '🇸🇦', name: 'Saudi Arabia', types: ['Tourist', 'Business', 'Work', 'Hajj'] },
  { flag: '🇰🇷', name: 'South Korea', types: ['Tourist', 'Business'] },
  { flag: '🇹🇷', name: 'Turkey', types: ['Tourist', 'Business', 'E-Visa'] },
  { flag: '🇪🇬', name: 'Egypt', types: ['Tourist', 'Business'] },
  { flag: '🇳🇬', name: 'Nigeria', types: ['Tourist', 'Business', 'Work'] },
  { flag: '🇦🇺', name: 'Australia', types: ['Tourist', 'Business', 'E-Visa', 'Work'] },
  { flag: '🇯🇵', name: 'Japan', types: ['Tourist', 'Business'] },
  { flag: '🇬🇧', name: 'United Kingdom', types: ['Tourist', 'Business', 'Work', 'Student'] },
  { flag: '🇨🇦', name: 'Canada', types: ['Tourist', 'Business', 'Work'] },
  { flag: '🇲🇽', name: 'Mexico', types: ['Tourist', 'Business'] },
];
