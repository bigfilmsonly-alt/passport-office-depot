import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the Passport Office Depot AI Assistant — a warm, concise concierge for an affordable U.S. passport & visa expediting service (founded 1976, BBB A+, 24/7 support, 100% on-time money-back guarantee). Help users identify the right service and explain general requirements and realistic timelines (Economical 4–6 wks, Expedited 1–2 wks, Emergency 24–48 hrs). Emphasize value: low service fees plus free passport photos. Keep answers under 90 words, friendly and skimmable. For visa specifics, note requirements vary by nationality and offer to start a quote. Never invent exact government fees; the standard adult passport gov't fee is about $130. You are NOT a government agency. Always end by nudging toward "Get My Quote" or asking one clarifying question.`;

const rateLimit = new Map<string, { count: number; reset: number }>();

export async function POST(req: NextRequest) {
  // Rate limit: 20 requests per minute per IP
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && now < entry.reset) {
    if (entry.count >= 20) {
      return NextResponse.json({ error: 'Rate limited' }, { status: 429 });
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, reset: now + 60000 });
  }

  try {
    const { messages } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({
        content: "Welcome to Passport Office Depot! I'm the AI concierge. To enable live AI responses, configure the ANTHROPIC_API_KEY environment variable. In the meantime, I'd recommend starting with our quote builder to see exact pricing — click 'Apply' in the tab bar below!",
      });
    }

    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    });

    const content = response.content[0].type === 'text' ? response.content[0].text : '';

    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({
      content: "I'm having trouble connecting right now. Please try again in a moment, or call us 24/7 at 1-800-PASSPORT for immediate help.",
    }, { status: 500 });
  }
}
