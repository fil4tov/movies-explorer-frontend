import { type Dispatch, type SetStateAction } from 'react'
import { type State } from 'modules/types'

export type User = {
  _id: string
  email: string
  name: string
}

export type AuthUserValues = {
  email: string
  password: string
  name?: string
}

export type UpdateUserValues = Omit<AuthUserValues, 'password'>

export type CurrentUserState = State<{
  user: Partial<User>
  setUser: Dispatch<SetStateAction<Partial<User>>>
  updateUser: (data: UpdateUserValues) => Promise<void>
}>
