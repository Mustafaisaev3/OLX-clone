import React from 'react'
import { ButtonEl } from './Button.elements'

const Button = ({children, type}: any) => {
  return (
    <ButtonEl type={type}>
        {children}
    </ButtonEl>
  )
}

export default Button