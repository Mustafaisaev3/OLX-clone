import React from 'react'
import Card from '../../../../UI/Card/Card'
import { ImagesContainer, FullSizeIcon } from './ImageSliderCard.elements';
import ImageSlider from '../../../../ImageSlider/ImageSlider';
import { BsArrowsFullscreen } from 'react-icons/bs'


import Colors from '../../../../../utils/css_variables/colors';
import { useUI } from '../../../../../context/ui.context';

interface PhotoCardInterface {
    images: string[]
}

const ImageSliderCard = ({images}: PhotoCardInterface) => {
  const {openImagesModal, setImagesModalView, imagesModalView} = useUI()

  const openImageModal = () => {
    console.log(imagesModalView)
    setImagesModalView('IMAGE_SLIDER_VIEW')
    openImagesModal()
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

export default ImageSliderCard