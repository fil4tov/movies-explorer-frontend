import { type Movie } from 'modules/movies'
import { type FilterParams } from 'components'

export const filterMovies = (movies: Movie[], { search, onlyShorts }: FilterParams) => {
  return movies
    .filter(movie =>
      movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(search.toLowerCase()))
    .filter(movie => onlyShorts ? movie.duration <= 40 : movie)
}
