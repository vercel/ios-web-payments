import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native'
import { Auth } from 'app/features/auth/client'

import { HomeScreen } from 'app/features/home/screen'
import { CheckoutSuccessScreen } from 'app/features/checkout/success/screen'
import { CheckoutErrorScreen } from 'app/features/checkout/cancel/screen'

const Stack = createNativeStackNavigator<{
  home: undefined

  'checkout-success': undefined
  'checkout-cancel': undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Solito Payments',
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
          title: 'Solito Payment',
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
