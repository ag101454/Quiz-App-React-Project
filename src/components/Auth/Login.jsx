// src/components/Auth/Login.jsx
import React, { useState } from 'react'
import Button from '../UI/Button'

const Login = ({ onLogin, onSwitchToSignup }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedDept, setSelectedDept] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const departments = [
    { 
      id: 'cs', 
      name: 'Computer Science', 
      icon: '💻',
      color: '#4f46e5',
      description: 'Algorithms, Programming, Systems'
    },
    { 
      id: 'se', 
      name: 'Software Engineering', 
      icon: '📱',
      color: '#059669',
      description: 'Development, Design Patterns, SDLC'
    },
    { 
      id: 'cyber', 
      name: 'Cyber Security', 
      icon: '🔒',
      color: '#dc2626',
      description: 'Security, Networks, Protection'
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Basic validation
    if (!email.endsWith('@au.edu.pk')) {
      setError('Please use your Air University email address')
      setIsLoading(false)
      return
    }

    if (!selectedDept) {
      setError('Please select your department')
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      onLogin({ email, name: email.split('@')[0] }, selectedDept)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-header">
          <div className="logo">
            <div className="logo-icon">🎓</div>
            <h1>Air University Quiz Portal</h1>
          </div>
          <p>Sign in to access your student dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">University Email</label>
            <input
              type="email"
              id="email"
              placeholder="name@au.edu.pk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="modern-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="modern-input"
            />
          </div>

<div className="form-group">
  <label>Select Department</label>
  <div className="departments-grid">
    {departments.map(dept => {
      const isSelected = selectedDept === dept.id;
      const isNotSelected = selectedDept && !isSelected;
      
      const buttonStyle = {
        background: isSelected ? 'rgba(16, 185, 129, 0.1)' : isNotSelected ? 'rgba(239, 68, 68, 0.05)' : 'white',
        borderColor: isSelected ? '#10b981' : isNotSelected ? '#fca5a5' : '#e5e7eb',
        boxShadow: isSelected ? '0 8px 20px rgba(16, 185, 129, 0.2)' : isNotSelected ? '0 4px 6px rgba(0, 0, 0, 0.05)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
      };
      
      const iconStyle = {
        background: isSelected ? 'linear-gradient(135deg, #10b981, #059669)' : isNotSelected ? 'linear-gradient(135deg, #f87171, #ef4444)' : '#e5e7eb',
        opacity: isNotSelected ? 0.8 : 1
      };
      
      const indicatorStyle = {
        background: isSelected ? '#10b981' : isNotSelected ? '#fef2f2' : 'white',
        borderColor: isSelected ? '#10b981' : isNotSelected ? '#fca5a5' : '#e5e7eb',
        color: isSelected ? 'white' : isNotSelected ? '#ef4444' : 'transparent'
      };
      
      const textStyle = {
        color: isSelected ? '#065f46' : isNotSelected ? '#7f1d1d' : '#1f2937'
      };

      return (
        <button
          type="button"
          key={dept.id}
          className="department-button"
          style={buttonStyle}
          onClick={() => setSelectedDept(dept.id)}
        >
          <div className="dept-button-content">
            <div className="dept-button-icon" style={iconStyle}>
              {dept.icon}
            </div>
            <div className="dept-button-text">
              <h4 style={textStyle}>{dept.name}</h4>
              <p>{dept.description}</p>
            </div>
            <div className="dept-button-indicator" style={indicatorStyle}>
              {isSelected ? '✓' : isNotSelected ? '✗' : ''}
            </div>
          </div>
        </button>
      );
    })}
  </div>
</div>

          {error && <div className="error-message">{error}</div>}

          <Button 
            type="submit" 
            className="auth-button" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Signing in...
              </>
            ) : 'Sign In'}
          </Button>
        </form>

        <p className="auth-switch">
          Don't have an account? 
          <button type="button" onClick={onSwitchToSignup} className="link-button">
            Create account
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login