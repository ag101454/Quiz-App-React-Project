// src/components/Auth/DepartmentSelector.jsx
import React from 'react'

const DepartmentSelector = ({ selectedDept, onSelect }) => {
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

  return (
    <div className="form-group">
      <label>Select Department</label>
      <div className="departments-grid">
        {departments.map(dept => (
          <div
            key={dept.id}
            className={`department-button ${selectedDept === dept.id ? 'selected' : ''}`}
            onClick={() => onSelect(dept.id)}
            style={{ 
              '--dept-color': dept.color,
              '--dept-light': `${dept.color}20`
            }}
          >
            <div className="dept-button-content">
              <div className="dept-button-icon">{dept.icon}</div>
              <div className="dept-button-text">
                <h4>{dept.name}</h4>
                <p>{dept.description}</p>
              </div>
              <div className="dept-button-indicator">
                <div className="check-icon">
                  {selectedDept === dept.id ? '✓' : ''}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentSelector