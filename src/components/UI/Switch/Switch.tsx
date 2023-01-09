import React from 'react'
import { SwitchBody, SwitchContainer, SwitchRound } from './Switch.elements'

interface SwitchInterface {
  name: string,
  value: string
}

const Switch = ({name, value}: SwitchInterface) => {
  return (
    <SwitchContainer>
        <input type="checkbox" name={name} id={name} value={value}/>
        <SwitchBody htmlFor={name}>
            <SwitchRound></SwitchRound>
        </SwitchBody>
    </SwitchContainer>
  )
}

export default Switch