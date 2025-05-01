// you can replace this file with your own auth

import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { DecodedIdToken, getAuth } from 'firebase-admin/auth'
import { SERVER_ENV } from 'app/env/server-env'

const getApp = () => {
  if (!SERVER_ENV.FIREBASE_SERVICE_ACCOUNT_JSON) {
    console.error(
      'process.env.FIREBASE_SERVICE_ACCOUNT_JSON is not set. verifyToken will not work.'
    )
    return
  }
  const apps = getApps()
  if (apps.length === 0) {
    return initializeApp({
      credential: cert(SERVER_ENV.FIREBASE_SERVICE_ACCOUNT_JSON),
    })
  }
  return apps[0]
}

export const serverAuth = {
  verifyToken: async (token: string): Promise<DecodedIdToken | null> => {
    const app = getApp()
    if (!app) {
      return null
    }
    const firebaseAuth = getAuth(app)
    const decodedToken = await firebaseAuth.verifyIdToken(token)
    return decodedToken
  },
}
