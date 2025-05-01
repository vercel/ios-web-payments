import { H1 } from 'app/components/h1'
import { View, Text } from 'react-native'

export function CheckoutErrorScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <H1>Checkout canceled!</H1>
    </View>
  )
}
