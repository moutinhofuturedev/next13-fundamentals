'use client'

import { useState } from 'react'

export const Button = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0)

  const addToCart = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={addToCart}>Add to cart ({count})</button>
      {children}
    </div>
  )
}

// Abistração de client components: criando um client component apartado para ser renderizado dentro de um server component
//
