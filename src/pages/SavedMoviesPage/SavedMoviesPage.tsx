import { type FilterParams, MoviesList, Search } from 'components'
import { useMovies } from 'core/providers'
import { useEffect, useState } from 'react'
import { type Movie, filterMoviesByName, filterMoviesByDuration } from 'modules/movies'

const SavedMoviesPage = () => {
  const { isLoading, savedMovies } = useMovies()
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

  useEffect(() => {
    setFilteredMovies(savedMovies)
  }, [savedMovies])

  const filterMovies = ({ search, onlyShorts }: FilterParams) => {
    const filteredByName = filterMoviesByName(savedMovies, search)
    const filteredByDuration = filterMoviesByDuration(filteredByName, onlyShorts)
    setFilteredMovies(filteredByDuration)
  }

  return (
    <>
      <Search onSubmit={filterMovies} onToggleSwitcher={filterMovies} />
      <MoviesList cards={filteredMovies} isLoading={isLoading} areMoviesLoaded noCardsLimit />
    </>
  )
}

export default SavedMoviesPage
