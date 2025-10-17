import { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Activity } from '../../model/types/activity'
import StarIcon from '@/shared/assets/icons/starIcon.svg'
import MapPinIcon from '@/shared/assets/icons/mapPinIcon.svg'
import { AppImage } from '@/shared/ui/appImage/AppImage'

type ActivityCardProps = {
  activity: Activity
  onPress: (id: number) => void
}

const ActivityCard: FC<ActivityCardProps> = props => {
  const { activity, onPress } = props

  return (
    <TouchableOpacity
      onPress={() => onPress(activity.id)}
      activeOpacity={0.85}
      className="flex-col gap-y-[2px]"
    >
      <View className="relative w-full aspect-[2.4/1]">
        <AppImage
          className="rounded-[20px] w-full h-full"
          uri={activity.photoUrl}
          resizeMode="cover"
        />
        <View></View>
      </View>
      <View className="p-5 rounded-[20px] bg-surface-secondary justify-between items-center flex-row">
        <View className="flex-col gap-y-3">
          <Text className="font-abel text-[16px]">{activity.name}</Text>
          <View className="flex-row gap-x-[6px] items-center">
            <MapPinIcon />
            <Text className="text-[12px] font-sf-pro">{activity.location}</Text>
          </View>
        </View>

        <View className="flex-col gap-y-3">
          <View className="gap-x-[2px] items-center flex-row">
            <StarIcon />
            <Text className="text-[12px] font-sf-pro">{activity.rating}</Text>
          </View>
          <View className="items-center gap-x-1 flex-row">
            <Text className="text-[14px] font-abel">${activity.price}</Text>
            <Text className="text-[12px] font-sf-pro text-text-secondary">
              / night
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ActivityCard
