import React, { useEffect, useState } from 'react'
import Input from '../../../Form/Input/Input'
import Card from '../../../UI/Card/Card'
import { ContentWrapper } from '../MainContent.elements'

const Location = ({getData}: any) => {
  const [location, setLocation] = useState('')
  useEffect(() => {
    getData(location)
  }, [location])
  
  return (
    <Card>
        <ContentWrapper>
            <Input name='location' value={location} onChange={setLocation} label='Місцезнаходження*' placeholder='Назва міста й індекс' />
        </ContentWrapper>
    </Card>
  )
}

export default Location