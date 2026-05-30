'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { trackEvent } from '@/lib/track';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const SUGGESTIONS = [
  'How fast can I get my passport?',
  'What documents do I need to renew?',
  'Do you handle travel visas?',
  'How much does it cost?',
];

const FALLBACK_MESSAGE = "I'm having trouble connecting right now. Please try again in a moment, or call us 24/7 at 1-800-PASSPORT for immediate help.";

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
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

  return (
    <>
      {/* FAB */}
      {!open && (
        <button
          onClick={handleOpen}
          className="fixed bottom-24 right-4 z-50 w-14 h-14 bg-navy rounded-full flex items-center justify-center shadow-xl text-gold text-2xl transition-transform active:scale-90"
          aria-label="Open AI Assistant"
        >
          <span className="absolute inset-0 rounded-full bg-navy/40 animate-[pulse-ring_2s_ease-out_infinite]" />
          <span className="relative">✨</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed inset-0 z-[55] flex flex-col max-w-[430px] mx-auto">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          {/* Chat panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl animate-slide-up flex flex-col" style={{ maxHeight: '75vh' }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-gold text-sm">✨</div>
                <div>
                  <p className="text-sm font-semibold text-ink">POD AI Assistant</p>
                  <p className="text-xs text-green flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center text-ink/40 hover:text-ink" aria-label="Close">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-ink/60 text-sm mb-4">How can I help with your passport or visa needs?</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="px-3 py-1.5 bg-paper rounded-full text-xs text-navy font-medium border border-line hover:bg-paper-2 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
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
                <div className="flex justify-start">
                  <div className="bg-paper px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                    <span className="w-2 h-2 bg-ink/30 rounded-full animate-[typing-dot_1.2s_ease-in-out_infinite]" />
                    <span className="w-2 h-2 bg-ink/30 rounded-full animate-[typing-dot_1.2s_ease-in-out_0.2s_infinite]" />
                    <span className="w-2 h-2 bg-ink/30 rounded-full animate-[typing-dot_1.2s_ease-in-out_0.4s_infinite]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-line">
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
                  placeholder="Ask about passports & visas..."
                  className="flex-1 px-4 py-2.5 bg-paper rounded-full text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-navy/30"
                  aria-label="Message"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center disabled:opacity-40 transition-opacity active:scale-95"
                  aria-label="Send"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
