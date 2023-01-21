import React, { useState } from 'react'
import { ChatContainer, ChatHeader, ChatHeaderSenderInfo, ChatHeaderSenderImage, ChatHeaderSenderName, ActionsMenuBar, ActionsMenuBarItem, ConversationAdDetailsLink, ConversationAdDetail, ConversationAdId, ConversationAdImage, ConversationAdTitle, CoversationMessagesBlock, ConversationInputBlock, ConversationSendIcon, ReceivedMessageContainer, SentMessageContainer, ReceivedMessage, SentMessage } from './Chat.elements'
import Colors from '../../../../utils/css_variables/colors'

import { BsBookmark } from 'react-icons/bs'
import { BiBlock, BiSend } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import Input from '../../../Form/Input/Input'

const Chat = () => {
  const [inputMessage, setInpuMessage] = useState('')

  return (
    <ChatContainer>
      <ChatHeader>

        <ChatHeaderSenderInfo>
          <ChatHeaderSenderImage />
          <ChatHeaderSenderName>Александр Петров</ChatHeaderSenderName>
        </ChatHeaderSenderInfo>

        <ActionsMenuBar>
          <ActionsMenuBarItem>
            <BsBookmark size={20} color={Colors.main_green} />
          </ActionsMenuBarItem>
          <ActionsMenuBarItem>
            <BiBlock size={20} color={Colors.main_green} />
          </ActionsMenuBarItem>
          <ActionsMenuBarItem>
            <MdDeleteForever size={25} color={Colors.main_green} />
          </ActionsMenuBarItem>
        </ActionsMenuBar>

      </ChatHeader>

      <ConversationAdDetailsLink>
        <ConversationAdDetail>
          <ConversationAdImage></ConversationAdImage>
          <ConversationAdTitle>Письменный стол в хорошем состоянии</ConversationAdTitle>
        </ConversationAdDetail>
        <ConversationAdId>ID: 778344694</ConversationAdId>
      </ConversationAdDetailsLink>

      <CoversationMessagesBlock>
        <ReceivedMessageContainer>
          <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
          <span>8:30</span>
        </ReceivedMessageContainer>

        <SentMessageContainer>
          <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
          <span>8:30</span>
        </SentMessageContainer>
        <ReceivedMessageContainer>
          <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
          <span>8:30</span>
        </ReceivedMessageContainer>

        <SentMessageContainer>
          <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
          <span>8:30</span>
        </SentMessageContainer>
        <ReceivedMessageContainer>
          <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
          <span>8:30</span>
        </ReceivedMessageContainer>

        <SentMessageContainer>
          <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
          <span>8:30</span>
        </SentMessageContainer>
        <ReceivedMessageContainer>
          <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
          <span>8:30</span>
        </ReceivedMessageContainer>

        <SentMessageContainer>
          <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
          <span>8:30</span>
        </SentMessageContainer>
      </CoversationMessagesBlock>

      <ConversationInputBlock>
        <Input value={inputMessage} onChange={setInpuMessage} placeholder='Напишите сообщение...' />
        {inputMessage.length 
          ? 
        <ConversationSendIcon>
          <BiSend size={25} color='white' />
        </ConversationSendIcon> : null}
      </ConversationInputBlock>
    </ChatContainer>
  )
}

export default Chat