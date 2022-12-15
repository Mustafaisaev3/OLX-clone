import React from 'react'
import { ButtonEl } from './Button.elements'

const Button = ({children}: any) => {
  return (
    <ButtonEl>
        {children}
    </ButtonEl>
  )
}

export default Button