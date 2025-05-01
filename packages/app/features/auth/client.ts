import { PUBLIC_ENV } from 'app/env/public-env'
import { getApp, getApps, initializeApp } from 'firebase/app'
import {
  initializeAuth,
  signInAnonymously,
  onIdTokenChanged,
  User,
  // @ts-ignore
  getReactNativePersistence,
  signOut,
  getAuth,
} from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

let app: ReturnType<typeof initializeApp> | undefined
if (!app) {
  app = initializeApp(PUBLIC_ENV.FIREBASE_CONFIG)
}
let auth: ReturnType<typeof initializeAuth> | undefined
if (!auth) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  })
}

// const makeApp = (): ReturnType<typeof initializeApp> => {
//   const [app] = getApps()
//   if (!app) {
//     return initializeApp(PUBLIC_ENV.FIREBASE_CONFIG)
//   }

//   return app
// }

// const makeAuth = (): ReturnType<typeof initializeAuth> => {
//   const auth = getAuth(makeApp())
//   if (!auth) {
//     return initializeAuth(getApp(), {
//       persistence: getReactNativePersistence(ReactNativeAsyncStorage),
//     })
//   }
//   return auth
// }
const getToken = async () => {
  const user = auth.currentUser
  if (!user) return null
  const token = await user.getIdToken()
  return token
}

export const Auth = {
  signInAnonymously: async () => {
    const credential = await signInAnonymously(auth)
    return credential.user
  },
  onIdTokenChanged: (callback: (user: null | { uid: string }) => void) => {
    onIdTokenChanged(auth, callback)
  },
  signOut: async () => {
    await signOut(auth)
  },
  getToken,
  AuthGate({
    children,
  }: {
    children: (
      props:
        | { loading: true }
        | {
            user: User | null
            loading: false
          }
    ) => React.ReactNode
  }) {
    const [user, setUser] = useState<User | null | undefined>(undefined)
    useEffect(() => {
      onIdTokenChanged(auth, setUser)
    }, [])

    if (user === undefined) {
      return children({ loading: true })
    }

    return children({ user, loading: false })
  },
}
