import React from 'react'
import { useUI } from '../../../context/ui.context'
import ImageSliderView from '../../ModalViews/ImageSliderView/ImageSliderView'
// import ImageSliderView from '../../ModalViews/ImageSliderView/ImageSliderView'
import ImagesModal from './ImagesModal'

const ManagedModal = () => {
    const {imagesModalView, displayImagesModal} = useUI()
  return (
    <ImagesModal open={displayImagesModal}>
        {imagesModalView === 'IMAGE_SLIDER_VIEW' && <ImageSliderView />}
    </ImagesModal>
  )
}

export default ManagedModal

