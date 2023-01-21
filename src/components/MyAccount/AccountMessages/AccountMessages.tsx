import React from 'react'
import { Container } from '../../../pages/globalStyles'
import AccountHeader from '../../Sections/Account/AccountHeader/AccountHeader'
import { AccountMessagesBody } from './AccountMessages.elements'
import Chat from './Chat/Chat'
import ConversationList from './ConversationsList/ConversationList'

const AccountMessages = () => {
  return (
    <>
    <AccountHeader title={'Ваші повідомлення'}></AccountHeader>
    <Container>
        <AccountMessagesBody>
            <ConversationList></ConversationList>
            <Chat></Chat>
        </AccountMessagesBody>
    </Container>
    </>
  )
}

export default AccountMessages