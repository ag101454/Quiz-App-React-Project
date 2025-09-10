// src/components/Dashboard/Dashboard.jsx
import { useState, useEffect } from 'react'
import Button from '../UI/Button'

const Dashboard = ({ user, department, quizHistory, onStartQuiz, onLogout }) => {
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    averageScore: 0,
    bestScore: 0,
    totalTime: 0
  })

  useEffect(() => {
    if (quizHistory.length > 0) {
      const totalQuizzes = quizHistory.length
      const totalScore = quizHistory.reduce((sum, quiz) => sum + quiz.score, 0)
      const averageScore = Math.round(totalScore / totalQuizzes)
      const bestScore = Math.max(...quizHistory.map(quiz => quiz.score))
      const totalTime = quizHistory.reduce((sum, quiz) => sum + quiz.timeSpent, 0)
      
      setStats({
        totalQuizzes,
        averageScore,
        bestScore,
        totalTime: Math.round(totalTime / 60) // Convert to minutes
      })
    }
  }, [quizHistory])

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Student Dashboard</h1>
        <div className="user-welcome">
          <p>Welcome back, <strong>{user.name}</strong>!</p>
          <p className="department-badge">{department}</p>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'var(--primary)' }}>
            📊
          </div>
          <div className="stat-value">{stats.totalQuizzes}</div>
          <div className="stat-label">Total Quizzes</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'var(--success)' }}>
            ⭐
          </div>
          <div className="stat-value">{stats.averageScore}%</div>
          <div className="stat-label">Average Score</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'var(--accent)' }}>
            🏆
          </div>
          <div className="stat-value">{stats.bestScore}%</div>
          <div className="stat-label">Best Score</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'var(--secondary)' }}>
            ⏱️
          </div>
          <div className="stat-value">{stats.totalTime}m</div>
          <div className="stat-label">Total Time</div>
        </div>
      </div>

      <div className="dashboard-actions">
        <div className="action-card" onClick={onStartQuiz}>
          <div className="action-icon">🧠</div>
          <h3 className="action-title">Start New Quiz</h3>
          <p className="action-description">Test your knowledge with a new quiz from your department</p>
          <Button>Start Quiz</Button>
        </div>

        <div className="action-card">
          <div className="action-icon">📚</div>
          <h3 className="action-title">Study Materials</h3>
          <p className="action-description">Access study materials and resources for your courses</p>
          <Button variant="outline">Coming Soon</Button>
        </div>
      </div>

      {quizHistory.length > 0 && (
        <div className="quiz-history">
          <h3 className="history-title">Recent Quiz Results</h3>
          <div className="history-list">
            {quizHistory.slice(0, 5).map((quiz, index) => (
              <div key={index} className="history-item">
                <div className="history-info">
                  <span className="history-date">
                    {new Date(quiz.date).toLocaleDateString()}
                  </span>
                  <span className="history-department">{quiz.department}</span>
                </div>
                <div 
                  className="history-score"
                  style={{ 
                    color: quiz.score >= 80 ? 'var(--success)' : 
                           quiz.score >= 60 ? 'var(--warning)' : 'var(--danger)'
                  }}
                >
                  {quiz.score}/{quiz.total} ({Math.round((quiz.score / quiz.total) * 100)}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard