// Updated Question.jsx with 45-second timer and auto-advance
import { useState, useEffect } from 'react'

const Question = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  questionNumber, 
  onTimeUp,
  showCorrectAnswer,
  onAutoAdvance
}) => {
  const [timeLeft, setTimeLeft] = useState(45) // 45 seconds per question

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp()
      // Auto advance after a brief delay to show the correct answer
      setTimeout(() => {
        onAutoAdvance()
      }, 1500)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onTimeUp, onAutoAdvance])

  const formatTime = (seconds) => {
    return `${seconds.toString().padStart(2, '0')}s`
  }

  const getOptionClass = (index) => {
    if (showCorrectAnswer) {
      if (index === question.correctAnswer) {
        return 'option correct'
      } else if (index === selectedAnswer && index !== question.correctAnswer) {
        return 'option incorrect'
      }
    } else if (index === selectedAnswer) {
      return 'option selected'
    }
    return 'option'
  }

  // Calculate progress percentage for the circular progress bar
  const progress = (timeLeft / 45) * 100

  return (
    <div className="question-container">
      <div className="question-header">
        <h3>Question {questionNumber}</h3>
        <div className={`timer ${timeLeft <= 10 ? 'warning' : ''}`}>
          <div className="circular-progress">
            <svg className="progress-ring" width="40" height="40">
              <circle
                className="progress-ring-circle"
                strokeWidth="3"
                fill="transparent"
                r="17"
                cx="20"
                cy="20"
                style={{
                  stroke: timeLeft <= 10 ? '#ef4444' : '#3b82f6',
                  strokeDasharray: 106.8,
                  strokeDashoffset: 106.8 - (progress * 106.8 / 100)
                }}
              />
            </svg>
            <span className="time-text">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>
      <p className="question-text">{question.text}</p>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <div 
            key={index} 
            className={getOptionClass(index)}
            onClick={() => !showCorrectAnswer && onAnswerSelect(index)}
          >
            <div className="option-indicator">
              {String.fromCharCode(65 + index)}.
            </div>
            <div className="option-text">{option}</div>
            {showCorrectAnswer && index === question.correctAnswer && (
              <div className="correct-indicator">✓</div>
            )}
            {showCorrectAnswer && index === selectedAnswer && index !== question.correctAnswer && (
              <div className="incorrect-indicator">✗</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question