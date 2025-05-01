import { ExpoConfig } from 'expo/config'

const BUNDLE_IDENTIFIER =
  process.env.EXPO_PUBLIC_BUNDLE_IDENTIFIER || 'com.solito.payments'

const APP_URL = process.env.EXPO_PUBLIC_APP_URL || 'solito-payments.vercel.app'

// TODO does expo not support importing these from the shared package?
const PUBLIC_ENV = {
  BUNDLE_IDENTIFIER,
  APP_URL,
  SCHEME: 'solito-payments',
}

export default {
  name: 'Solito Payments',
  slug: 'solito-payments',
  version: '1.0.0',
  scheme: PUBLIC_ENV.SCHEME,
  platforms: ['ios', 'android'],
  ios: {
    bundleIdentifier: PUBLIC_ENV.BUNDLE_IDENTIFIER,
    associatedDomains: [`applinks:${PUBLIC_ENV.APP_URL}`],
  },
  android: {
    intentFilters: [
      {
        action: 'VIEW',
        autoVerify: true,
        data: [
          {
            scheme: 'https',
            host: `*.${PUBLIC_ENV.APP_URL}`,
            pathPrefix: '/',
          },
        ],
        category: ['BROWSABLE', 'DEFAULT'],
      },
    ],
  },
  newArchEnabled: true,
  experiments: {
    reactCanary: true,
    reactCompiler: true,
  },
  plugins: [
    [
      'expo-web-browser',
      {
        experimentalLauncherActivity: true,
      },
    ],
  ],
} satisfies ExpoConfig
