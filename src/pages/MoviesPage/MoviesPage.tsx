import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { type FilterParams, MoviesList, Search } from 'components'
import { Button } from 'components/UI'
import { useMovies } from 'core/providers'
import {
  type Movie,
  filterMoviesByName,
  filterMoviesByDuration,
  saveFilterQuery
} from 'modules/movies'
import { LOCAL_STORAGE_KEYS } from 'utils/constants'
import { getFromStorage } from 'utils/helpers'

const MoviesPage = () => {
  const { isLoading, getAllMovies, setMovies, movies, areMoviesLoaded } = useMovies()
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

  const onSubmit = async (filterParams: FilterParams) => {
    const movies = await getAllMovies()
    const searchedMovies = filterMoviesByName(movies, filterParams.search)
    setMovies(searchedMovies)

    const filteredByDuration = filterMoviesByDuration(searchedMovies, filterParams.onlyShorts)
    setFilteredMovies(filteredByDuration)

    saveFilterQuery({
      searchedMovies,
      filteredMovies: filteredByDuration,
      filterParams
    })
  }

  const onToggleSwitcher = (filterParams: FilterParams) => {
    const filteredByDuration = filterMoviesByDuration(movies, filterParams.onlyShorts)

    setFilteredMovies(filteredByDuration)

    saveFilterQuery({
      searchedMovies: movies,
      filteredMovies: filteredByDuration,
      filterParams
    })
  }

  const initialSearchParams = useMemo<FilterParams | undefined>(() => {
    const savedParams = getFromStorage<FilterParams>(LOCAL_STORAGE_KEYS.FILTER_PARAMS)
    return savedParams ?? undefined
  }, [])

  useLayoutEffect(() => {
    const savedSearchedMovies = getFromStorage<Movie[]>(LOCAL_STORAGE_KEYS.SEARCHED_MOVIES)
    const savedFilteredMovies = getFromStorage<Movie[]>(LOCAL_STORAGE_KEYS.FILTERED_MOVIES)

    if (savedSearchedMovies) setMovies(savedSearchedMovies)
    if (savedFilteredMovies) setFilteredMovies(savedFilteredMovies)
  }, [setMovies])

  useEffect(() => {
    return () => {
      areMoviesLoaded.current = false
    }
  }, [areMoviesLoaded])

  return (
    <>
      <Search
        initialSearchParams={initialSearchParams}
        onSubmit={onSubmit}
        onToggleSwitcher={onToggleSwitcher}
      />
      <MoviesList
        areMoviesLoaded={areMoviesLoaded.current}
        cards={filteredMovies}
        moreButton={<Button fullWidth color="grey">Ещё</Button>}
        isLoading={isLoading}
      />
    </>
  )
}

export default MoviesPage
