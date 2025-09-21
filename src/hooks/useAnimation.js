import { useState, useCallback } from 'react'

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationType, setAnimationType] = useState('bounce')

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const changeAnimationType = useCallback((type) => {
    setAnimationType(type)
  }, [])

  return {
    isAnimating,
    animationType,
    startAnimation,
    stopAnimation,
    toggleAnimation,
    changeAnimationType
  }
}