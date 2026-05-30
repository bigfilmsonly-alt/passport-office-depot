import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { ValuePropSection } from '@/components/home/ValuePropSection';
import { HomeDropdowns } from '@/components/home/HomeDropdowns';
import { JsonLd } from '@/components/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <HeroSection />
      <TrustBar />
      <ValuePropSection />
      <HomeDropdowns />
    </>
  );
}
