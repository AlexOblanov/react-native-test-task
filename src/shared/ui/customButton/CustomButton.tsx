import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { tv } from 'tailwind-variants'

const button = tv({
  slots: {
    base: 'items-center justify-center h-[56px] rounded-[200px]',
    container: 'flex-row items-center justify-center gap-x-2',
    text: 'font-abel text-[16px] leading-[76%]',
  },
  variants: {
    variant: {
      primary: {
        base: 'bg-button-primary',
        text: 'text-text-inverted',
      },
      secondary: {
        base: 'bg-button-secondary',
        text: 'text-text-primary',
      },
    },
  },
})

type CustomButtonProps = {
  variant?: 'primary' | 'secondary'
  title?: string
  Icon?: FC<SvgProps>
  onPress: () => void
  className?: string
}

const CustomButton: FC<CustomButtonProps> = props => {
  const { variant = 'primary', title, Icon, onPress, className } = props

  const { base, container, text } = button({ variant })

  return (
    <Pressable className={base({ className })} onPress={onPress}>
      <View className={container()}>
        {Icon && <Icon width={24} height={24} className={text()} />}

        {title && <Text className={text()}>{title}</Text>}
      </View>
    </Pressable>
  )
}

export default CustomButton
