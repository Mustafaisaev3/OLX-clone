import React from 'react'
import Colors from '../../../utils/css_variables/colors'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Dropdown from '../../UI/Dropdown/Dropdown'
import { DropdownBody, DropdownBodyContainer } from '../../UI/Dropdown/Dropdown.elements'
import { CheckBoxFilterItem } from './CheckboxFilter.elements'

import { IoIosArrowDown } from 'react-icons/io'


interface CheckboxFilerInterface {
    name: string,
    value: any,
    label: string,
}

const CheckboxFilterItem = ({name, value, label}: CheckboxFilerInterface) => {
  return (
    <CheckBoxFilterItem>
        <Checkbox name={name} value={value} label={label} />
    </CheckBoxFilterItem>
  )
}

const CheckboxFilter = () => {
    return (
        <Dropdown title='Всі оголошення' titleColor={Colors.text_main} rightIcon={<IoIosArrowDown size={25} className='dropdown-title__right-icon ' />}>
            <DropdownBody>
                <DropdownBodyContainer>
                    <CheckboxFilterItem name='check' value='check' label='Повний робочий день'></CheckboxFilterItem>
                    <CheckboxFilterItem name='check' value='check' label='Неповний робочий день'></CheckboxFilterItem>
                    <CheckboxFilterItem name='hec' value='check' label='Повний робочий день'></CheckboxFilterItem>
                    <CheckboxFilterItem name='check' value='check' label='Неповний робочий день'></CheckboxFilterItem>
                </DropdownBodyContainer>
            </DropdownBody>
        </Dropdown>
    )
}

export default CheckboxFilter