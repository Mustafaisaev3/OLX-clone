import React from 'react'
import { useUI } from '../../../context/ui.context'
import ImageSliderView from '../../ModalViews/ImageSliderView/ImageSliderView'
import Modal from './Modal'

const ManagedModal = () => {
    const {modalView, displayModal} = useUI()
  return (
    <Modal open={displayModal}>
        {modalView === 'IMAGE_SLIDER_VIEW' && <ImageSliderView />}
    </Modal>
  )
}

export default ManagedModal