import type { Metadata } from 'next';
import { QuoteBuilder } from '@/components/QuoteBuilder';

export const metadata: Metadata = {
  title: 'Get Your Quote — 60-Second Passport & Visa Quote',
  description: 'Get an instant quote for passport renewal, new passport, child passport, or travel visa. See your exact price and savings in 60 seconds.',
};

export default function ApplyPage() {
  return <QuoteBuilder />;
}
