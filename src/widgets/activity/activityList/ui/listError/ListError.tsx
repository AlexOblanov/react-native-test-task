import { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

type ListErrorProps = {
  onRefetch: () => void
}

const ListError: FC<ListErrorProps> = props => {
  const { onRefetch } = props

  return (
    <View className="flex-1 justify-center items-center flex-col gap-y-3">
      <Text>Something went wrong</Text>
      <TouchableOpacity onPress={onRefetch}>
        <Text>Try again</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListError
