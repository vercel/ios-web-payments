'use client'

import { Text, View, Linking } from 'react-native'
import { PUBLIC_ENV } from 'app/env/public-env'
import { Button } from 'app/components/button'
import { Auth } from 'app/features/auth/client'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { H1 } from 'app/components/h1'
export function HomeScreen() {
  const { top, bottom } = useSafeAreaInsets()
  const [isLoading, setIsLoading] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        width: '100%',
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          maxWidth: 400,
          alignSelf: 'center',
          paddingTop: 32,
        }}
      >
        <H1>Zero-commission payments.</H1>
      </View>
      <View style={{ gap: 8, opacity: isLoading ? 0.5 : 1 }}>
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

const P = ({ children }: { children: React.ReactNode }) => {
  return <Text style={{ textAlign: 'center' }}>{children}</Text>
}
