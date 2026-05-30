import type { Metadata } from 'next';
import { ServicesContent } from '@/components/ServicesContent';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Passport & Visa Expediting Services',
  description: 'Passport renewal, new passports, child passports, travel visas & emergency passport services. Free passport photos included. From $59.',
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd type="Service" data={{
        name: 'Passport Expediting',
        provider: { '@type': 'Organization', name: 'Passport Office Depot' },
        areaServed: 'US',
        description: 'Fast, affordable passport and visa expediting services since 1976.',
      }} />
      <ServicesContent />
    </>
  );
}
