// Updated Results.jsx with Premium Design
import { useState } from 'react'
import Button from '../UI/Button'
import { getQuestionsByDepartment } from '../../data/questions'

const Results = ({ score, totalQuestions, department, user, answers, onRetry, onFinish }) => {
  const [showDetails, setShowDetails] = useState(false)
  const questions = getQuestionsByDepartment(department)
  const percentage = (score / totalQuestions) * 100
  
  let performanceText = ''
  let performanceColor = ''
  let performanceIcon = ''

  if (percentage >= 80) {
    performanceText = 'Excellent Performance!'
    performanceColor = '#10b981'
    performanceIcon = '🏆'
  } else if (percentage >= 60) {
    performanceText = 'Good Performance!'
    performanceColor = '#f59e0b'
    performanceIcon = '👍'
  } else {
    performanceText = 'Needs Improvement'
    performanceColor = '#ef4444'
    performanceIcon = '📚'
  }

  // Get full department name with glow effect
  const getDepartmentName = (dept) => {
    switch(dept) {
      case 'cs': return 'Computer Science';
      case 'se': return 'Software Engineering';
      case 'cyber': return 'Cyber Security';
      default: return dept;
    }
  }

  return (
    <div className="results-wrapper">
      <div className="results-container">
        <div className="results-header">
          <div className="results-logo">
            <div className="logo-icon">🎓</div>
            <h1>Air University Quiz Portal</h1>
          </div>
          <p>Quiz Results Summary</p>
        </div>
        
        <div className="results-card">
          <div className="results-badge">
            <div className="performance-badge" style={{ borderColor: performanceColor }}>
              <span className="performance-icon">{performanceIcon}</span>
              <span className="performance-text" style={{ color: performanceColor }}>
                {performanceText}
              </span>
            </div>
          </div>

          <div className="score-display">
            <div className="score-circle" style={{ borderColor: performanceColor }}>
              <span className="score-percent" style={{ color: performanceColor }}>
                {percentage.toFixed(1)}%
              </span>
              <span className="score-fraction">
                {score} / {totalQuestions}
              </span>
            </div>
          </div>

          <div className="results-info">
            <div className="info-item">
              <span className="info-label">Student:</span>
              <span className="info-value">{user.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Department:</span>
              <span className="info-value department-glow">{getDepartmentName(department)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date:</span>
              <span className="info-value">{new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <div className="results-actions">
            <Button 
              onClick={() => setShowDetails(!showDetails)} 
              variant="outline"
              icon={showDetails ? "📋" : "📊"}
              className="details-btn"
            >
              {showDetails ? 'Hide Detailed Results' : 'Show Detailed Results'}
            </Button>
          </div>
          
          {showDetails && (
            <div className="detailed-results">
              <h3>Question Breakdown</h3>
              <div className="results-list">
                {questions.map((question, index) => {
                  const userAnswer = answers[index]
                  const isCorrect = userAnswer === question.correctAnswer
                  
                  return (
                    <div key={index} className="result-item">
                      <div className="result-question">
                        <span className="result-number">Q{index + 1}:</span>
                        {question.text}
                      </div>
                      <div className={`result-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? (
                          <span className="status-icon">✓</span>
                        ) : (
                          <span className="status-icon">✗</span>
                        )}
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </div>
                      {!isCorrect && (
                        <div className="correct-answer">
                          Correct answer: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          
          <div className="results-footer">
            <Button onClick={onRetry} variant="outline" icon="🔄" className="action-btn">
              Try Again
            </Button>
            <Button onClick={onFinish} variant="gradient" icon="🏠" className="action-btn">
              Return to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results