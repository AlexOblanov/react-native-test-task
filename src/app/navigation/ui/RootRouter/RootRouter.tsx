import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { RootStackParamList, RouteName } from '../../model/types/route'
import { routeList } from '../../model/constants/routeList'

const Stack = createStackNavigator<RootStackParamList>()

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.HOME}
      screenOptions={({ navigation }) => ({
        headerShown: false,
        gestureEnabled: true,
        detachPreviousScreen: !navigation.isFocused(),

        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      {routeList.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  )
}

export default RootRouter
