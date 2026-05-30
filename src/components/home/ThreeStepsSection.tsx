import Link from 'next/link';

const STEPS = [
  {
    num: '1',
    title: 'Get Your Quote',
    desc: 'Tell us what you need in 60 seconds. Our smart form calculates your exact price.',
    icon: (
      <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.773 4.773zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Submit Documents',
    desc: 'We review everything, take your free passport photo, and handle the paperwork.',
    icon: (
      <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Get Your Passport',
    desc: 'Track your order in real time. We deliver on time, guaranteed.',
    icon: (
      <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export function ThreeStepsSection() {
  return (
    <section className="px-5 pb-8">
      <h2 className="font-display text-lg font-bold text-ink text-center mb-5">
        3 Simple Steps
      </h2>

      <div className="space-y-4">
        {STEPS.map((step) => (
          <div key={step.num} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
              {step.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-ink mb-0.5">
                <span className="text-gold mr-1">{step.num}.</span>
                {step.title}
              </p>
              <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/apply"
        className="mt-6 flex items-center justify-center w-full py-3 bg-navy text-white font-semibold rounded-2xl text-sm transition-transform active:scale-[0.97]"
      >
        Start Your Application
      </Link>
    </section>
  );
}
