import React, {FC, HTMLAttributes, useEffect, useState} from 'react'
import { InputComponent, Label, InputComp } from './Input.elements'

interface InputInterface extends HTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    type: string,
}

const Input: FC<InputInterface> = ({label, name, type, ...props}) => {
  return (
    <InputComponent>
        <Label htmlFor={name}>{label}</Label>
        <InputComp id={name} type={type} {...props} />
    </InputComponent>
  )
}

export default Input