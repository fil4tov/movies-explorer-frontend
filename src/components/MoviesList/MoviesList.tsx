import { type ReactNode, useMemo } from 'react'
import { MovieCard } from 'components'
import { PageLoader, Section } from 'components/UI'
import { type Movie } from 'modules/movies'
import { useCardsByWidth } from './utils'
import './MoviesList.scss'

export interface MoviesListProps {
  cards: Movie[]
  areMoviesLoaded: boolean
  moreButton?: ReactNode
  isLoading?: boolean
  error?: string
  noCardsLimit?: boolean
}

export const MoviesList = ({
  moreButton,
  cards,
  isLoading,
  error,
  areMoviesLoaded,
  noCardsLimit
}: MoviesListProps) => {
  const {
    cardsShown,
    onLoadMore,
    isMoreButtonVisible
  } = useCardsByWidth(cards)

  const cardsLimit = useMemo(() =>
    noCardsLimit ? cards.length : cardsShown,
  [cards, cardsShown, noCardsLimit]
  )

  if (isLoading) {
    return <PageLoader isLoading={isLoading} />
  }

  return (
    <Section
      className="movies-list"
      paddingX="s"
      paddingY="s"
    >
      {!areMoviesLoaded && !cards.length && (
        <h2 className='movies-list__title'>Введите запрос, чтобы увидеть фильмы</h2>
      )}

      {areMoviesLoaded && !cards.length && (
        <h2 className='movies-list__title'>Фильмы не найдены</h2>
      )}

      <ul className="movies-list__list">
        {cards.map((movie, i) => (
          i < cardsLimit
            ? <li key={movie.movieId} ><MovieCard {...movie} /></li>
            : null
        ))}
      </ul>

      {isMoreButtonVisible && (
        <div onClick={onLoadMore} className="movies-list__button-container">
          {moreButton}
        </div>
      )}
    </Section>
  )
}
