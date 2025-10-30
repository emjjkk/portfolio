import { NextRequest, NextResponse } from 'next/server';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

// POST — store activity with 24-hour expiration
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Store in Redis with 24h TTL
    await redis.set('premid:activity', JSON.stringify(data), 'EX', 86400);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('PreMiD webhook error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

// GET — retrieve activity
export async function GET() {
  try {
    const activity = await redis.get('premid:activity');
    const parsed = activity ? JSON.parse(activity) : { active_activity: null };

    return NextResponse.json(parsed);
  } catch (error) {
    console.error('Error fetching activity:', error);
    return NextResponse.json({ error: 'Failed to fetch activity' }, { status: 500 });
  }
}
