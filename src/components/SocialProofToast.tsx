'use client';

import { useState, useEffect } from 'react';

const PROOFS = [
  { name: 'Maria', city: 'Houston', action: 'renewed her passport', time: '3 min ago' },
  { name: 'James', city: 'Chicago', action: 'got an emergency passport', time: '7 min ago' },
  { name: 'Sarah', city: 'Miami', action: 'applied for a travel visa', time: '12 min ago' },
  { name: 'Michael', city: 'Los Angeles', action: 'renewed his passport', time: '18 min ago' },
  { name: 'Emily', city: 'New York', action: 'got a child passport', time: '22 min ago' },
  { name: 'David', city: 'Phoenix', action: 'renewed her passport', time: '25 min ago' },
  { name: 'Jennifer', city: 'Dallas', action: 'applied for a UK visa', time: '31 min ago' },
  { name: 'Robert', city: 'Atlanta', action: 'got an expedited passport', time: '35 min ago' },
];

export function SocialProofToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let idx = 0;
    const show = () => {
      setCurrent(idx);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
      idx = (idx + 1) % PROOFS.length;
    };

    const timeout = setTimeout(show, 5000);
    const interval = setInterval(show, 15000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (current === null) return null;
  const proof = PROOFS[current];

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[400px] w-[calc(100%-32px)] ${
        visible ? 'animate-toast-in' : 'animate-toast-out pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-lg border border-line px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-green/10 flex items-center justify-center text-green flex-shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-sm text-ink font-medium truncate">
            {proof.name} from {proof.city}
          </p>
          <p className="text-xs text-ink/50">
            {proof.action} · {proof.time}
          </p>
        </div>
      </div>
    </div>
  );
}
