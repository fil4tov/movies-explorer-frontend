import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { ROUTER_CONFIG } from '../config'
import { Layout } from 'pages'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    {Object.values(ROUTER_CONFIG).map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Route>
))

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
