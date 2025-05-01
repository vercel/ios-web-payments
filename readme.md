# Solito iOS Web Payments Example

Example app of a Solito app that uses Stripe checkout on Web with an iOS app.

As of May 1, 2025, you can use web-based checkout on iOS without incurring Apple's commission.

Even though you're redirecting users to Web to complete their purchase, **Apple pay is still supported**. See the demo video below.

## ⚡️ Instantly clone & deploy API routes

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fios-web-payments&env=APPLE_TEAM_ID,FIREBASE_SERVICE_ACCOUNT_JSON,NEXT_PUBLIC_APP_URL,NEXT_PUBLIC_BUNDLE_IDENTIFIER,NEXT_PUBLIC_FIREBASE_CONFIG_JSON,NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,STRIPE_PRICE_ID,STRIPE_PRODUCT_ID,STRIPE_SECRET_KEY,STRIPE_WEBHOOK_SECRET&root-directory=apps/web)

## 🔦 About

This monorepo implemented `npx create-solito-app@latest`.

## 📦 Included packages

- `solito` for cross-platform navigation
- Next.js 15 for API routes
- Expo 53 + React Native for the native app
- `stripe` for payments
- `firebase` for authentication (you can easily swap it out)
- React Navigation 7
- React 19 (see Solito [compatibility docs](https://solito.dev/compatibility))
- React Compiler

## 🗂 Folder layout

- `apps` entry points for each app

  - `native`
  - `web`
    - `api`
      - Checkout routes
      - Apple `.well-known` route

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next` in `apps/web`
- Expo local dev:
  - First, build a dev client onto your device or simulator
    - `cd apps/native`
    - Then, either `npx expo run:ios`
  - After building the dev client, from the root of the monorepo...
    - `yarn native` (This runs `npx expo start --dev-client`)

## 🎙 About Solito

See the [Solito docs](https://solito.dev) for more information.

## About this example

This example was created using the [Solito starter](https://github.com/nandorojo/solito/tree/master/example-monorepos/blank). Please refer to that starter's README for more information on development.
