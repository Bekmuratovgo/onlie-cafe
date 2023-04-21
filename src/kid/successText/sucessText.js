import React from 'react'
import { useState } from 'react'

export default function SuccessText({ text, size = 18, duration = 3000 }) {
  const [isActive, setIsActive] = useState(true);

  duration && setTimeout(() => {
    setIsActive(false)
  }, duration)

  return isActive && (
    <h3 style={{fontSize: `${size}px`, color: 'rgb(3, 167, 3)'}}>
      {text}
    </h3>
  )
}
