import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { type BreakPointsByWidth } from './types'
import { calculateUserWidthParams } from './helpers'
import { type MoviesListProps } from '../MoviesList'
import { useResizeObserver } from 'utils/hooks'

//TODO попробовать запихнуть все рефы в 1
export const useCardsByWidth = (cards: MoviesListProps['cards']) => {
  const { body } = document
  const [cardsShown, setCardsShown] = useState(0)
  const [isLastLoaded, setIsLastLoaded] = useState(false)

  const areMoreCardsLoaded = useRef(false)
  const cardsShownRef = useRef(0)
  const limitRef = useRef(0)
  const addToLimitRef = useRef(0)
  const cardsLimitMultipleOfRef = useRef(0)
  const breakPointsRef = useRef<BreakPointsByWidth>({
    prevPoint: 0,
    nextPoint: 0
  })

  const areAllCardsShown = useMemo(() => cards.length <= cardsShown, [cardsShown, cards.length])
  const isMoreButtonVisible = !areAllCardsShown

  useLayoutEffect(() => {
    const {
      cardsLimit,
      cardsAddToLimit,
      cardsLimitMultipleOf,
      breakPoints
    } = calculateUserWidthParams(body.offsetWidth)

    setCardsShown(cardsLimit)
    cardsShownRef.current = cardsLimit

    limitRef.current = cardsLimit
    addToLimitRef.current = cardsAddToLimit
    cardsLimitMultipleOfRef.current = cardsLimitMultipleOf
    breakPointsRef.current = breakPoints
  }, [])

  useResizeObserver({
    target: body,
    unobserve: isLastLoaded,
    onResize: (entry) => {
      const { width } = entry.contentRect
      const { nextPoint, prevPoint } = breakPointsRef.current
      const {
        cardsLimit,
        cardsAddToLimit,
        cardsLimitMultipleOf,
        breakPoints
      } = calculateUserWidthParams(width)

      if (width > nextPoint || width < prevPoint) {
        const isFirstRender = !areMoreCardsLoaded.current && cardsShown === limitRef.current
        const areNotEnoughToFillTheLine =
          areMoreCardsLoaded.current && cardsShownRef.current % cardsLimitMultipleOf !== 0

        if (isFirstRender) {
          setCardsShown(cardsLimit)
          cardsShownRef.current = cardsLimit
        }

        if (areNotEnoughToFillTheLine) {
          let cardsShown = cardsShownRef.current
          while (cardsShown % cardsLimitMultipleOf !== 0) {
            cardsShown++
          }
          cardsShownRef.current = cardsShown
          setCardsShown(cardsShown)
        }

        limitRef.current = cardsLimit
        addToLimitRef.current = cardsAddToLimit
        breakPointsRef.current = breakPoints
      }
    }
  })

  useEffect(() => {
    if (cards.length && cardsShown >= cards.length) {
      setIsLastLoaded(true)
    }
  }, [cardsShown, cards.length])

  const onLoadMore = () => {
    areMoreCardsLoaded.current = true
    setCardsShown(prev => prev + addToLimitRef.current)
    cardsShownRef.current = cardsShown + addToLimitRef.current
  }

  return {
    cardsShown,
    isMoreButtonVisible,
    onLoadMore
  }
}
