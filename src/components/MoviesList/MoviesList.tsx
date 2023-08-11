import { Section } from 'components/UI'
import { type ReactNode } from 'react'
import { MovieCard } from 'components'
import { type Movie } from 'modules/movies'
import './MoviesList.scss'

interface MoviesListProps {
  movies: Movie[]
  loadButton?: ReactNode
  //TODO ЭТО ВРЕМЕННО УБРАТЬ ПОТОМ
  cards: number
}

export const MoviesList = ({ loadButton, movies, cards }: MoviesListProps) => {
  return (
    <Section
      className="movies-list"
      paddingX="s"
      paddingY="s"
    >
      <ul className="movies-list__list">
        {movies.map(({ movieId, ...movie }, i) => {
          //временно для верстки
          return i < cards
            ? <MovieCard key={movieId} {...movie} />
            : null
        })}
      </ul>

      {loadButton && (
        <div className="movies-list__button-container">
          {loadButton}
        </div>
      )}
    </Section>
  )
}
