import { useGetActivities } from '@/shared/api/generated/api'
import { normalizeActivity } from '@/widgets/activity/activityList/model/helpers/normalizeActivity'

export const useActivityById = (id: number) => {
  const { data, ...rest } = useGetActivities({
    query: {
      queryKey: ['activities'],
      select: activities => {
        const normalized = (activities ?? []).map(normalizeActivity)
        return normalized.find(activity => activity.id === id) ?? null
      },
      enabled: false,
    },
  })

  return { activity: data, ...rest }
}
