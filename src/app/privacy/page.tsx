import type { Metadata } from 'next';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `${BRAND} privacy policy. How we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <div className="px-5 py-8 pb-20">
      <h1 className="font-display text-2xl font-bold text-ink mb-6">Privacy Policy</h1>
      <p className="text-xs text-ink/40 mb-4">Last updated: May 2026 · Draft for legal review</p>
      <div className="prose prose-sm text-ink/70 space-y-4 text-sm leading-relaxed">
        <p><strong>1. Information We Collect.</strong> We collect personal information you provide when using our services, including name, contact details, passport information, travel dates, and payment details. We also collect usage data such as IP addresses, browser type, and pages visited.</p>
        <p><strong>2. How We Use Your Information.</strong> We use your information to process passport and visa applications, communicate about your order, improve our services, and comply with legal obligations. We never sell your personal data to third parties.</p>
        <p><strong>3. Data Security.</strong> We implement bank-level encryption (256-bit SSL) and industry-standard security measures to protect your personal information. All staff are background-checked and trained in data handling.</p>
        <p><strong>4. Third-Party Services.</strong> We use trusted partners for payment processing (Stripe), cloud infrastructure, and analytics. Each partner is bound by strict data protection agreements.</p>
        <p><strong>5. Your Rights.</strong> You may request access to, correction of, or deletion of your personal data at any time by contacting us at info@passportofficedepot.com or 1-800-PASSPORT.</p>
        <p><strong>6. Cookies.</strong> We use cookies and similar technologies to improve your experience and for analytics. You can manage cookie preferences in your browser settings.</p>
        <p><strong>7. Changes.</strong> We may update this policy periodically. Continued use of our services constitutes acceptance of updated terms.</p>
        <p><strong>8. Contact.</strong> Questions about this policy? Contact us at info@passportofficedepot.com or call 1-800-PASSPORT (available 24/7).</p>
        <p className="text-xs text-red/70 font-medium">This is a draft document. Consult with a qualified attorney before publishing.</p>
      </div>
    </div>
  );
}
