import { STATS } from '@/lib/stats';

export function TrustBar() {
  return (
    <div className="bg-paper-2 border-y border-line py-2.5 px-4">
      <div className="grid grid-cols-4 gap-1 text-center">
        <TrustItem icon="⭐" label={`${STATS.rating}/${STATS.ratingOutOf}`} sub="Rating" />
        <TrustItem icon="🛡️" label="A+" sub="BBB" />
        <TrustItem icon="✓" label={STATS.successRate} sub="Success" />
        <TrustItem icon="🏛️" label="1976" sub="Founded" />
      </div>
    </div>
  );
}

function TrustItem({ icon, label, sub }: { icon: string; label: string; sub: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm">{icon}</span>
      <span className="text-xs font-bold text-ink leading-tight">{label}</span>
      <span className="text-[9px] text-ink/40 font-medium">{sub}</span>
    </div>
  );
}
