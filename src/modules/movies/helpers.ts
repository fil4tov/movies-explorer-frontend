import { type Movie } from 'modules/movies'
import { removeFromStorage, saveToStorage } from 'utils/helpers'
import { LOCAL_STORAGE_KEYS } from 'utils/constants'
import { type FilterParams } from 'components'

export const filterMoviesByName = (movies: Movie[], search: string) => {
  return movies
    .filter(movie =>
      movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(search.toLowerCase()))
}

export const filterMoviesByDuration = (movies: Movie[], onlyShorts: boolean) => {
  return movies.filter(movie => onlyShorts ? movie.duration <= 40 : movie)
}

export const saveFilterQuery = ({
  searchedMovies,
  filteredMovies,
  filterParams
}: {
  searchedMovies: Movie[]
  filteredMovies: Movie[]
  filterParams: FilterParams
}) => {
  saveToStorage(LOCAL_STORAGE_KEYS.SEARCHED_MOVIES, searchedMovies)
  saveToStorage(LOCAL_STORAGE_KEYS.FILTERED_MOVIES, filteredMovies)
  saveToStorage(LOCAL_STORAGE_KEYS.FILTER_PARAMS, filterParams)
}

export const clearFilterQuery = () => {
  removeFromStorage(LOCAL_STORAGE_KEYS.SEARCHED_MOVIES)
  removeFromStorage(LOCAL_STORAGE_KEYS.FILTERED_MOVIES)
  removeFromStorage(LOCAL_STORAGE_KEYS.FILTER_PARAMS)
}
