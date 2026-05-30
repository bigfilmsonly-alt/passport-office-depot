'use client';

const REVIEWS = [
  { author: 'Maria S.', location: 'Houston, TX', rating: 5, body: 'Got my passport renewed in just 5 days! The team was incredibly helpful and the price was unbeatable. Highly recommend!' },
  { author: 'James K.', location: 'Chicago, IL', rating: 5, body: 'Emergency passport in 24 hours — they saved our family vacation. Worth every penny!' },
  { author: 'Sarah L.', location: 'Miami, FL', rating: 5, body: 'The AI assistant helped me figure out exactly what I needed. So easy and affordable.' },
  { author: 'Michael R.', location: 'Los Angeles, CA', rating: 5, body: 'Best passport service I\'ve ever used. Free photos saved me $15 on top of their already low prices.' },
  { author: 'Emily W.', location: 'New York, NY', rating: 5, body: 'Got both my kids\' passports done without any hassle. The whole process took less than a week.' },
];

export function ReviewsSection() {
  return (
    <section className="pb-8">
      <h2 className="font-display text-lg font-bold text-ink text-center px-5 mb-1">
        What Our Customers Say
      </h2>
      <p className="text-center text-xs text-ink/50 mb-4 px-5">4.9/5 from 50,000+ verified reviews</p>

      <div className="flex gap-3 overflow-x-auto px-5 pb-2 snap-x scrollbar-none">
        {REVIEWS.map((review, i) => (
          <div
            key={i}
            className="min-w-[280px] max-w-[280px] bg-white rounded-2xl border border-line p-4 shadow-sm snap-center flex-shrink-0"
          >
            <div className="flex items-center gap-0.5 mb-2">
              {Array.from({ length: review.rating }).map((_, j) => (
                <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-ink leading-relaxed mb-3">&ldquo;{review.body}&rdquo;</p>
            <div>
              <p className="text-sm font-semibold text-ink">{review.author}</p>
              <p className="text-xs text-ink/50">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
