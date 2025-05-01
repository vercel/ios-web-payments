'use client'

import { Text, View, Linking } from 'react-native'
import { PUBLIC_ENV } from 'app/env/public-env'
import { Button } from 'app/components/button'
import { Auth } from 'app/features/auth/client'
import { useState } from 'react'

export function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        gap: 32,
      }}
    >
      <H1>Zero-commission payments.</H1>
      <View style={{ gap: 4, opacity: isLoading ? 0.5 : 1 }}>
        <Button
          inverse
          title="Checkout"
          onPress={async () => {
            setIsLoading(true)
            try {
              const token = await Auth.getToken()
              const session = await fetch(PUBLIC_ENV.STRIPE_CHECKOUT_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              }).then((res) => res.json())
              if (session && typeof session.url === 'string') {
                Linking.openURL(session.url)
              }
            } finally {
              setIsLoading(false)
            }
          }}
        />
        <Button title="Log out" onPress={() => Auth.signOut()} />
      </View>
    </View>
  )
}

const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      style={{
        fontWeight: '700',
        fontSize: 24,
        letterSpacing: -0.2,
        textAlign: 'center',
      }}
    >
      {children}
    </Text>
  )
}

const P = ({ children }: { children: React.ReactNode }) => {
  return <Text style={{ textAlign: 'center' }}>{children}</Text>
}
