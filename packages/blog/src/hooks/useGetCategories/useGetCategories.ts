import { useQueryClient } from 'react-query'

export function useGetCategories() {
  const queryClient = useQueryClient()
  const categories = queryClient.getQueryData<{ label: string; url: string }[]>('categories')
  return categories || []
}
