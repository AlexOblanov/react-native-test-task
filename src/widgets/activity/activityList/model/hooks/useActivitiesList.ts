import {
  getGetActivitiesQueryKey,
  useGetActivities,
} from '@/shared/api/generated/api'
import { normalizeActivity } from '../helpers/normalizeActivity'

export const useActivitiesList = () => {
  const fields = useGetActivities({
    query: {
      queryKey: getGetActivitiesQueryKey(),
      select: data => (data ?? []).map(normalizeActivity),
    },
  })

  return fields
}
