import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { Auth } from 'app/features/auth/client'

export default function App() {
  return (
    <Provider>
      <Auth.AuthGate>
        {(auth) => {
          return <NativeNavigation />
        }}
      </Auth.AuthGate>
    </Provider>
  )
}
