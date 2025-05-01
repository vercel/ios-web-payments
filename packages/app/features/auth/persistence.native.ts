// @ts-ignore works on native
import { getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

export default getReactNativePersistence(ReactNativeAsyncStorage)
