import React, { useState } from 'react'
import { Label, TabElement, TabsContainer, TabsWrapper } from './Tabs.elements'

interface TabsInterface {
    id?: string,
    label?: string,
    name?: string,
    fieldType?: string,
    data: any
}



const Tabs: React.FC<TabsInterface> = ({id, name, label, fieldType, data, ...props}) => {
  const [value, setValue] = useState('')

  const handleTabItemClick = (item: string) => {
    setValue(item)
  }
  return (
    <TabsContainer>
        <Label>{label}</Label>
        <TabsWrapper>
            {data && data.map((item: any) => {
                return <TabElement className={value === item ? 'active' : ''} onClick={() => handleTabItemClick(item)}>{item}</TabElement>
            })}
        </TabsWrapper>
    </TabsContainer>
  )
}

export default Tabs