import { GetActivities200Item } from '@/shared/api/generated/api'
import { Activity } from '../../../../../entities/activity/model/types/activity'

export const normalizeActivity = (item: GetActivities200Item): Activity => ({
  id: item.id ?? 0,
  name: item.name ?? '',
  description: item.description ?? '',
  photoUrl: item.photoUrl ?? '',
  location: item.location ?? '',
  price: item.price ?? 0,
  rating: item.rating ?? 0,
})
