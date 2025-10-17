import { FlatList, View } from 'react-native'
import { ActivityCard } from '@/entities/activity'
import ListSeparator from '../listSeparator/ListSeparator'
import { useActivitiesList } from '../../model/hooks/useActivitiesList'
import ListLoader from '../listLoader/ListLoader'
import ListError from '../listError/ListError'
import { useAppNavigation } from '@/shared/hooks/useAppNavigation'
import { RouteName } from '@/app/navigation/model/types/route'

const ActivitiesList = () => {
  const navigation = useAppNavigation()
  const { data, isFetching, isError, refetch } = useActivitiesList()

  const handleGoToActivityScreen = (id: number) => {
    navigation.navigate(RouteName.ACTIVITY, { id })
  }

  if (isFetching) {
    return <ListLoader />
  }

  if (isError) {
    return <ListError onRefetch={refetch} />
  }

  return (
    <View className="flex-1 pb-3">
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ActivityCard activity={item} onPress={handleGoToActivityScreen} />
        )}
        contentContainerClassName="px-container-x flex-grow pt-[30px]"
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <ListSeparator />}
      />
    </View>
  )
}

export default ActivitiesList
