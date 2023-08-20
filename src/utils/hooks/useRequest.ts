import { useCallback, useEffect, useState } from 'react'

type UseRequestProps = {
  initialLoading: boolean
}

export const useRequest = ({ initialLoading }: UseRequestProps = { initialLoading: false }) => {
  const [isLoading, setIsLoading] = useState(initialLoading)
  const [error, setError] = useState('')

  const request = useCallback(async <T>(callback: () => Promise<T>): Promise<T> => {
    setIsLoading(true)

    try {
      return await callback()
    } catch (error) {
      setError(error as string)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    return () => {
      setError('')
    }
  }, [])

  return {
    isLoading,
    error,
    request,
    setIsLoading,
    setError
  }
}
