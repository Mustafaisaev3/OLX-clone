import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '../../../pages/globalStyles'
import AccountHeader from '../../Sections/Account/AccountHeader/AccountHeader'
import { AccountMessagesBody } from './AccountMessages.elements'
import Chat from './Chat/Chat'
import ConversationList from './ConversationsList/ConversationList'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../../store/ducks/user/selectors'
import { ChatApi } from '../../../services/ChatApi'
import { selectUserConversations } from '../../../store/ducks/chat/selectors'
import { useDispatch } from 'react-redux'
import { fetchUserConversations } from '../../../store/ducks/chat/action'

const AccountMessages = () => {
  // const [conversations, setConversations] = useState([])
  const currentUser = useSelector(selectUserData)
  const conversations = useSelector(selectUserConversations)
  const [chatConversation, setChatConversation] = useState(null)
  const dispatch = useDispatch()
  console.log(currentUser)

  const getUserConversations = async () => {
    dispatch(fetchUserConversations({user: currentUser.id}))
  }
  console.log(conversations)
  console.log(chatConversation)

  useEffect(() => {
    getUserConversations()
  }, [chatConversation])

  return (
    <>
    <AccountHeader title={'Ваші повідомлення'}></AccountHeader>
    <Container>
        <AccountMessagesBody>
            <ConversationList conversations={conversations} setChatConversation={setChatConversation}></ConversationList>
            {/* <Chat conversation={chatConversation}></Chat> */}
            <Chat conversation={chatConversation}></Chat>
        </AccountMessagesBody>
    </Container>
    </>
  )
}

export default AccountMessages