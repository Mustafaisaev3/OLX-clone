import React, { HTMLAttributes, useState } from 'react'
import { CheckboxContainer } from './Checkbox.elements';



interface CheckboxType extends HTMLAttributes<HTMLInputElement> {
    name: string,
    label?: string;
    value: any,
}

const Checkbox = ({name, label, value, ...rest}: CheckboxType) => {
  const [checked, setChecked] = useState(false)
  
  const handleCheckboxClick = (e: any) => {
    setChecked(e.currentTarget.checked)
  }

  // console.log(checked)

  return (
    <CheckboxContainer>
        <input type="checkbox" id={name} name={name} value={value} onChange={(e) => handleCheckboxClick(e)} {...rest} />
        <label htmlFor={name}>{label}</label>
    </CheckboxContainer>
  )
}

export default Checkbox