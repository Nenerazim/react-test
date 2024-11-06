import { HomePage } from '@pages/home'
import { createBrowserRouter } from 'react-router-dom'
import { FormPage } from '@pages/form'
import { Layout } from '@widgets/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
    ],
  },
])
