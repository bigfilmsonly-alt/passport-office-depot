'use client';

import { useEffect, useRef, useState } from 'react';

export function PriceCompareSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-5 pb-8">
      <h2 className="font-display text-lg font-bold text-ink text-center mb-5">
        Why Pay More?
      </h2>

      <div className="space-y-4">
        {/* Competitor */}
        <div>
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-sm text-ink/60">Typical Expediter</span>
            <span className="text-sm font-bold text-red">$250+</span>
          </div>
          <div className="h-8 bg-red/10 rounded-xl overflow-hidden">
            <div
              className={`h-full bg-red/30 rounded-xl transition-all duration-1000 ease-out ${visible ? 'w-full' : 'w-0'}`}
              style={visible ? { animation: 'bar-fill 1.5s ease-out' } : {}}
            />
          </div>
        </div>

        {/* Us */}
        <div>
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-sm font-semibold text-navy">Passport Office Depot</span>
            <span className="text-sm font-bold text-green">From $59</span>
          </div>
          <div className="h-8 bg-green/10 rounded-xl overflow-hidden">
            <div
              className={`h-full bg-green/80 rounded-xl flex items-center justify-end pr-3 transition-all duration-1000 ease-out delay-300 ${visible ? 'w-[35%]' : 'w-0'}`}
              style={visible ? { animation: 'bar-fill 1.5s ease-out 0.3s both' } : {}}
            >
              <span className="text-[10px] font-bold text-white whitespace-nowrap">SAVE 75%+</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-ink/50 mt-3">
        + Free passport photos included with every order
      </p>
    </section>
  );
}
