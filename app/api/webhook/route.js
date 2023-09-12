import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});
export async function POST(req) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object;

  if (event.type === 'checkout.session.completed') {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription
    );

    if (!session?.metadata?.userId) {
      return new NextResponse('User  is required', { status: 400 });
    }
  }

  if (event.type === 'invoice.payment_succeeded') {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription
    );
  }

  return new NextResponse(null, { status: 200 });
}
