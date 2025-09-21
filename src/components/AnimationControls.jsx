import { useState } from 'react'

const AnimationControls = ({ onAnimationChange, onToggle, isAnimating }) => {
  const [selectedAnimation, setSelectedAnimation] = useState('bounce')

  const handleAnimationSelect = (animationType) => {
    setSelectedAnimation(animationType)
    onAnimationChange(animationType)
  }

  const animations = [
    { id: 'bounce', name: '통통 튀기', emoji: '⬆️' },
    { id: 'spin', name: '빙글빙글', emoji: '🌀' },
    { id: 'wiggle', name: '흔들흔들', emoji: '〰️' },
    { id: 'dance', name: '댄스 파티', emoji: '💃' }
  ]

  return (
    <div className="animation-controls">
      <button 
        onClick={onToggle}
        className="main-control-button"
        aria-label={isAnimating ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isAnimating ? '⏸️ 멈추기' : '▶️ 춤추기 시작!'}
      </button>
      
      <div className="animation-options">
        <h3>댄스 스타일 선택:</h3>
        <div className="animation-grid">
          {animations.map(({ id, name, emoji }) => (
            <button
              key={id}
              onClick={() => handleAnimationSelect(id)}
              className={`animation-option ${selectedAnimation === id ? 'active' : ''}`}
              aria-label={`${name} 애니메이션`}
            >
              <span className="emoji">{emoji}</span>
              <span className="name">{name}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="keyboard-hint">
        <small>💡 키보드 단축키: 스페이스바로 시작/정지</small>
      </div>
    </div>
  )
}

export default AnimationControls