import { type RouteProps } from 'react-router-dom'
import {
  HomePage,
  NotFoundPage,
  MoviesPage,
  ProfilePage,
  SavedMoviesPage,
  SignInPage,
  SignUpPage
} from 'pages'

type AppRouteKeys = keyof typeof APP_ROUTES
type RoutePropsWithCustomPath = RouteProps & {
  path?: typeof APP_ROUTES[AppRouteKeys]
}
type RouterConfig = Record<AppRouteKeys, RoutePropsWithCustomPath>

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
    element: <MoviesPage />
  },
  PROFILE: {
    path: APP_ROUTES.PROFILE,
    element: <ProfilePage />
  },
  SAVED_MOVIES: {
    path: APP_ROUTES.SAVED_MOVIES,
    element: <SavedMoviesPage />
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
