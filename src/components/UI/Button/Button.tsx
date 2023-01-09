import React from 'react'
import { HTMLAttributes } from 'react'
import { ButtonTypes, ButtonTypesInterface } from '../../../utils/button_types/button_types'
import { ButtonEl } from './Button.elements'

interface ButtonInterface extends HTMLAttributes<HTMLButtonElement> {
  children: any,
  type?: string,
  buttontype: ButtonTypesInterface,
}

// React.ComponentPropsWithoutRef<"button">

const Button = ({children, type, buttontype, ...rest}: ButtonInterface) => {
  const styles = ButtonTypes[buttontype]

  return (
    <ButtonEl type={type} buttontype={styles} {...rest}>
        {children}
    </ButtonEl>
  )
}

export default Button