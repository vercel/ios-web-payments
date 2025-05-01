import { PUBLIC_ENV } from 'app/env/public-env'
import { initializeApp } from 'firebase/app'
import {
  initializeAuth,
  signInAnonymously,
  onIdTokenChanged,
  User,
  signOut,
} from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'
import persistence from './persistence'

let app: ReturnType<typeof initializeApp> | undefined
if (!app) {
  app = initializeApp(PUBLIC_ENV.FIREBASE_CONFIG)
}
let auth: ReturnType<typeof initializeAuth> | undefined
if (!auth) {
  auth = initializeAuth(app, {
    persistence: persistence,
  })
}

const getToken = async () => {
  const user = auth.currentUser
  if (!user) return null
  const token = await user.getIdToken()
  return token
}

export const Auth = {
  signInAnonymously: async () => {
    // be sure to enable this in the firebase console
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
