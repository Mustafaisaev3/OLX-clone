import React from 'react'
import { HTMLAttributes } from 'react'
import { ButtonTypes, ButtonTypesInterface } from '../../../utils/button_types/button_types'
import { ButtonEl } from './Button.elements'

interface ButtonInterface extends HTMLAttributes<HTMLButtonElement> {
  children: any,
  type: ButtonTypesInterface,
}

// React.ComponentPropsWithoutRef<"button">

const Button = ({children, type, ...rest}: ButtonInterface) => {
  const styles = ButtonTypes[type]

  return (
    <ButtonEl type={styles} {...rest}>
        {children}
    </ButtonEl>
  )
}

export default Button