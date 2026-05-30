'use client';

import { useState } from 'react';

const DEMO_STATUSES = [
  { step: 'Order Received', desc: 'We received your application', date: 'May 28, 2026', completed: true },
  { step: 'Documents Reviewed', desc: 'Our team verified your documents', date: 'May 29, 2026', completed: true },
  { step: 'Submitted to Agency', desc: 'Application submitted for processing', date: 'May 30, 2026', completed: true },
  { step: 'In Production', desc: 'Your passport is being produced', date: 'Estimated Jun 2', completed: false, active: true },
  { step: 'Shipped & Delivered', desc: 'Delivered to your address', date: 'Estimated Jun 4', completed: false },
];

export function TrackContent() {
  const [orderNum, setOrderNum] = useState('');
  const [lastName, setLastName] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNum.trim() && lastName.trim()) {
      setShowStatus(true);
    }
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="bg-navy guilloche-bg px-5 pt-8 pb-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold" />
        <h1 className="font-display text-2xl font-bold text-white text-center mb-1">
          Track Your Order
        </h1>
        <p className="text-center text-white/60 text-sm">
          Real-time status updates
        </p>
      </div>

      <div className="px-5 pt-6">
        {!showStatus ? (
          <form onSubmit={handleLookup} className="space-y-4 animate-fade-in">
            <div>
              <label htmlFor="orderNum" className="block text-sm font-semibold text-ink mb-2">Order Number</label>
              <input
                id="orderNum"
                type="text"
                value={orderNum}
                onChange={(e) => setOrderNum(e.target.value)}
                placeholder="e.g. POD-2026-001234"
                className="w-full px-4 py-3 bg-white rounded-xl border border-line text-ink focus:outline-none focus:ring-2 focus:ring-navy/30 text-sm placeholder:text-ink/30"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-ink mb-2">Last Name</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="As on your application"
                className="w-full px-4 py-3 bg-white rounded-xl border border-line text-ink focus:outline-none focus:ring-2 focus:ring-navy/30 text-sm placeholder:text-ink/30"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-navy text-white font-semibold rounded-xl text-sm active:scale-[0.97] transition-transform"
            >
              Look Up Order
            </button>
          </form>
        ) : (
          <div className="animate-float-up">
            {/* Status card */}
            <div className="bg-white rounded-2xl border border-line shadow-lg p-5 mb-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs text-ink/50">Order</p>
                  <p className="text-sm font-bold text-ink font-mono">{orderNum || 'POD-2026-001234'}</p>
                </div>
                <span className="px-2.5 py-1 bg-gold/20 text-gold rounded-full text-xs font-semibold">In Progress</span>
              </div>

              {/* Timeline */}
              <div className="space-y-0">
                {DEMO_STATUSES.map((status, i) => (
                  <div key={status.step} className="flex gap-3">
                    {/* Line + dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
                          status.completed
                            ? 'bg-green border-green'
                            : status.active
                            ? 'bg-white border-gold animate-pulse'
                            : 'bg-white border-line'
                        }`}
                      >
                        {status.completed && (
                          <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {i < DEMO_STATUSES.length - 1 && (
                        <div className={`w-0.5 h-12 ${status.completed ? 'bg-green' : 'bg-line'}`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-6">
                      <p className={`text-sm font-semibold ${status.completed || status.active ? 'text-ink' : 'text-ink/40'}`}>
                        {status.step}
                      </p>
                      <p className="text-xs text-ink/50">{status.desc}</p>
                      <p className="text-xs text-ink/30 mt-0.5">{status.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setShowStatus(false); setOrderNum(''); setLastName(''); }}
              className="w-full py-2.5 text-sm text-ink/50 font-medium"
            >
              Track Another Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
