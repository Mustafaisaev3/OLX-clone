import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { FormComponent } from './Form.elements'

interface FormInterface extends HTMLAttributes<HTMLFormElement> {
    children: ReactNode
}

const Form: FC<FormInterface> = ({children, ...props}) => {
  return (
    <FormComponent {...props}>
        {children}
    </FormComponent>
  )
}

export default Form