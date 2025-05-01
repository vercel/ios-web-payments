import { View, Text } from 'react-native'

export function CheckoutErrorScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Checkout canceled!</Text>
    </View>
  )
}
