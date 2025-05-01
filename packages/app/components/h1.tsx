import { Text } from 'react-native'

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      style={{
        fontWeight: '700',
        fontSize: 20,
        letterSpacing: -0.2,
        textAlign: 'center',
      }}
    >
      {children}
    </Text>
  )
}
