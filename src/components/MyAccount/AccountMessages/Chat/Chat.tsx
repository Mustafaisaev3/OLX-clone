import React, { useState } from 'react'
import { ChatContainer, ChatHeader, ChatHeaderSenderInfo, ChatHeaderSenderImage, ChatHeaderSenderName, ActionsMenuBar, ActionsMenuBarItem, ConversationAdDetailsLink, ConversationAdDetail, ConversationAdId, ConversationAdImage, ConversationAdTitle, CoversationMessagesBlock, ConversationInputBlock, ConversationSendIcon, ReceivedMessageContainer, SentMessageContainer, ReceivedMessage, SentMessage } from './Chat.elements'
import Colors from '../../../../utils/css_variables/colors'

import { FaUser } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { BiBlock, BiSend } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import Input from '../../../Form/Input/Input'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../../../store/ducks/user/selectors'
import { ChatApi } from '../../../../services/ChatApi'


const Chat = ({conversation}: any) => {
  const [inputMessage, setInpuMessage] = useState('')
  const currentUser = useSelector(selectUserData)
  console.log(conversation)

  const sendMessage = async () => {
    const responce = await ChatApi.sendMessage({
      adId : conversation.ad._id,
      senderId : currentUser.id,
      messageText : inputMessage,
      conversationId : conversation._id
    })
    console.log(responce)
  }
  return (
    <ChatContainer>
      {conversation 
      ?
      <>
      <ChatHeader>

        <ChatHeaderSenderInfo>
          <ChatHeaderSenderImage>
            <FaUser size={20} color={'white'} />
          </ChatHeaderSenderImage>
          <ChatHeaderSenderName>{conversation.users.map((user: any) => {
            return user._id != currentUser.id ? user.email : null
          })}</ChatHeaderSenderName>
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
          <ConversationAdImage>
            <img src={conversation.ad.photos[0].url} alt="" />
          </ConversationAdImage>
          <ConversationAdTitle>{conversation.ad.title}</ConversationAdTitle>
        </ConversationAdDetail>
        <ConversationAdId>ID: {conversation.ad._id}</ConversationAdId>
      </ConversationAdDetailsLink>

      <CoversationMessagesBlock>
        {conversation.messages.map((msg: any) => {
          if(msg.sender == currentUser.id){
            return(
              <SentMessageContainer key={msg._id}>
                <SentMessage>{msg.message}<div></div></SentMessage>
                <span>8:30</span>
              </SentMessageContainer>
            )
          } else if (msg.sender != currentUser.id) {
            return(
              <ReceivedMessageContainer key={msg._id}>
                <ReceivedMessage>{msg.message}</ReceivedMessage>
                <span>8:30</span>
              </ReceivedMessageContainer>
            )
          }
        })}
        {/* {conversation.user._id == currentUser ? (
          <SentMessageContainer>
            <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
            <span>8:30</span>
          </SentMessageContainer>
        ) : (
          <ReceivedMessageContainer>
            <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
            <span>8:30</span>
          </ReceivedMessageContainer>
        )} */}

        
        {/* <ReceivedMessageContainer>
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
        </SentMessageContainer> */}
      </CoversationMessagesBlock>

      <ConversationInputBlock>
        <Input value={inputMessage} onChange={setInpuMessage} placeholder='Напишите сообщение...' />
        {inputMessage.length 
          ? 
        <ConversationSendIcon onClick={sendMessage}>
          <BiSend size={25} color='white' />
        </ConversationSendIcon> : null}
      </ConversationInputBlock>
      </>
      :
      null}
    </ChatContainer>
  )
}

export default Chat



// import React, { useState } from 'react'
// import { ChatContainer, ChatHeader, ChatHeaderSenderInfo, ChatHeaderSenderImage, ChatHeaderSenderName, ActionsMenuBar, ActionsMenuBarItem, ConversationAdDetailsLink, ConversationAdDetail, ConversationAdId, ConversationAdImage, ConversationAdTitle, CoversationMessagesBlock, ConversationInputBlock, ConversationSendIcon, ReceivedMessageContainer, SentMessageContainer, ReceivedMessage, SentMessage } from './Chat.elements'
// import Colors from '../../../../utils/css_variables/colors'

// import { BsBookmark } from 'react-icons/bs'
// import { BiBlock, BiSend } from 'react-icons/bi'
// import { MdDeleteForever } from 'react-icons/md'
// import Input from '../../../Form/Input/Input'

// const Chat = ({conversation}: any) => {
//   const [inputMessage, setInpuMessage] = useState('')

//   return (
//     <ChatContainer>
//       <ChatHeader>

//         <ChatHeaderSenderInfo>
//           <ChatHeaderSenderImage />
//           <ChatHeaderSenderName>Александр Петров</ChatHeaderSenderName>
//         </ChatHeaderSenderInfo>

//         <ActionsMenuBar>
//           <ActionsMenuBarItem>
//             <BsBookmark size={20} color={Colors.main_green} />
//           </ActionsMenuBarItem>
//           <ActionsMenuBarItem>
//             <BiBlock size={20} color={Colors.main_green} />
//           </ActionsMenuBarItem>
//           <ActionsMenuBarItem>
//             <MdDeleteForever size={25} color={Colors.main_green} />
//           </ActionsMenuBarItem>
//         </ActionsMenuBar>

//       </ChatHeader>

//       <ConversationAdDetailsLink>
//         <ConversationAdDetail>
//           <ConversationAdImage></ConversationAdImage>
//           <ConversationAdTitle>Письменный стол в хорошем состоянии</ConversationAdTitle>
//         </ConversationAdDetail>
//         <ConversationAdId>ID: 778344694</ConversationAdId>
//       </ConversationAdDetailsLink>

//       <CoversationMessagesBlock>
//         <ReceivedMessageContainer>
//           <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
//           <span>8:30</span>
//         </ReceivedMessageContainer>

//         <SentMessageContainer>
//           <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
//           <span>8:30</span>
//         </SentMessageContainer>
//         <ReceivedMessageContainer>
//           <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
//           <span>8:30</span>
//         </ReceivedMessageContainer>

//         <SentMessageContainer>
//           <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
//           <span>8:30</span>
//         </SentMessageContainer>
//         <ReceivedMessageContainer>
//           <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
//           <span>8:30</span>
//         </ReceivedMessageContainer>

//         <SentMessageContainer>
//           <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
//           <span>8:30</span>
//         </SentMessageContainer>
//         <ReceivedMessageContainer>
//           <ReceivedMessage>Здравствуйте. Еще в продаже?</ReceivedMessage>
//           <span>8:30</span>
//         </ReceivedMessageContainer>

//         <SentMessageContainer>
//           <SentMessage>Здравствуйте. Еще в продаже? <div></div></SentMessage>
//           <span>8:30</span>
//         </SentMessageContainer>
//       </CoversationMessagesBlock>

//       <ConversationInputBlock>
//         <Input value={inputMessage} onChange={setInpuMessage} placeholder='Напишите сообщение...' />
//         {inputMessage.length 
//           ? 
//         <ConversationSendIcon>
//           <BiSend size={25} color='white' />
//         </ConversationSendIcon> : null}
//       </ConversationInputBlock>
//     </ChatContainer>
//   )
// }

// export default Chat