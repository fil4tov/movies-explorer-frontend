import { MoviesList, Search } from 'components'
import { useEffect, useState } from 'react'
import { type Movie, movieApi } from 'modules/movies'
import { Button } from 'components/UI'

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    movieApi.getAllMovies()
      .then(setMovies)
  }, [])

  return (
    <>
      <Search />
      <MoviesList
        cards={12}
        movies={movies}
        loadButton={
          <Button fullWidth color="grey">Ещё</Button>
        }
      />
    </>
  )
}

export default MoviesPage
