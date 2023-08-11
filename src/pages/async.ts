import { lazy } from 'react'

export const SignUpPage = lazy(async () => await import('./SignUpPage/SignUpPage'))
export const SignInPage = lazy(async () => await import('./SignInPage/SignInPage'))
export const MoviesPage = lazy(async () => await import('./MoviesPage/MoviesPage'))
export const SavedMoviesPage = lazy(async () => await import('./SavedMoviesPage/SavedMoviesPage'))
export const NotFoundPage = lazy(async () => await import('./NotFoundPage/NotFoundPage'))
export const ProfilePage = lazy(async () => await import('./ProfilePage/ProfilePage'))
