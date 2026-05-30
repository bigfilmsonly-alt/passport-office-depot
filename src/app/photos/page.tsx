import type { Metadata } from 'next';
import { EmbeddedService } from '@/components/EmbeddedService';

export const metadata: Metadata = {
  title: 'Passport Photos — Free with Every Service',
  description: 'Compliant 2x2" passport photos included free. Take them instantly with our app, get them with your order, or have them shipped.',
};

const PHOTO_SERVICES = [
  {
    title: 'Passport Photos NOW',
    desc: 'Take a compliant passport photo instantly using your phone',
    embedUrl: 'https://www.itseasy.com/photos/passport/now/',
    icon: '📱',
  },
  {
    title: 'Free Photos with Order',
    desc: 'Complimentary passport photos included with every passport service',
    embedUrl: 'https://www.itseasy.com/photos/passport/with-order/',
    icon: '🎁',
  },
  {
    title: 'Photos Printed & Shipped',
    desc: 'Professional passport photos printed and mailed to you',
    embedUrl: 'https://www.itseasy.com/photos/passport/print-ship/',
    icon: '📬',
  },
  {
    title: 'Photo App',
    desc: 'Download the app for AI-powered photo review and editing',
    embedUrl: 'https://www.itseasy.com/photos/passport/photo-app/',
    icon: '🤖',
  },
];

export default function PhotosPage() {
  return (
    <EmbeddedService
      title="Passport Photos"
      subtitle="Free with every service — or standalone options"
      services={PHOTO_SERVICES}
      defaultEmbedUrl="https://www.itseasy.com/photos/passport/now/"
    />
  );
}
