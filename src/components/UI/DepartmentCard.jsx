// src/components/UI/DepartmentCard.jsx
const DepartmentCard = ({ department, selected, onClick }) => {
    return (
      <div 
        className={`department-card ${selected ? 'selected' : ''}`}
        onClick={onClick}
        style={{ 
          borderColor: selected ? department.color : '#e5e7eb',
          backgroundColor: selected ? `${department.color}10` : 'white'
        }}
      >
        <div 
          className="department-icon" 
          style={{ backgroundColor: department.color }}
        >
          {department.name.charAt(0)}
        </div>
        <h3>{department.name}</h3>
      </div>
    )
  }
  
  export default DepartmentCard