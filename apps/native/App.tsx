import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { Auth } from 'app/features/auth/client'
import { StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { Button } from 'app/components/button'

export default function App() {
  return (
    <Provider>
      <Auth.AuthGate>
        {(auth) => {
          if (auth.loading) {
            return <Loading />
          }
          if (!auth.user) {
            return <Authenticate />
          }
          return <NativeNavigation />
        }}
      </Auth.AuthGate>
    </Provider>
  )
}

function Loading() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    ></View>
  )
}

function Authenticate() {
  const [isSigningIn, setIsSigningIn] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 40,
        justifyContent: 'flex-end',
        padding: 16,
        opacity: isSigningIn ? 0.5 : 1,
      }}
    >
      <Button
        inverse={false}
        title="Sign in"
        onPress={() => {
          setIsSigningIn(true)
          Auth.signInAnonymously().finally(() => setIsSigningIn(false))
        }}
      />
    </View>
  )
}
