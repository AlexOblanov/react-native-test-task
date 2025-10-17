import { RouteName } from '@/app/navigation'
import { AddToFavoritesButton } from '@/features/activity/addToFavorites'
import { useGetRouteParams } from '@/shared/hooks/useAppRoute'
import { ActivityDetails } from '@/widgets/activity/activityDetails'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ActivityScreen = () => {
  const params = useGetRouteParams<RouteName.ACTIVITY>()
  const { bottom } = useSafeAreaInsets()

  if (!params) {
    return <Text>Error: there is no id</Text>
  }

  return (
    <View
      style={{ marginBottom: bottom }}
      className={`flex-1 bg-surface-primary`}
    >
      <StatusBar hidden />
      <ScrollView className="flex-1">
        <ActivityDetails id={params.id} />
      </ScrollView>
      <View className="px-container-x bg-white mt-5">
        <AddToFavoritesButton id={params.id} />
      </View>
    </View>
  )
}

export default ActivityScreen
