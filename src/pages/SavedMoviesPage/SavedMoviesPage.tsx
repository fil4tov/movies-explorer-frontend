import { MoviesList, Search } from 'components'
import { useEffect, useState } from 'react'
import { type Movie, movieApi } from 'modules/movies'

const SavedMoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    movieApi.getAllMovies()
      .then(setMovies)
  }, [])

  return (
    <>
      <Search />
      <MoviesList movies={movies} cards={3} />
    </>
  )
}

export default SavedMoviesPage
