'use client'

import { Text, View, Linking } from 'react-native'
import { PUBLIC_ENV } from 'app/env/public-env'
import { Button } from 'app/components/button'
import { Auth } from 'app/features/auth/client'

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 32,
      }}
    >
      <H1>Zero-commission payments.</H1>
      <Button
        title="Checkout"
        onPress={async () => {
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
        }}
      />
    </View>
  )
}

const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text style={{ fontWeight: '700', fontSize: 24, letterSpacing: -0.2 }}>
      {children}
    </Text>
  )
}

const P = ({ children }: { children: React.ReactNode }) => {
  return <Text style={{ textAlign: 'center' }}>{children}</Text>
}
