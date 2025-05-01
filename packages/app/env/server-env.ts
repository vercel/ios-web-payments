export const SERVER_ENV = {
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
  APPLE_TEAM_ID: process.env.APPLE_TEAM_ID!,
  STRIPE_PRODUCT_ID: process.env.STRIPE_PRODUCT_ID!,
  STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID!,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET!,
  get FIREBASE_SERVICE_ACCOUNT_JSON() {
    const str = process.env.FIREBASE_SERVICE_ACCOUNT_JSON
    if (!str) {
      throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON is not set')
    }
    return JSON.parse(str)
  },
}
