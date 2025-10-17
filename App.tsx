import { RootRouter } from '@/app/navigation'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import './global.css'
import { QueryProvider } from '@/app/providers/store'

const Root = () => {
  return (
    <>
      <RootRouter />
    </>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent />
      <QueryProvider>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </GestureHandlerRootView>
      </QueryProvider>
    </SafeAreaProvider>
  )
}

export default App
