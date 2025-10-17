import { HomeScreen } from '@/screens/homeScreen'
import { ActivityScreen } from '@/screens/activityScreen'
import { Route, RouteName } from '../types/route'

export const routeList: Route[] = [
  {
    name: RouteName.HOME,
    component: HomeScreen,
  },
  {
    name: RouteName.ACTIVITY,
    component: ActivityScreen,
  },
]
