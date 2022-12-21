import React from 'react'
import Card from '../../../../UI/Card/Card'
import { ImagesContainer, FullSizeIcon } from './PhotoCard.elements';
import ImageSlider from '../../../../ImageSlider/ImageSlider';
import { BsArrowsFullscreen } from 'react-icons/bs'


import Colors from '../../../../../utils/css_variables/colors';
import { useUI } from '../../../../../context/ui.context';

interface PhotoCardInterface {
    images: string[]
}

const PhotoCard = ({images}: PhotoCardInterface) => {
  const {openModal, setModalView, modalView} = useUI()

  const openImageModal = () => {
    console.log(modalView)
    setModalView('IMAGE_SLIDER_VIEW')
    openModal()
  }

  return (
    <ImagesContainer>
        <Card>
            <ImageSlider images={images} />
        </Card>
        <FullSizeIcon onClick={openImageModal}>
            <BsArrowsFullscreen size={25} color={Colors.text_main} />
        </FullSizeIcon>
    </ImagesContainer>
  )
}

export default PhotoCard