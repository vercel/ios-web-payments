import { Pressable, Text } from 'react-native'

export function Button({
  inverse = false,
  title,
  onPress,
}: {
  inverse?: boolean
  title: string
  onPress: () => void
}) {
  return (
    <Pressable
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        borderRadius: 99,
        backgroundColor: inverse ? '#999' : 'black',
        paddingHorizontal: 16,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: inverse ? 'black' : 'white',
          fontWeight: 'bold',
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </Pressable>
  )
}
