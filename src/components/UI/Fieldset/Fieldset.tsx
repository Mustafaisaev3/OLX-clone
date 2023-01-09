import React from 'react'
import { FieldsetElement, Legend } from './Fieldset.elements'

interface FieldsetInterface {
  legend?: string,
  children?: any
}

const Fieldset = ({children, legend}: any) => {
  return (
    <FieldsetElement>
        <Legend>{legend}</Legend>
        {children}
    </FieldsetElement>
  )
}

export default Fieldset