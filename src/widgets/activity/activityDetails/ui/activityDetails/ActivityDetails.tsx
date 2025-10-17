import { FC } from 'react'
import { View, Text } from 'react-native'
import { useActivityById } from '../../model/hooks/useActivityById'
import { AppImage } from '@/shared/ui/appImage/AppImage'
import { useAppNavigation } from '@/shared/hooks/useAppNavigation'
import CustomButton from '@/shared/ui/customButton/CustomButton'
import ArrowLeftIcon from '@/shared/assets/icons/arrowLeftIcon.svg'

type ActivityDetailsProps = {
  id: number
}

const ActivityDetails: FC<ActivityDetailsProps> = props => {
  const navigation = useAppNavigation()
  const { id } = props
  const { activity } = useActivityById(id)

  const handleGoBack = () => {
    navigation.goBack()
  }

  if (!activity) {
    return null
  }

  return (
    <View>
      <View className="relative w-full aspect-[8/10]">
        <AppImage
          className="rounded-b-[20px] w-full h-full"
          uri={activity.photoUrl}
        />
        <View className="absolute top-[35px] left-[13px] ">
          <CustomButton
            Icon={ArrowLeftIcon}
            variant="secondary"
            className="w-[56px]"
            onPress={handleGoBack}
          />
        </View>
      </View>
      <View className="px-container-x">
        <View className="py-5 border-b-[1px] border-b-border-primary">
          <View className="flex-col gap-y-5">
            <Text className="font-abel text-[24px] text-text-primary">
              {activity.name}
            </Text>

            <View className="flex-row justify-between items-center">
              <Text className="text-[16px] font-abel text-text-primary">
                ${activity.price}
              </Text>
              <Text className="text-[12px] font-sf-pro text-text-secondary">
                Included taxes and fees
              </Text>
            </View>
          </View>
        </View>

        <View className="py-5 border-b-[1px] border-b-border-primary flex-col gap-y-[10px]">
          <Text className="text-[16px] text-text-primary font-abel">
            Description
          </Text>
          <Text className="text-[14px] text-text-tertiary font-sf-pro">
            {activity.description}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ActivityDetails
