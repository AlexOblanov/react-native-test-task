import { StackScreenProps } from '@react-navigation/stack'
import { ComponentType } from 'react'

export type RootStackParamList = {
  [RouteName.HOME]: undefined
  [RouteName.ACTIVITY]: {
    id: number
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>

export enum RouteName {
  HOME = 'home',
  ACTIVITY = 'activity',
}

export type Route = {
  name: keyof RootStackParamList
  component: ComponentType
}
