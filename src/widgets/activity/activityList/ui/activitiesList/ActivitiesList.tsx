import { FlatList } from 'react-native'
import { ActivityCard } from '@/entities/activity'
import ListSeparator from '../listSeparator/ListSeparator'
import { useActivitiesList } from '../../model/hooks/useActivitiesList'
import ListLoader from '../listLoader/ListLoader'
import ListError from '../listError/ListError'

const ActivitiesList = () => {
  const { data, isFetching, isError, refetch } = useActivitiesList()

  if (isFetching) {
    return <ListLoader />
  }

  if (isError) {
    return <ListError onRefetch={refetch} />
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <ActivityCard activity={item} />}
      className="pt-[30px] flex-1"
      contentContainerClassName="px-container-x"
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <ListSeparator />}
    />
  )
}

export default ActivitiesList
