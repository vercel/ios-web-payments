import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, View, Text } from 'react-native'
import { Auth } from 'app/features/auth/client'

import { HomeScreen } from 'app/features/home/screen'

const Stack = createNativeStackNavigator<{
  home: undefined

  'checkout-success': undefined
  'checkout-cancel': undefined
}>()

function CheckoutSuccessScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Checkout successful!</Text>
    </View>
  )
}

function CheckoutErrorScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Checkout canceled!</Text>
    </View>
  )
}

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Solito Payments Example',
          headerShown: false,
          headerRight: () => (
            <Button
              title="Sign out"
              onPress={() => Auth.signOut()}
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen
        name="checkout-success"
        component={CheckoutSuccessScreen}
        options={{
          title: 'Payment ✅',
        }}
      />
      <Stack.Screen
        name="checkout-cancel"
        component={CheckoutErrorScreen}
        options={{
          title: 'Canceled',
        }}
      />
    </Stack.Navigator>
  )
}
