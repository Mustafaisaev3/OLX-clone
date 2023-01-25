import React, { useEffect, useState } from 'react'
import Colors from '../../../utils/css_variables/colors'
import { ChatModalContainer, ChatModalHeader, ChatModalWrapper, ChatModalBody, ChatModalFooter, UserLogo, ChatModalCloseBtn, ChatModalSendBtn, ChatModalHeaderContent, AdInfoContainer, AdPhoto, AdInfo, AdPrice, AdMessagesContainer, SentMessage, SentMessageContainer, ReceivedMessageContainer, ReceivedMessage } from './ChatModalView.elements'
import { GrClose } from 'react-icons/gr'
import { FaUser } from 'react-icons/fa'
import { BiSend } from 'react-icons/bi'
import { useUI } from '../../../context/ui.context'
import Input from '../../Form/Input/Input'
import { useDispatch } from 'react-redux'
import { fetchConversation, sendMessage } from '../../../store/ducks/chat/action'
import { useSelector } from 'react-redux'
import { selectChatState, selectConversation } from '../../../store/ducks/chat/selectors'

const ChatModalView = () => {
  const dispatch = useDispatch()
  const {closeChatModal, chatModalData} = useUI()
  const [message, setMessage] = useState<string>('')
  const ad = chatModalData  
  
  const conversation = useSelector(selectConversation)
  const chat = useSelector(selectChatState)

  console.log(conversation, chat)
  
  const handleSendMessageBtnClick = () => {
    dispatch(sendMessage({
        adId: ad._id,
        senderId: '63bca428011804ecbe169f31',
        messageText: message,
        conversationId: conversation ? conversation._id : null
    }))
  }

  useEffect(() => {
    dispatch(fetchConversation({adId: chatModalData._id, userId: chatModalData.user._id}))
  }, [])

  return (
    <ChatModalWrapper>
        <ChatModalContainer>
            {/* Header */}
            <ChatModalHeader>
                <UserLogo>
                  <FaUser size={20} color='white' />
                </UserLogo>
                <ChatModalHeaderContent>{ad.phone}</ChatModalHeaderContent>
                <ChatModalCloseBtn onClick={closeChatModal}>
                    <GrClose size={20} color={Colors.text_main} />
                </ChatModalCloseBtn>
            </ChatModalHeader>
            {/* Header */}

            {/* Body */}
            <ChatModalBody>
                <AdInfoContainer>
                    <AdPhoto>
                        <img src={ad.photos[0].url} alt={'ad_image'} />
                    </AdPhoto>
                    <AdInfo>
                        <p>{ad.title}</p>
                        <AdPrice>{ad.price.price} $</AdPrice>
                    </AdInfo>
                </AdInfoContainer>
                <AdMessagesContainer>
                    {conversation ? conversation.messages.map((msg: any) => {
                        return(
                            <SentMessageContainer key={msg._id} >
                                <SentMessage>{msg.message}<div></div></SentMessage>
                                <span>8:30</span>
                            </SentMessageContainer>
                        )   

                            // <ReceivedMessageContainer>
                            //     <ReceivedMessage>xcbgxcgxcg</ReceivedMessage>
                            //     <span>8:30</span>
                            // </ReceivedMessageContainer>
                    }) : null}
                </AdMessagesContainer>
            </ChatModalBody>
            {/* Body */}

            {/* Footer */}
            <ChatModalFooter>
                <Input 
                  value={message} 
                  onChange={setMessage} 
                  placeholder='Напишіть повідомлення...' 
                  rightComponent={<ChatModalSendBtn onClick={handleSendMessageBtnClick}><BiSend size={15} color='white' /></ChatModalSendBtn>} 
                />
            </ChatModalFooter>
            {/* Footer */}
        </ChatModalContainer>
    </ChatModalWrapper>
  )
}

export default ChatModalView