import { type RouteProps } from 'react-router-dom'
import { type $Keys, type $Values } from 'utility-types'
import { RequireAuth } from 'core/hoc'
import {
  HomePage,
  NotFoundPage,
  MoviesPage,
  ProfilePage,
  SavedMoviesPage,
  SignInPage,
  SignUpPage
} from 'pages'

type AppRouteNames = $Keys<typeof APP_ROUTES>
type AppRouteProps = RouteProps & {
  path?: $Values<typeof APP_ROUTES>
}
type RouterConfig = Record<AppRouteNames, AppRouteProps>

export const APP_ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
  PROFILE: '/profile',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  NOT_FOUND: '*'
} as const

export const ROUTER_CONFIG: RouterConfig = {
  HOME: {
    index: true,
    element: <HomePage />
  },
  MOVIES: {
    path: APP_ROUTES.MOVIES,
    element: <RequireAuth component={MoviesPage} />
  },
  SAVED_MOVIES: {
    path: APP_ROUTES.SAVED_MOVIES,
    element: <RequireAuth component={SavedMoviesPage} />
  },
  PROFILE: {
    path: APP_ROUTES.PROFILE,
    element: <RequireAuth component={ProfilePage} />
  },
  SIGN_IN: {
    path: APP_ROUTES.SIGN_IN,
    element: <SignInPage />
  },
  SIGN_UP: {
    path: APP_ROUTES.SIGN_UP,
    element: <SignUpPage />
  },
  NOT_FOUND: {
    path: APP_ROUTES.NOT_FOUND,
    element: <NotFoundPage />
  }
}
