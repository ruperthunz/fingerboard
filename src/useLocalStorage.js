import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key)
    if (localValue == null) {
      if (typeof initialValue === "function") {
        return initialValue()
      } else {
        return initialValue
      }
    } else {
      return JSON.parse(localValue)
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
