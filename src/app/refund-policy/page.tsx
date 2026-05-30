import type { Metadata } from 'next';
import { BRAND, GUARANTEE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Refund & Guarantee Policy',
  description: `${BRAND} 100% on-time money-back guarantee. Learn about our refund policy and commitment to your satisfaction.`,
};

export default function RefundPolicyPage() {
  return (
    <div className="px-5 py-8 pb-20">
      <h1 className="font-display text-2xl font-bold text-ink mb-6">Refund &amp; Guarantee Policy</h1>
      <p className="text-xs text-ink/40 mb-4">Last updated: May 2026 · Draft for legal review</p>
      <div className="prose prose-sm text-ink/70 space-y-4 text-sm leading-relaxed">
        <div className="bg-green/10 border border-green/20 rounded-xl p-4 mb-4">
          <p className="font-bold text-green text-base">{GUARANTEE}</p>
        </div>
        <p><strong>1. Our Guarantee.</strong> {BRAND} guarantees that we will complete our processing of your application within the stated service timeline. If we fail to meet this commitment, we will refund your service fee in full.</p>
        <p><strong>2. What Is Covered.</strong> The guarantee covers our service fee — the amount charged for our expediting services. It does not cover government filing fees, shipping costs, or fees paid directly to government agencies.</p>
        <p><strong>3. What Is Not Covered.</strong> The guarantee does not apply to: (a) delays caused by government agencies beyond our control; (b) applications rejected due to incomplete or inaccurate information provided by the client; (c) force majeure events; (d) cancellations initiated by the client after submission.</p>
        <p><strong>4. How to Request a Refund.</strong> Contact us at info@passportofficedepot.com or call 1-800-PASSPORT within 30 days of the missed deadline. Include your order number and we will process your refund within 5-10 business days.</p>
        <p><strong>5. Cancellation Before Submission.</strong> If you cancel before we submit your application to the government, you may receive a full refund of your service fee minus a $15 processing fee.</p>
        <p><strong>6. Cancellation After Submission.</strong> Once your application has been submitted to the government, service fees are non-refundable as the work has been completed.</p>
        <p className="text-xs text-red/70 font-medium">This is a draft document. Consult with a qualified attorney before publishing.</p>
      </div>
    </div>
  );
}
