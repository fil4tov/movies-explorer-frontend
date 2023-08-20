import { type Dispatch, type MutableRefObject, type SetStateAction } from 'react'
import { type State } from '../types'

export type Movie = {
  _id: string | null
  owner: string | null
  country: string
  director: string
  duration: number
  year: string
  description: string
  image: string
  trailerLink: string
  thumbnail: string
  movieId: number
  nameRU: string
  nameEN: string
}

export type MoviePayload = Omit<Movie, '_id' | 'owner'>

export type MoviesState = State<{
  movies: Movie[]
  savedMovies: Movie[]
  setMovies: Dispatch<SetStateAction<Movie[]>>
  setSavedMovies: Dispatch<SetStateAction<Movie[]>>
  getAllMovies: () => Promise<Movie[]>
  getAllSavedMovies: () => Promise<void>
  addMovie: (data: Movie) => void
  deleteMovie: (id: string) => void
  areMoviesLoaded: MutableRefObject<boolean>
}>
