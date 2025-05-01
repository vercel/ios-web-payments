const BUNDLE_IDENTIFIER =
  process.env.EXPO_PUBLIC_BUNDLE_IDENTIFIER ||
  process.env.NEXT_PUBLIC_BUNDLE_IDENTIFIER ||
  'com.solito.payments'

const APP_URL =
  process.env.EXPO_PUBLIC_APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  'https://solito-payments.vercel.app'

export const PUBLIC_ENV = {
  APP_URL,
  BUNDLE_IDENTIFIER,
  STRIPE_CHECKOUT_URL: `https://${APP_URL}/api/stripe/checkout-session`,
  get FIREBASE_CONFIG() {
    const str =
      process.env.EXPO_PUBLIC_FIREBASE_CONFIG_JSON ||
      process.env.NEXT_PUBLIC_FIREBASE_CONFIG_JSON
    // avoid throwing when it's not used on web
    return JSON.parse(str!)
  },
}
