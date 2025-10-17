import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

type QueryProviderProps = {
  children: ReactNode
}

const queryClient = new QueryClient()

const QueryProvider: FC<QueryProviderProps> = props => {
  const { children } = props

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
