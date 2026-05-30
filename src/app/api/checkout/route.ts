import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { serviceFee, service, speed } = await req.json();

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const { stripe } = await import('@/lib/stripe');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Passport Office Depot - ${service} (${speed})`,
              description: 'Passport & visa expediting service fee. Includes free passport photos.',
            },
            unit_amount: serviceFee,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/track?order={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/apply`,
      metadata: { service, speed },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
