import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { ValuePropSection } from '@/components/home/ValuePropSection';
import { AICardSection } from '@/components/home/AICardSection';
import { GuaranteeSection } from '@/components/home/GuaranteeSection';
import { PriceCompareSection } from '@/components/home/PriceCompareSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { ThreeStepsSection } from '@/components/home/ThreeStepsSection';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { ReferralBanner } from '@/components/home/ReferralBanner';
import { EmergencyBanner } from '@/components/home/EmergencyBanner';
import { LiveCounter } from '@/components/home/LiveCounter';
import { JsonLd } from '@/components/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <HeroSection />
      <TrustBar />
      <ValuePropSection />
      <LiveCounter />
      <AICardSection />
      <GuaranteeSection />
      <PriceCompareSection />
      <ReviewsSection />
      <ThreeStepsSection />
      <WhyUsSection />
      <ReferralBanner />
      <EmergencyBanner />
    </>
  );
}
