import CustomButton from '@/shared/ui/customButton/CustomButton'
import { FC } from 'react'
import { useAddToFavorites } from '../../model/hooks/useAddToFavorites'

type AddToFavoritesButtonProps = {
  id: number
}

const AddToFavoritesButton: FC<AddToFavoritesButtonProps> = props => {
  const { id } = props
  const { mutate, message } = useAddToFavorites()

  const handleAddToFavorites = () => {
    mutate({ data: { id } })
  }

  return (
    <CustomButton
      title={message ?? 'Add to Favorites'}
      onPress={handleAddToFavorites}
    />
  )
}

export default AddToFavoritesButton
