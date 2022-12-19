import React from 'react'
import { CheckboxContainer } from './Checkbox.elements';



type CheckboxType = {
    name: string,
    label?: string;
    value: any
}

const Checkbox = ({name, label, value}: CheckboxType) => {
  return (
    <CheckboxContainer>
        <input type="checkbox" id={name} name={name} value={value}/>
        <label htmlFor={name}>{label}</label>
    </CheckboxContainer>
  )
}

export default Checkbox