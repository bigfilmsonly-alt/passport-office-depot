import type { Metadata } from 'next';
import { EmbeddedService } from '@/components/EmbeddedService';

export const metadata: Metadata = {
  title: 'Review & Assistance — Expert Application Review',
  description: 'Our expert Passport Review Team checks your application for errors before submission. Track your order status and get live support.',
};

const REVIEW_SERVICES = [
  {
    title: 'TripBuilder',
    desc: 'Smart tool to find all requirements for your passport & visa needs',
    embedUrl: 'https://www.itseasy.com/trip/requirements/',
    icon: '🗺️',
  },
  {
    title: 'Passport Review Team',
    desc: 'Expert review of your application before submission — catch errors early',
    embedUrl: 'https://www.itseasy.com/passports/review-team/',
    icon: '✅',
  },
  {
    title: 'Track Your Application',
    desc: 'Check the real-time status of your submitted application',
    embedUrl: 'https://www.itseasy.com/orders/status-check/',
    icon: '📍',
  },
  {
    title: 'Concierge Service',
    desc: 'White-glove service — a dedicated team handles everything for you',
    embedUrl: 'https://www.itseasy.com/concierge/',
    icon: '🎩',
  },
  {
    title: 'Passport FAQ',
    desc: 'Answers to the most common passport questions',
    embedUrl: 'https://www.itseasy.com/passports/faq/',
    icon: '❓',
  },
  {
    title: 'Renewal Reminders',
    desc: 'Free passport expiration reminders — never miss a renewal',
    embedUrl: 'https://www.itseasy.com/passports/reminder/',
    icon: '🔔',
  },
  {
    title: 'Contact Support',
    desc: '24/7 live support via phone, text, or online',
    embedUrl: 'https://www.itseasy.com/about-us/contact/',
    icon: '📞',
  },
];

export default function ReviewPage() {
  return (
    <EmbeddedService
      title="Review & Assistance"
      subtitle="Expert help at every step of the process"
      services={REVIEW_SERVICES}
      defaultEmbedUrl="https://www.itseasy.com/trip/requirements/"
    />
  );
}
