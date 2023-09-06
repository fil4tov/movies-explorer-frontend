import {
  BREAK_POINTS,
  SelectCardsAddToLimitByWidth,
  SelectCardsLimitByWidth,
  SelectCardsLimitMultipleOfByWidth
} from './constants'
import {
  type BreakPoints,
  type BreakPointsByWidth
} from './types'

const getBreakPointsWithUserWidth = (width: number) => {
  const sizes = { ...BREAK_POINTS, USER_WIDTH: width }
  const sortedBreakPoints = Object.entries(sizes).sort((a, b) => a[1] - b[1])
  const userWidthIndex = sortedBreakPoints.findIndex(el => el.at(0) === 'USER_WIDTH')

  return {
    sortedBreakPoints,
    userWidthIndex
  }
}

const getUserWidthLimit = (width: number): BreakPoints => {
  const { sortedBreakPoints, userWidthIndex } = getBreakPointsWithUserWidth(width)

  return sortedBreakPoints[userWidthIndex - 1]?.[1]
    ? sortedBreakPoints[userWidthIndex - 1][1]
    : BREAK_POINTS.MOBILE
}

const getBreakPointsByWidth = (width: number): BreakPointsByWidth => {
  const { sortedBreakPoints, userWidthIndex } = getBreakPointsWithUserWidth(width)

  return {
    prevPoint: sortedBreakPoints[userWidthIndex - 1]?.[1] ?? -Infinity,
    nextPoint: sortedBreakPoints[userWidthIndex + 1]?.[1] ?? Infinity
  }
}

export const calculateUserWidthParams = (width: number) => {
  const userWidthLimit = getUserWidthLimit(width)

  const cardsLimit = SelectCardsLimitByWidth[userWidthLimit]
  const cardsAddToLimit = SelectCardsAddToLimitByWidth[userWidthLimit]
  const cardsLimitMultipleOf = SelectCardsLimitMultipleOfByWidth[userWidthLimit]
  const breakPoints = getBreakPointsByWidth(width)

  return {
    cardsLimit,
    cardsAddToLimit,
    cardsLimitMultipleOf,
    breakPoints
  }
}
