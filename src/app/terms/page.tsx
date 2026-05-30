import type { Metadata } from 'next';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `${BRAND} terms of service. Rules and guidelines for using our passport and visa expediting services.`,
};

export default function TermsPage() {
  return (
    <div className="px-5 py-8 pb-20">
      <h1 className="font-display text-2xl font-bold text-ink mb-6">Terms of Service</h1>
      <p className="text-xs text-ink/40 mb-4">Last updated: May 2026 · Draft for legal review</p>
      <div className="prose prose-sm text-ink/70 space-y-4 text-sm leading-relaxed">
        <p><strong>1. Services.</strong> {BRAND} is a private passport and visa expediting service. We are not a government agency and are not affiliated with the U.S. Department of State. Our services include document preparation, application review, submission, and tracking.</p>
        <p><strong>2. Service Fees.</strong> Our service fees are separate from and in addition to government filing fees. All fees are clearly disclosed before you commit to an order. Service fees are non-refundable except under our On-Time Guarantee.</p>
        <p><strong>3. Government Fees.</strong> Government fees are set by the U.S. Department of State and are subject to change. We will advise you of current fees but are not responsible for government fee changes.</p>
        <p><strong>4. Processing Times.</strong> Estimated processing times are based on current government processing standards and our experience. We do not guarantee specific government processing times, but we guarantee our own processing timelines under our On-Time Guarantee.</p>
        <p><strong>5. Client Responsibilities.</strong> You are responsible for providing accurate, complete, and truthful information. Errors or omissions may result in delays or denials for which we are not liable.</p>
        <p><strong>6. On-Time Guarantee.</strong> If we fail to process your application within our stated service timeline, your service fee will be refunded in full. This guarantee does not cover government processing delays beyond our control.</p>
        <p><strong>7. Limitation of Liability.</strong> Our liability is limited to the service fees paid. We are not liable for consequential damages including missed travel, lost business opportunities, or other indirect losses.</p>
        <p><strong>8. Governing Law.</strong> These terms are governed by the laws of the State of New York.</p>
        <p className="text-xs text-red/70 font-medium">This is a draft document. Consult with a qualified attorney before publishing.</p>
      </div>
    </div>
  );
}
