import React from 'react'
import Tabs from '../../../Form/Tabs/Tabs'
import { ConversationListBlockTitle, ConversationListBody, ConversationListContainer, ConversationListHeader, ConversationListItem, ConversationListItemBody, ConversationListItemDate, ConversationListItemImage, ConversationListItemMessage, ConversationListItemTitle, ConversationListItemUser, ConversationsList } from './ConversationList.elements'

const ConversationList = () => {
  return (
    <ConversationListContainer>
        <ConversationListHeader>
            <Tabs data={['Продаю', 'Придбаю']}></Tabs>
        </ConversationListHeader>
        <ConversationListBody>
            <ConversationListBlockTitle>Повідомлення</ConversationListBlockTitle>
            <ConversationsList>
              
              <ConversationListItem>
                <ConversationListItemImage></ConversationListItemImage>
                <ConversationListItemBody>
                  <ConversationListItemUser>Александр Петров</ConversationListItemUser>
                  <ConversationListItemTitle>Письменный стол в хорошем состоянии</ConversationListItemTitle>
                  <ConversationListItemMessage>Здравствуйте!</ConversationListItemMessage>
                </ConversationListItemBody>
                <ConversationListItemDate>07.09</ConversationListItemDate>
              </ConversationListItem>

            </ConversationsList>
        </ConversationListBody>
    </ConversationListContainer>
  )
}

export default ConversationList