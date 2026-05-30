import type { Metadata } from 'next';
import { EmbeddedService } from '@/components/EmbeddedService';

export const metadata: Metadata = {
  title: 'Document Preparation — Passport & Visa Forms',
  description: 'Complete your passport and visa application forms online. We prepare, review, and submit all required documents for you.',
};

const DOCUMENT_SERVICES = [
  {
    title: 'Passport Renewal (DS-82)',
    desc: 'Renew your expired passport — must be expired within 15 years',
    embedUrl: 'https://www.itseasy.com/us-passports/renew-passport/',
    icon: '🔄',
  },
  {
    title: 'New Passport (DS-11)',
    desc: 'First-time adult passport application, age 16+',
    embedUrl: 'https://www.itseasy.com/us-passports/new-passport/',
    icon: '🆕',
  },
  {
    title: 'Child/Minor Passport',
    desc: 'For infants to age 15 — both parents must consent',
    embedUrl: 'https://www.itseasy.com/us-passports/child-passport/',
    icon: '👶',
  },
  {
    title: 'Lost or Stolen Passport',
    desc: 'Replacement passport with DS-64 statement',
    embedUrl: 'https://www.itseasy.com/us-passports/lost-stolen-passport/',
    icon: '🔍',
  },
  {
    title: 'Damaged Passport',
    desc: 'Replace water-damaged, torn, or mutilated passport',
    embedUrl: 'https://www.itseasy.com/us-passports/damaged-passport/',
    icon: '💧',
  },
  {
    title: 'Name/Gender Change',
    desc: 'Update passport after marriage, divorce, or legal change',
    embedUrl: 'https://www.itseasy.com/us-passports/name-change-passport/',
    icon: '✏️',
  },
  {
    title: 'Second Valid Passport',
    desc: 'For frequent travelers needing a second passport book',
    embedUrl: 'https://www.itseasy.com/us-passports/second-passport/',
    icon: '📘',
  },
  {
    title: 'Passport Card',
    desc: 'Land/sea travel to Canada, Mexico, Caribbean, Bermuda',
    embedUrl: 'https://www.itseasy.com/passports/card/',
    icon: '💳',
  },
  {
    title: 'Form Finder',
    desc: 'Find the exact government form you need',
    embedUrl: 'https://www.itseasy.com/formfinder/',
    icon: '📋',
  },
];

export default function DocumentsPage() {
  return (
    <EmbeddedService
      title="Document Preparation"
      subtitle="Select your service to start your application"
      services={DOCUMENT_SERVICES}
      defaultEmbedUrl="https://www.itseasy.com/trip/requirements/"
    />
  );
}
