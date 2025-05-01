import { H1 } from 'app/components/h1'
import { View, Text } from 'react-native'

export function CheckoutSuccessScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <H1>✅</H1>
      <H1>Checkout successful!</H1>
    </View>
  )
}
