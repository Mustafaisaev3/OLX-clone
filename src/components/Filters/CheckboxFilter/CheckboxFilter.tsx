import React from 'react'
import Checkbox from '../../UI/Checkbox/Checkbox'
import { CheckBoxFilterItem } from './CheckboxFilter.elements'

interface CheckboxFilerInterface {
    name:string 
    value: any 
    label:string
}

const CheckboxFilter = ({name, value, label}: CheckboxFilerInterface) => {
  return (
    <CheckBoxFilterItem>
        <Checkbox name={name} value={value} label={label} />
    </CheckBoxFilterItem>
  )
}

export default CheckboxFilter