import React from 'react'
import { ButtonTypes, ButtonTypesInterface } from '../../../utils/button_types/button_types'
import { ButtonEl } from './Button.elements'

interface ButtonInterface {
  children: any,
  type: ButtonTypesInterface,
}

const Button = ({children, type, ...rest}: ButtonInterface) => {
  const styles = ButtonTypes[type]

  return (
    <ButtonEl type={styles} {...rest}>
        {children}
    </ButtonEl>
  )
}

export default Button