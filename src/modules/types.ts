export type State<T> = {
  isLoading: boolean
  error: string
} & T
