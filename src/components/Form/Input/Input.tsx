import React, {FC, HTMLAttributes, useEffect, useState} from 'react'
import { InputComponent, Label, InputComp, InputError } from './Input.elements'

interface InputInterface extends HTMLAttributes<HTMLInputElement> {
    id?: any,
    label?: string,
    name?: string,
    value?: string,
    type?: string,
    onChange?: any,
    getValue?: any,
}

const Input: FC<InputInterface> = ({id, label, name, type, onChange, getValue, ...props}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
    if(onChange) {
      onChange(e.target.value)
    }
    // getValue(inputValue, id)
  }

  return (
    <InputComponent>
        <Label htmlFor={name}>{label}</Label>
        <InputComp id={name} type={type} onChange={(e) => handleInputChange(e)} {...props}/>
        <InputError>Error,ErrorErrorErrorErrorError</InputError>
    </InputComponent>
  )
}

export default Input