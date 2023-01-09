import React, { useEffect, useState } from 'react'
import Input from '../../../Form/Input/Input'
import Card from '../../../UI/Card/Card'
import { CardTitle } from '../../../UI/Card/Card.elements'
import { ContentWrapper } from '../MainContent.elements'

interface ContactsInterface {
  getData: any
}

const Contacts = ({getData}: ContactsInterface) => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    getData({email, phone})
  }, [email, phone])

  return (
    <Card>
        <ContentWrapper>
            <CardTitle>Ваші контактні дані</CardTitle>
            <Input type='email' id='email' name='email' label='Email-адреса' value={email} onChange={setEmail} />
            <Input type='tel' id='phone' name='phone' label='Номер телефону' value={phone} onChange={setPhone}/>
        </ContentWrapper>
    </Card>
  )
}

export default Contacts