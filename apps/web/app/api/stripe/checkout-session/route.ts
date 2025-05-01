import { SERVER_ENV } from 'app/env/server-env'
import { PUBLIC_ENV } from 'app/env/public-env'
import { getStripe } from '../stripe'
import { serverAuth } from 'app/features/auth/server'

export async function POST(req: Request) {
  const token = req.headers.get('Authorization')
  if (!token) {
    return Response.json({ error: 'Missing auth token' }, { status: 401 })
  }

  let userId: string

  try {
    // 👋 in production, you should associate this request with a customer in your DB
    // here, we're just using the user's auth ID
    // but you might match it up with a team ID
    const { sub } = await serverAuth.verifyToken(token.split(' ')[1])
    userId = sub
  } catch (error) {
    return Response.json({ error: 'Invalid auth token' }, { status: 401 })
  }

  // 👋 in production, you should store your customer ID in your DB
  // and retrieve it here based off the user's auth ID
  const customerId: string | undefined = undefined

  const priceId = SERVER_ENV.STRIPE_PRICE_ID
  const stripe = getStripe()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    customer: customerId,
    success_url: `https://${PUBLIC_ENV.APP_URL}/checkout_redirect/success`,
    cancel_url: `https://${PUBLIC_ENV.APP_URL}/checkout_redirect/cancel`,
  })

  return Response.json({ url: session.url })
}
