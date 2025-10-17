import { ActivitiesList } from '@/widgets/activity/activityList'
import { StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-surface-primary flex-1">
      <StatusBar barStyle="dark-content" />
      <View className="pt-[18.5px] pb-[7.5px]">
        <Text className="text-[16px] font-abel text-center text-text-primary leading-[20px]">
          Activities
        </Text>
      </View>
      <ActivitiesList />
    </SafeAreaView>
  )
}

export default HomeScreen
