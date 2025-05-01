# Solito iOS Web Payments Example

Example app of a Solito app that uses Stripe checkout on Web with an iOS app.

As of May 1, 2025, you can use web-based checkout on iOS without incurring Apple's commission.

<!-- 👾 [View the website](https://example.solito.dev)

## ⚡️ Instantly clone & deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnandorojo%2Fsolito%2Ftree%2Fmaster%2Fexample-monorepos%2Fblank&env=ENABLE_ROOT_PATH_BUILD_CACHE&root-directory=apps/web&envDescription=Set%20this%20environment%20variable%20to%201%20for%20Turborepo%20to%20cache%20your%20node_modules.&envLink=https%3A%2F%2Ftwitter.com%2Fjaredpalmer%2Fstatus%2F1488954563533189124&project-name=solito-app&repo-name=solito-app&demo-title=Solito%20App%20%E2%9A%A1%EF%B8%8F&demo-description=React%20Native%20%2B%20Next.js%20starter%20with%20Solito.%20Made%20by%20Fernando%20Rojo.&demo-url=https%3A%2F%2Fsolito.dev%2Fstarter&demo-image=https%3A%2F%2Fsolito.dev%2Fimg%2Fog.png&build-command=cd+..%2F..%3Bnpx+turbo+run+build+--filter%3Dnext-app) -->

## 🔦 About

This monorepo implemented `npx create-solito-app@latest`.

## 📦 Included packages

- `solito` for cross-platform navigation
- `moti` for animations
- Next.js 15 for API routes
- Expo 53 + React Native for the native app
- `stripe` for payments
- `firebase` for authentication (you can easily swap it out)
- React Navigation 7
- React 19 (read more below on the Solito [compatibility docs](https://solito.dev/compatibility))
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
