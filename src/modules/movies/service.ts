import { Service } from 'utils'
import { FILMS_URL } from 'utils/constants'
import { type Movie, type MovieBeatFilm } from './types'

class MoviesService extends Service {
  async getAllMovies () {
    const movies: MovieBeatFilm[] = await this.request('beatfilm-movies', 'GET')
    return this.modifyMoviesResponse(movies)
  }

  private modifyMoviesResponse (movies: MovieBeatFilm[]): Movie[] {
    return movies.map(res => ({
      movieId: res.id,
      country: res.country,
      description: res.description,
      director: res.director,
      duration: res.duration,
      nameEN: res.nameEN,
      nameRU: res.nameRU,
      year: res.year,
      trailerLink: res.trailerLink,
      image: `${this.BASE_URL}${res.image.url}`,
      thumbnail: `${this.BASE_URL}${res.image.formats.thumbnail.url}`
    }))
  }
}

export const movieApi = new MoviesService(FILMS_URL)
