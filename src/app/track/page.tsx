import type { Metadata } from 'next';
import { TrackContent } from '@/components/TrackContent';

export const metadata: Metadata = {
  title: 'Track Your Order',
  description: 'Track your passport or visa application status in real time. Enter your order number to see where your documents are.',
};

export default function TrackPage() {
  return <TrackContent />;
}
