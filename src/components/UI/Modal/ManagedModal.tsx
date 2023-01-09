import React from 'react'
import { useUI } from '../../../context/ui.context'
import ImageSliderView from '../../ModalViews/ImageSliderView/ImageSliderView'
import SelectNewAdCategoryView from '../../ModalViews/SelectNewAdCategoryView/SelectNewAdCategoryView'
import Modal from './Modal'

const ManagedModal = () => {
    const {modalView, displayModal} = useUI()
  return (
    <Modal open={displayModal}>
        {modalView === 'IMAGE_SLIDER_VIEW' && <ImageSliderView />}
        {modalView === 'SELECT_NEW_AD_CATEGORY_VIEW' && <SelectNewAdCategoryView />}
    </Modal>
  )
}

export default ManagedModal