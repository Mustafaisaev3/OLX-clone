import React from 'react'
import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'
import Colors from '../../../utils/css_variables/colors'

const FilterInputContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    padding-right: 5px;
`

const FilterInput = ({value, onChange, clearInput, ...rest}: any) => {
  return (
    <FilterInputContainer>
        <Input value={value} onChange={(e) => onChange(e.target.value)} {...rest}/>
        {value.length ? <GrClose size={25} color={Colors.text_main} onClick={() => onChange('')} /> : null}
    </FilterInputContainer>
  )
}

export default FilterInput