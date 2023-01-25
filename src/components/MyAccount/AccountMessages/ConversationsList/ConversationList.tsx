import React, { useState } from 'react'
import Tabs from '../../../Form/Tabs/Tabs'
import { ConversationListBlockTitle, ConversationListBody, ConversationListContainer, ConversationListHeader, ConversationListItem, ConversationListItemBody, ConversationListItemDate, ConversationListItemImage, ConversationListItemMessage, ConversationListItemTitle, ConversationListItemUser, ConversationsList } from './ConversationList.elements'

const ConversationList = ({conversations, setChatConversation}: any) => {
  const [activeConversation, setActiveConversation] = useState()

  const handleChooseActiveConversationClick = (conversation: any) => {
    console.log(conversation)
    setActiveConversation(conversation._id)
    setChatConversation(conversation)
  } 

  return (
    <ConversationListContainer>
        <ConversationListHeader>
            <Tabs data={['Продаю', 'Купую']}></Tabs>
        </ConversationListHeader>
        <ConversationListBody>
            <ConversationListBlockTitle>Повідомлення</ConversationListBlockTitle>
            <ConversationsList>
              {conversations 
                ? conversations.map((conversation: any) => {
                  return (
                    <ConversationListItem key={conversation._id} onClick={() => handleChooseActiveConversationClick(conversation)} className={activeConversation == conversation._id ? 'active' : ''}>
                      <ConversationListItemImage>
                        <img src={conversation.ad.photos[0].url} />
                      </ConversationListItemImage>
                      <ConversationListItemBody>
                        <ConversationListItemUser>{conversation.ad.phone}</ConversationListItemUser>
                        <ConversationListItemTitle>{conversation.ad.title}</ConversationListItemTitle>
                        <ConversationListItemMessage>{conversation.messages[conversation.messages.length - 1].message}</ConversationListItemMessage>
                      </ConversationListItemBody>
                      <ConversationListItemDate>07.09</ConversationListItemDate>
                    </ConversationListItem> 
                  )
                })
                :
                null
              }
              {/* <ConversationListItem>
                <ConversationListItemImage></ConversationListItemImage>
                <ConversationListItemBody>
                  <ConversationListItemUser>Александр Петров</ConversationListItemUser>
                  <ConversationListItemTitle>Письменный стол в хорошем состоянии</ConversationListItemTitle>
                  <ConversationListItemMessage>Здравствуйте!</ConversationListItemMessage>
                </ConversationListItemBody>
                <ConversationListItemDate>07.09</ConversationListItemDate>
              </ConversationListItem> */}

            </ConversationsList>
        </ConversationListBody>
    </ConversationListContainer>
  )
}

export default ConversationList