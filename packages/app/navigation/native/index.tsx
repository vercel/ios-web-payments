import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native'
import { Auth } from 'app/features/auth/client'

import { HomeScreen } from 'app/features/home/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

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
    </Stack.Navigator>
  )
}
