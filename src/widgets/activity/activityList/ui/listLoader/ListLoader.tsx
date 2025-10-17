import { View, Text, ActivityIndicator } from 'react-native'

const ListLoader = () => {
  return (
    <View className="flex-1 justify-center items-center flex-col gap-y-3">
      <ActivityIndicator size={24} />
      <Text className="text-[16px] text-text-primary text-center">
        Loading...
      </Text>
    </View>
  )
}

export default ListLoader
