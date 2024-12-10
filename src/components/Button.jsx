import React from 'react'

const Button = ({onClick,icon,bgColor, color, size, text, borderRadius,bgHoverColor}) => {
  return (
    <button 
      type='button'
      onClick={onClick}
      style={{background:bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg${bgHoverColor}`}>
        {icon} {text}
    </button>

  )
}

export default Button