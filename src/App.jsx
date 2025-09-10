// src/App.jsx
import { useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import QuizContainer from './components/Quiz/QuizContainer'
import Results from './components/Quiz/Results'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('login')
  const [user, setUser] = useState(null)
  const [department, setDepartment] = useState('')
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizHistory, setQuizHistory] = useState([])
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Check for saved user session
    const savedUser = localStorage.getItem('quizUser')
    const savedTheme = localStorage.getItem('quizTheme') || 'dark'
    
    if (savedUser) {
      const userData = JSON.parse(savedUser)
      setUser(userData)
      setDepartment(userData.department)
      setCurrentView('dashboard')
    }
    
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('quizTheme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleLogin = (userData, dept) => {
    const userWithDept = { ...userData, department: dept }
    setUser(userWithDept)
    setDepartment(dept)
    setCurrentView('dashboard')
    localStorage.setItem('quizUser', JSON.stringify(userWithDept))
  }

  const handleSignup = (userData, dept) => {
    const userWithDept = { ...userData, department: dept }
    setUser(userWithDept)
    setDepartment(dept)
    setCurrentView('dashboard')
    localStorage.setItem('quizUser', JSON.stringify(userWithDept))
    
    // Initialize empty quiz history for new user
    setQuizHistory([])
  }

  const handleQuizComplete = (finalScore, answerList, timeSpent) => {
    const quizResult = {
      score: finalScore,
      total: 15,
      department,
      date: new Date().toISOString(),
      timeSpent,
      answers: answerList
    }
    
    setScore(finalScore)
    setAnswers(answerList)
    setQuizHistory(prev => [quizResult, ...prev])
    setCurrentView('results')
  }

  const handleLogout = () => {
    setUser(null)
    setDepartment('')
    setCurrentView('login')
    localStorage.removeItem('quizUser')
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="background-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <header className="app-header">
        <div className="header-left">
          <h1>Air University Quiz Portal</h1>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
        
        {user && (
          <div className="user-info">
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </header>

      <main className="app-main">
        {currentView === 'login' && (
          <Login onLogin={handleLogin} onSwitchToSignup={() => setCurrentView('signup')} />
        )}
        {currentView === 'signup' && (
          <Signup onSignup={handleSignup} onSwitchToLogin={() => setCurrentView('login')} />
        )}
        {currentView === 'dashboard' && (
          <Dashboard 
            user={user} 
            department={department}
            quizHistory={quizHistory}
            onStartQuiz={() => setCurrentView('quiz')}
            onLogout={handleLogout}
          />
        )}
        {currentView === 'quiz' && (
          <QuizContainer 
            department={department} 
            onComplete={handleQuizComplete}
            onCancel={() => setCurrentView('dashboard')}
          />
        )}
        {currentView === 'results' && (
          <Results 
            score={score} 
            totalQuestions={15} 
            department={department}
            user={user}
            answers={answers}
            onRetry={() => setCurrentView('quiz')}
            onFinish={() => setCurrentView('dashboard')}
          />
        )}
      </main>
    </div>
  )
}

export default App