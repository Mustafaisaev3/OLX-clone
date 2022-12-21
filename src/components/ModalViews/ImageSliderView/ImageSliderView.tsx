import React from 'react'
import { Container } from '../../../pages/globalStyles'
import { ImageSliderModal, ImageSliderHeader, ImagesSliderTitle, ImagesSliderCloseBtn, ImagesSliderContent, SliderContainer, UserBtns } from './ImageSliderView.elements'
import { VscChromeClose } from 'react-icons/vsc'
import { useUI } from '../../../context/ui.context'
import ImageSlider from '../../ImageSlider/ImageSlider'
import Button from '../../UI/Button/Button'

const ImageSliderView = () => {
  const {closeModal, setModalView} = useUI()

  const handleCloseModalBtn = () => {
    setModalView('')
    return closeModal()
  }

  const AdImages = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.r3PDfOsoVtAiyrs4QcZ8EwHaDa%26pid%3DApi&f=1&ipt=8811c22c0fe3d76e34886266e736d68ea767c2672d063de4bfdfe4689621592a&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4x6ocZQxVijEJDz0f374BwHaD6%26pid%3DApi&f=1&ipt=121064c5bc9b851c4d198c38412402a567bdeddc0cfd7c4b1cdf96b500710737&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.autonocion.com%2Fwp-content%2Fuploads%2F2020%2F09%2FHyundai-KONA-2020-restyling-20.jpg&f=1&nofb=1&ipt=cdb7059709ccb07e60dbd60115b4015143deaea6d9c757d726895f8349f94daf&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-s-www.bienpublic.com%2Fimages%2FD7BC63EC-E0D1-47A7-92A0-106E63BE664C%2FNW_raw%2Fen-france-kona-represente-pres-de-25-des-ventes-de-hyundai-et-s-impose-comme-l-un-des-vehicules-references-de-la-marque-aux-cotes-de-i20-et-du-celebre-tucson-1593161368.jpg&f=1&nofb=1&ipt=e001c1ed1b28fbbac602ab9c8a244b57b497b22521693c4ce28f83accbd883a1&ipo=images'
]

  return (
    <ImageSliderModal>
        <Container>
            <ImageSliderHeader>
                <ImagesSliderTitle>Ford Fusion</ImagesSliderTitle>
                <ImagesSliderCloseBtn>
                    <VscChromeClose size={30} color='white' onClick={handleCloseModalBtn}/>
                </ImagesSliderCloseBtn>
            </ImageSliderHeader>
            <ImagesSliderContent>
                <SliderContainer>
                    <ImageSlider images={AdImages}></ImageSlider>
                </SliderContainer>
                <UserBtns>
                    <Button>Показати телефон</Button>
                    <Button type='secondary'>Повідомлення</Button>
                </UserBtns>
            </ImagesSliderContent>
        </Container>
    </ImageSliderModal>
  )
}

export default ImageSliderView