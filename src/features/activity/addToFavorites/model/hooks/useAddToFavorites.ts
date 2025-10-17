import { usePostFavorites } from '@/shared/api/generated/api'
import { useState } from 'react'

export const useAddToFavorites = () => {
  const [actionMessage, setActionMessage] = useState<string | null>(null)

  const fields = usePostFavorites({
    mutation: {
      onSuccess: () => {
        setActionMessage('Successfully added')

        setTimeout(() => {
          setActionMessage(null)
        }, 3000)
      },
      onError: () => {
        setActionMessage('Something went wrong')

        setTimeout(() => {
          setActionMessage(null)
        }, 3000)
      },
    },
  })

  return { message: actionMessage, ...fields }
}
