// Updated QuizContainer.jsx with auto-advance functionality
import { useState, useEffect } from 'react'
import Question from './Question'
import Button from '../UI/Button'
import LoadingSpinner from '../UI/LoadingSpinner'
import { getQuestionsByDepartment } from '../../data/questions'

const QuizContainer = ({ department, onComplete, onCancel }) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(true)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)

  useEffect(() => {
    // Simulate API call to get questions
    setTimeout(() => {
      const deptQuestions = getQuestionsByDepartment(department)
      setQuestions(deptQuestions)
      setLoading(false)
    }, 1500)
  }, [department])

  const handleAnswerSelect = (answer) => {
    if (showCorrectAnswer) return // Prevent changing answer after time up
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }))
    
    // Show correct answer after selection
    setTimeout(() => {
      setShowCorrectAnswer(true)
    }, 500)
  }

  const handleTimeUp = () => {
    setShowCorrectAnswer(true)
  }

  const handleAutoAdvance = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setShowCorrectAnswer(false)
    } else {
      handleComplete()
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setShowCorrectAnswer(false)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      setShowCorrectAnswer(false)
    }
  }

  const handleComplete = () => {
    // Calculate score
    let score = 0
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score += 1
      }
    })
    onComplete(score, answers)
  }

  if (loading) {
    return (
      <div className="quiz-loading">
        <LoadingSpinner />
        <p>Loading {department} questions...</p>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{department} Department Quiz</h2>
        <div className="quiz-info">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <Question
        question={currentQuestion}
        selectedAnswer={answers[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
        onTimeUp={handleTimeUp}
        onAutoAdvance={handleAutoAdvance}
        questionNumber={currentQuestionIndex + 1}
        showCorrectAnswer={showCorrectAnswer}
      />

      <div className="quiz-navigation">
        <Button 
          onClick={handlePrevious} 
          disabled={currentQuestionIndex === 0}
          variant="outline"
          icon="⬅️"
        >
          Previous
        </Button>
        
        <div className="navigation-middle">
          {Object.keys(answers).length} of {questions.length} answered
        </div>
        
        <Button 
          onClick={handleNext}
          disabled={!showCorrectAnswer}
          variant="gradient"
          icon={currentQuestionIndex === questions.length - 1 ? "🏁" : "➡️"}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
        </Button>
      </div>

      <div className="quiz-footer">
        <Button onClick={onCancel} variant="text" icon="↩️">
          Cancel Quiz
        </Button>
      </div>
    </div>
  )
}

export default QuizContainer