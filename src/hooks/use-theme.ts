import { useState, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { logger } from '~/utils/logger'

type PersistedState<T> = [T, Dispatch<SetStateAction<T>>]

export function useTheme<T>(key: string, initialState: T): PersistedState<T> {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') {
      return initialState
    }

    try {
      const storageValue = window.localStorage.getItem(key)
      return storageValue ? JSON.parse(storageValue) : initialState
    } catch (error) {
      logger.error(error)
      return initialState
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value
      setState(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      logger.error(error)
    }
  }

  return [state, setState]
}
