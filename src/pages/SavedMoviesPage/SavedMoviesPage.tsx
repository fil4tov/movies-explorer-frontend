import { type FilterParams, MoviesList, Search } from 'components'
import { useMovies } from 'core/providers'
import { useEffect, useState } from 'react'
import { type Movie, filterMovies } from 'modules/movies'

const SavedMoviesPage = () => {
  const { isLoading, savedMovies } = useMovies()
  const [filtered, setFiltered] = useState<Movie[]>([])

  useEffect(() => {
    setFiltered(savedMovies)
  }, [savedMovies])

  const onSubmit = async (params: FilterParams) => {
    const filtered = filterMovies(savedMovies, params)
    setFiltered(filtered)
  }

  return (
    <>
      <Search onSubmit={onSubmit} />
      <MoviesList cards={filtered} isLoading={isLoading} areMoviesLoaded noCardsLimit />
    </>
  )
}

export default SavedMoviesPage
