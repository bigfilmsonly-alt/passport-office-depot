import { TRUST_BBB, TRUST_PAVAA, SUCCESS_RATE, RATING, REVIEW_COUNT } from '@/lib/constants';

export function TrustBar() {
  return (
    <div className="bg-paper-2 border-y border-line py-3 px-4 overflow-x-auto">
      <div className="flex items-center justify-center gap-3 min-w-max">
        <TrustItem icon="⭐" text={`${RATING} (${REVIEW_COUNT} reviews)`} />
        <Divider />
        <TrustItem icon="🛡️" text={TRUST_BBB} />
        <Divider />
        <TrustItem icon="✓" text={SUCCESS_RATE} />
        <Divider />
        <TrustItem icon="🏛️" text={TRUST_PAVAA} />
      </div>
    </div>
  );
}

function TrustItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm">{icon}</span>
      <span className="text-[11px] font-semibold text-ink/70 whitespace-nowrap">{text}</span>
    </div>
  );
}

function Divider() {
  return <div className="w-px h-4 bg-line" />;
}
