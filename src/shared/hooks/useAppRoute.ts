import { RootStackParamList, RouteName } from '@/app/navigation'
import { RouteProp, useRoute } from '@react-navigation/native'

export const useGetRouteParams = <T extends RouteName>() => {
  const route = useRoute<RouteProp<RootStackParamList, T>>()

  return route.params
}
