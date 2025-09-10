// Updated Button Component with Premium Design
const Button = ({ 
    children, 
    onClick, 
    disabled = false, 
    type = 'button', 
    variant = 'primary', 
    className = '',
    size = 'medium',
    icon = null
  }) => {
    const baseClasses = 'premium-button'
    const variantClasses = {
      primary: 'premium-button-primary',
      secondary: 'premium-button-secondary',
      outline: 'premium-button-outline',
      text: 'premium-button-text',
      gradient: 'premium-button-gradient'
    }
    
    const sizeClasses = {
      small: 'premium-button-small',
      medium: 'premium-button-medium',
      large: 'premium-button-large'
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'disabled' : ''}`.trim()
    
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        {icon && <span className="button-icon">{icon}</span>}
        {children}
      </button>
    )
  }
  
  export default Button