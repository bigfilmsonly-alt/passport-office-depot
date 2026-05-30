import type { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';
import { JsonLd } from '@/components/JsonLd';

const FAQ_ITEMS = [
  {
    q: 'How long does passport renewal take?',
    a: 'Standard processing takes 4-6 weeks. Expedited is 1-2 weeks, and emergency service delivers in 24-48 hours — even if you travel within 72 hours.',
  },
  {
    q: 'What documents do I need to renew my passport?',
    a: 'You need your most recent passport (expired within 5 years), a new passport photo (free with our service), and a completed DS-82 form. Our expert Passport Review Team checks every application for errors before submission.',
  },
  {
    q: 'How much does it cost?',
    a: 'Our service fees start at just $59 for renewals, plus the government fee of approximately $130. Free compliant passport photos are included with every order — saving you an extra $15+.',
  },
  {
    q: 'What if my passport was lost or stolen?',
    a: 'We handle lost and stolen passport replacements starting at $99. You\'ll need to file a DS-64 (Statement of Lost or Stolen Passport) and we\'ll guide you through the entire process.',
  },
  {
    q: 'Can I add a passport card to my order?',
    a: 'Yes! You can add a passport card to any passport service for no additional service fee — only the $30 government fee applies. Passport cards work for land and sea travel to Canada, Mexico, the Caribbean, and Bermuda.',
  },
  {
    q: 'Do you handle travel visas?',
    a: 'Absolutely. We process visas for 200+ destinations worldwide, including China, India, Brazil, Russia, and more. Tourist, business, work, student, and e-visa types available starting at $89.',
  },
  {
    q: 'Do you offer a money-back guarantee?',
    a: 'Yes! We offer a 100% on-time guarantee backed by our CEO\'s personal promise. If we miss the promised delivery date, your service fee is refunded in full.',
  },
  {
    q: 'Is my information secure?',
    a: 'Yes. We are a government-registered, authorized agency using bank-level encryption. BBB A+ rated with background-checked staff. Your documents are handled with the highest security standards.',
  },
  {
    q: 'Can I get a second valid passport?',
    a: 'Yes, frequent travelers can obtain a second valid passport book. This is ideal if your primary passport is at an embassy for a visa while you need to travel. Starting at $79.',
  },
  {
    q: 'Do you offer corporate or business accounts?',
    a: 'Yes! We offer B2B solutions for businesses and travel agencies with volume pricing, dedicated account managers, and streamlined processing for your employees or clients.',
  },
];

export const metadata: Metadata = {
  title: 'About Us — 50 Years of Trusted Passport & Visa Service',
  description: 'Learn about Passport Office Depot, founded in 1976 by David Alwadish. BBB A+ rated, PAVAA founding member, gov\'t authorized, 2M+ passports processed.',
};

export default function AboutPage() {
  const faqJsonLd = {
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <JsonLd type="FAQPage" data={faqJsonLd} />
      <AboutContent faqItems={FAQ_ITEMS} />
    </>
  );
}
