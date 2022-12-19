import React, { useState } from 'react'
import styled from 'styled-components'
import Colors from '../../../utils/css_variables/colors'
import Dropdown from '../../UI/Dropdown/Dropdown'
import { DropdownBody, DropdownBodyContainer } from '../../UI/Dropdown/Dropdown.elements'
import FilterInput from './FilterInput'
import { FromToFilterContainer, From, To, FromToOptionItem } from './FromToFilter.elements'



const FromToFilter = () => {
  const [from, setFrom] = useState<string | number>('')
  const [to, setTo] = useState<string | number>('')

  return (
    <FromToFilterContainer>
        <From>
            {/* <Dropdown title={<FilterInput value={from} onChange={(e) => setFrom(e.target.value)} placeholder='Від:' />} titleColor={Colors.text_main}> */}
            <Dropdown title={<FilterInput value={from} onChange={setFrom} placeholder='Від:' clearInput={setFrom} />} titleColor={Colors.text_main}>
                <DropdownBody>
                    <DropdownBodyContainer>
                        <FromToOptionItem onClick={() => setFrom(10000)}>10 000</FromToOptionItem>
                        <FromToOptionItem onClick={() => setFrom(20000)}>20 000</FromToOptionItem>
                        <FromToOptionItem onClick={() => setFrom(30000)}>30 000</FromToOptionItem>
                        <FromToOptionItem onClick={() => setFrom(40000)}>40 000</FromToOptionItem>
                    </DropdownBodyContainer>
                </DropdownBody>
            </Dropdown>
        </From>
        <To>
            <Dropdown title={<FilterInput value={to} onChange={setTo} placeholder='До:' clearInput={setFrom} />} titleColor={Colors.text_main}>
                <DropdownBody>
                    <DropdownBodyContainer>
                        <FromToOptionItem onClick={() => setTo(10000)}>10 000</FromToOptionItem>
                        <FromToOptionItem onClick={() => setTo(20000)}>20 000</FromToOptionItem>
                        <FromToOptionItem onClick={() => setTo(30000)}>30 000</FromToOptionItem>
                        <FromToOptionItem onClick={() => setTo(40000)}>40 000</FromToOptionItem>
                    </DropdownBodyContainer>
                </DropdownBody>
            </Dropdown>
        </To>
    </FromToFilterContainer>
  )
}

export default FromToFilter