import React from 'react'
import { useUI } from '../../../context/ui.context'
import ChatModalView from '../../ModalViews/ChatModalView/ChatModalView'
import ImageSliderView from '../../ModalViews/ImageSliderView/ImageSliderView'
import SelectNewAdCategoryView from '../../ModalViews/SelectNewAdCategoryView/SelectNewAdCategoryView'
import ChatModal from './ChatModal'


const ManagedModal = () => {
  const {chatModalView, displayChatModal} = useUI()

  return (
    <ChatModal open={displayChatModal}>
        <ChatModalView />
    </ChatModal>
  )
}

export default ManagedModal