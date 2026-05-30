'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { trackEvent } from '@/lib/track';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const SUGGESTIONS = [
  'How fast can I get my passport?',
  'What documents do I need?',
  'Do you handle travel visas?',
  'How much does it cost?',
  'I need an emergency passport',
  'What countries need a visa?',
];

const FALLBACK_MESSAGE = "I'm having trouble connecting right now. Please try again in a moment, or call us 24/7 at 1-800-PASSPORT for immediate help.";

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Hide when an embedded ItsEasy page is active (they have their own chat)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setHidden(document.body.classList.contains('embedded-active'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    trackEvent('assistant_message', { role: 'user' });

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.content }]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: FALLBACK_MESSAGE }]);
    } finally {
      setLoading(false);
    }
  }, [messages]);

  const handleOpen = () => {
    setOpen(true);
    trackEvent('assistant_opened');
  };

  // Don't render when ItsEasy embedded page is open (they have their own Tawk chat)
  if (hidden) return null;

  return (
    <>
      {/* FAB — gradient navy with gold ring pulse */}
      {!open && (
        <button
          onClick={handleOpen}
          className="fixed bottom-24 right-4 z-50 w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-90"
          style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-2))' }}
          aria-label="Open AI Assistant"
        >
          <span className="absolute inset-[-3px] rounded-full border-2 border-gold/60 animate-[pulse-ring_2s_ease-out_infinite]" />
          <span className="absolute inset-[-6px] rounded-full border border-gold/30 animate-[pulse-ring_2s_ease-out_0.5s_infinite]" />
          <span className="relative text-2xl drop-shadow-lg">✨</span>
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className="fixed inset-0 z-[55] flex flex-col max-w-[430px] mx-auto">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl animate-slide-up flex flex-col shadow-2xl" style={{ maxHeight: '80vh' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-line">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-gold/30 flex-shrink-0">
                  <Image src="/pod-logo.png" alt="POD" width={36} height={36} className="object-contain" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">POD AI Concierge</p>
                  <p className="text-xs text-green flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green inline-block animate-pulse" />
                    Online · Instant answers
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-paper flex items-center justify-center text-ink/40 hover:text-ink active:scale-90 transition-all"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-4">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-navy/5 flex items-center justify-center">
                    <span className="text-2xl">🛂</span>
                  </div>
                  <p className="text-sm font-semibold text-ink mb-1">Passport & Visa Expert</p>
                  <p className="text-xs text-ink/50 mb-4">Ask me anything about passports, visas, or travel documents</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="px-3 py-1.5 bg-paper rounded-full text-xs text-navy font-medium border border-line hover:bg-navy hover:text-white transition-colors active:scale-95"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <span className="text-xs">✨</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-navy text-white rounded-br-md'
                        : 'bg-paper text-ink rounded-bl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start animate-fade-in">
                  <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <span className="text-xs">✨</span>
                  </div>
                  <div className="bg-paper px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5">
                    <span className="w-2 h-2 bg-navy/30 rounded-full animate-[typing-dot_1.2s_ease-in-out_infinite]" />
                    <span className="w-2 h-2 bg-navy/30 rounded-full animate-[typing-dot_1.2s_ease-in-out_0.2s_infinite]" />
                    <span className="w-2 h-2 bg-navy/30 rounded-full animate-[typing-dot_1.2s_ease-in-out_0.4s_infinite]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-line bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about passports, visas, photos..."
                  className="flex-1 px-4 py-2.5 bg-paper rounded-full text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-navy/20"
                  aria-label="Message"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 transition-all active:scale-90 text-white"
                  style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-2))' }}
                  aria-label="Send"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l6-6 6 6M12 6v13" />
                  </svg>
                </button>
              </form>
              <p className="text-[9px] text-ink/25 text-center mt-1.5">Powered by Passport Office Depot AI · Not a government agency</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
