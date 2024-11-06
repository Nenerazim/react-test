import { SharedApi } from '@shared'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export function App() {
  return (
    <QueryClientProvider client={SharedApi.queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
