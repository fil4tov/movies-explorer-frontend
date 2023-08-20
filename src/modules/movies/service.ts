import { Service } from 'utils'
import { type Movie, type MoviePayload } from 'modules/movies/types'
import { MAIN_URL } from 'utils/constants'

class MoviesService extends Service {
  async getAllMovies () {
    return await this.request<Movie[]>('movies', 'GET')
  }

  async addMovie (movie: MoviePayload) {
    return await this.requestWithBody<Movie>('movies', 'POST', movie)
  }

  async deleteMovie (id: string) {
    return await this.request(`movies/${id}`, 'DELETE')
  }
}

export const moviesApi = new MoviesService({
  baseUrl: MAIN_URL,
  credentials: 'include'
})
