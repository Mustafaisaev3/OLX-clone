import React, {FC, HTMLAttributes, useEffect, useState} from 'react'
import { InputComponent, Label, InputComp } from './Input.elements'

interface InputInterface extends HTMLAttributes<HTMLInputElement> {
    label?: string,
    name?: string,
    value?: string,
    type?: string,
    onChange?: any
}

const Input: FC<InputInterface> = ({label, name, type, onChange, ...props}) => {
  return (
    <InputComponent>
        <Label htmlFor={name}>{label}</Label>
        <InputComp id={name} type={type} onChange={(e) => onChange(e.target.value)} {...props} />
    </InputComponent>
  )
}

export default Input