import { absoluteUrl } from '@/lib/utils';
import { auth, currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});
const eventUrl = absoluteUrl('/event');

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: eventUrl,
      cancel_url: eventUrl,
      payment_method_types: ['card'],
      mode: 'payment',
      billing_address_collection: 'auto',
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          // amount: formatAmountForStripe(amount, CURRENCY),
          price_data: {
            currency: 'USD',
            product_data: {
              name: 'Donation',
              description: 'Donate to support our upcoming summit',
            },
            unit_amount: 2000,
          },

          // currency: CURRENCY,
          quantity: 1,
        },
      ],
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log('[STRIPE_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
