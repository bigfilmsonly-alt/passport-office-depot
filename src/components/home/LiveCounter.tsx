'use client';

import { useState, useEffect } from 'react';

export function LiveCounter() {
  const [count, setCount] = useState(2147832);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-5 pb-6">
      <div className="bg-white rounded-2xl border border-line p-4 text-center shadow-sm">
        <p className="text-xs text-ink/50 font-medium uppercase tracking-wider mb-1">
          Passports & Visas Processed
        </p>
        <p className="font-mono text-3xl font-bold text-navy tabular-nums tracking-tight">
          {count.toLocaleString()}
        </p>
        <p className="text-xs text-green font-medium mt-1 flex items-center justify-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Live &mdash; updating in real time
        </p>
      </div>
    </div>
  );
}
