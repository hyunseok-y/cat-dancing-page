import { useState, useEffect, useCallback } from 'react'
import catSvg from '../assets/images/cat.svg'
import AnimationControls from './AnimationControls'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/animations.css'

const DancingCat = () => {
  const {
    isAnimating,
    animationType,
    toggleAnimation,
    changeAnimationType
  } = useAnimation()

  const handleKeyPress = useCallback((event) => {
    if (event.code === 'Space') {
      event.preventDefault()
      toggleAnimation()
    }
  }, [toggleAnimation])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  const animationClass = isAnimating ? `cat-${animationType}` : ''

  return (
    <div className="dancing-cat-container">
      <div className="cat-stage">
        <div className={`cat-wrapper ${animationClass}`}>
          <img 
            src={catSvg} 
            alt="Dancing Cat" 
            className="cat-image"
            role="img"
            aria-label={`고양이가 ${isAnimating ? animationType + ' 애니메이션으로 춤추고 있습니다' : '정지해 있습니다'}`}
          />
        </div>
        
        {isAnimating && (
          <div className="animation-effects">
            <div className="sparkle sparkle-1">✨</div>
            <div className="sparkle sparkle-2">🌟</div>
            <div className="sparkle sparkle-3">💫</div>
            <div className="sparkle sparkle-4">⭐</div>
          </div>
        )}
      </div>
      
      <AnimationControls 
        onAnimationChange={changeAnimationType}
        onToggle={toggleAnimation}
        isAnimating={isAnimating}
      />
      
      <div className="status-display">
        <p className="animation-status">
          상태: <span className={isAnimating ? 'active' : 'inactive'}>
            {isAnimating ? `${animationType} 댄스 중` : '정지'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default DancingCat