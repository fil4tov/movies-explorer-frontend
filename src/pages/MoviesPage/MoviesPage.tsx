import { type FilterParams, MoviesList, Search } from 'components'
import { Button } from 'components/UI'
import { useMovies } from 'core/providers'
import { useEffect, useMemo } from 'react'
import { type Movie, filterMovies } from 'modules/movies'
import { LOCAL_STORAGE_KEYS } from 'utils/constants'
import { getFromStorage, saveToStorage } from 'utils/helpers'

const MoviesPage = () => {
  const { isLoading, getAllMovies, setMovies, movies, areMoviesLoaded } = useMovies()
  const onSubmit = async (params: FilterParams) => {
    const res = await getAllMovies()
    const filtered = filterMovies(res, params)

    setMovies(filtered)
    saveToStorage(LOCAL_STORAGE_KEYS.SEARCHED_MOVIES, filtered)
    saveToStorage(LOCAL_STORAGE_KEYS.SEARCH_PARAMS, params)
  }

  const cards = useMemo<Movie[]>(() => {
    const savedMovies = getFromStorage<Movie[]>(LOCAL_STORAGE_KEYS.SEARCHED_MOVIES) ?? []
    return movies.length ? movies : savedMovies
  }, [movies])

  const { search, onlyShorts } = useMemo<Partial<FilterParams>>(() => {
    const savedParams = getFromStorage<FilterParams>(LOCAL_STORAGE_KEYS.SEARCH_PARAMS)

    if (savedParams) {
      return {
        search: savedParams.search,
        onlyShorts: savedParams.onlyShorts
      }
    }
    return {
      onlyShorts: undefined,
      search: undefined
    }
  }, [])

  useEffect(() => {
    return () => {
      areMoviesLoaded.current = false
    }
  }, [areMoviesLoaded])

  return (
    <>
      <Search initialSearch={search} initialShorts={onlyShorts} onSubmit={onSubmit} />
      <MoviesList
        areMoviesLoaded={areMoviesLoaded.current}
        cards={cards}
        moreButton={<Button fullWidth color="grey">Ещё</Button>}
        isLoading={isLoading}
      />
    </>
  )
}

export default MoviesPage
