// you can replace this file with your own auth

import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { SERVER_ENV } from 'app/env/server-env'

const getApp = () => {
  const apps = getApps()
  if (apps.length === 0) {
    return initializeApp({
      credential: cert(SERVER_ENV.FIREBASE_SERVICE_ACCOUNT_JSON),
    })
  }
  return apps[0]
}

export const serverAuth = {
  verifyToken: async (token: string) => {
    const app = getApp()
    const firebaseAuth = getAuth(app)
    const decodedToken = await firebaseAuth.verifyIdToken(token)
    return decodedToken
  },
}
