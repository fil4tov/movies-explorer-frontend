import {
  type BreakPoints,
  type CardsAddToLimit,
  type CardsLimit,
  type CardsLimitMultipleOf,
  type Devices
} from './types'

export const DEVICES = {
  LAPTOP: 'LAPTOP',
  TABLET: 'TABLET',
  MOBILE: 'MOBILE'
} as const

export const BREAK_POINTS: Record<Devices, number> = {
  [DEVICES.LAPTOP]: 1024,
  [DEVICES.TABLET]: 526,
  [DEVICES.MOBILE]: 320
} as const

export const CARDS_LIMIT: Record<Devices, number> = {
  [DEVICES.LAPTOP]: 12,
  [DEVICES.TABLET]: 8,
  [DEVICES.MOBILE]: 5
} as const

export const CARDS_ADD_TO_LIMIT: Record<Devices, number> = {
  [DEVICES.LAPTOP]: 3,
  [DEVICES.TABLET]: 2,
  [DEVICES.MOBILE]: 2
}

export const CARDS_LIMIT_MULTIPLE_OF: Record<Devices, number> = {
  [DEVICES.LAPTOP]: 3,
  [DEVICES.TABLET]: 2,
  [DEVICES.MOBILE]: 1
}

export const SelectCardsLimitByWidth: Record<BreakPoints, CardsLimit> = {
  [BREAK_POINTS.LAPTOP]: CARDS_LIMIT.LAPTOP,
  [BREAK_POINTS.TABLET]: CARDS_LIMIT.TABLET,
  [BREAK_POINTS.MOBILE]: CARDS_LIMIT.MOBILE
} as const

export const SelectCardsAddToLimitByWidth: Record<BreakPoints, CardsAddToLimit> = {
  [BREAK_POINTS.LAPTOP]: CARDS_ADD_TO_LIMIT.LAPTOP,
  [BREAK_POINTS.TABLET]: CARDS_ADD_TO_LIMIT.TABLET,
  [BREAK_POINTS.MOBILE]: CARDS_ADD_TO_LIMIT.MOBILE
}

export const SelectCardsLimitMultipleOfByWidth: Record<BreakPoints, CardsLimitMultipleOf> = {
  [BREAK_POINTS.LAPTOP]: CARDS_LIMIT_MULTIPLE_OF.LAPTOP,
  [BREAK_POINTS.TABLET]: CARDS_LIMIT_MULTIPLE_OF.TABLET,
  [BREAK_POINTS.MOBILE]: CARDS_LIMIT_MULTIPLE_OF.MOBILE
}
