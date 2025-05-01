import { ExpoConfig } from 'expo/config'

const BUNDLE_IDENTIFIER =
  process.env.EXPO_PUBLIC_BUNDLE_IDENTIFIER || 'com.solito.payments'

const APP_URL = process.env.EXPO_PUBLIC_APP_URL || 'solito-payments.vercel.app'

// TODO does expo not support importing these from the shared package?
const PUBLIC_ENV = {
  BUNDLE_IDENTIFIER,
  APP_URL,
}

export default {
  name: 'solito-payments',
  slug: 'solito-payments',
  version: '1.0.0',
  scheme: 'solito-payments',
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
} satisfies ExpoConfig
