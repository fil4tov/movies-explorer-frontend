export const saveToStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getFromStorage = <T>(key: string): T | null => {
  return JSON.parse(localStorage.getItem(key) as string) as T
}

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key)
}
