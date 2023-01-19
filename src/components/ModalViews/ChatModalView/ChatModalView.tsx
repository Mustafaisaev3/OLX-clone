import React, { useState } from 'react'
import Colors from '../../../utils/css_variables/colors'
import { ChatModalContainer, ChatModalHeader, ChatModalWrapper, ChatModalBody, ChatModalFooter, UserLogo, ChatModalCloseBtn, ChatModalSendBtn, ChatModalHeaderContent, AdInfoContainer, AdPhoto, AdInfo, AdPrice } from './ChatModalView.elements'
import { GrClose } from 'react-icons/gr'
import { BiSend } from 'react-icons/bi'
import { useUI } from '../../../context/ui.context'
import Input from '../../Form/Input/Input'

const ChatModalView = () => {
  const {closeChatModal, chatModalData} = useUI()
  const [message, setMessage] = useState<string>('')
  const ad = chatModalData                  
  
  const handleSendMessageBtnClick = () => {
    // console.log(message)
    // console.log(chatModalData)
  }

  return (
    <ChatModalWrapper>
        <ChatModalContainer>
            {/* Header */}
            <ChatModalHeader>
                <UserLogo></UserLogo>
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
                        <img src={ad.photos[0]} alt={'ad_image'} />
                    </AdPhoto>
                    <AdInfo>
                        <p>{ad.title}</p>
                        <AdPrice>{ad.price.price} $</AdPrice>
                    </AdInfo>
                </AdInfoContainer>
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