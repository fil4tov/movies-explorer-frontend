import { type $Values } from 'utility-types'
import {
  type BREAK_POINTS,
  type CARDS_ADD_TO_LIMIT,
  type CARDS_LIMIT,
  type CARDS_LIMIT_MULTIPLE_OF,
  type DEVICES
} from './constants'

export type Devices = $Values<typeof DEVICES>
export type BreakPoints = $Values<typeof BREAK_POINTS>
export type CardsLimit = $Values<typeof CARDS_LIMIT>
export type CardsAddToLimit = $Values<typeof CARDS_ADD_TO_LIMIT>
export type CardsLimitMultipleOf = $Values<typeof CARDS_LIMIT_MULTIPLE_OF>

export type BreakPointsByWidth = {
  nextPoint: number
  prevPoint: number
}
