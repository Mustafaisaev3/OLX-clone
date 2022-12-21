import React from 'react'
import { MainContentContainer, LeftContent, RightContent } from './MainContent.elements'
import PhotoCard from './PhotoCard/PhotoCard'
import SallerInfo from './SallerInfo/SallerInfo'

const AdImages = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.r3PDfOsoVtAiyrs4QcZ8EwHaDa%26pid%3DApi&f=1&ipt=8811c22c0fe3d76e34886266e736d68ea767c2672d063de4bfdfe4689621592a&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4x6ocZQxVijEJDz0f374BwHaD6%26pid%3DApi&f=1&ipt=121064c5bc9b851c4d198c38412402a567bdeddc0cfd7c4b1cdf96b500710737&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.autonocion.com%2Fwp-content%2Fuploads%2F2020%2F09%2FHyundai-KONA-2020-restyling-20.jpg&f=1&nofb=1&ipt=cdb7059709ccb07e60dbd60115b4015143deaea6d9c757d726895f8349f94daf&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-s-www.bienpublic.com%2Fimages%2FD7BC63EC-E0D1-47A7-92A0-106E63BE664C%2FNW_raw%2Fen-france-kona-represente-pres-de-25-des-ventes-de-hyundai-et-s-impose-comme-l-un-des-vehicules-references-de-la-marque-aux-cotes-de-i20-et-du-celebre-tucson-1593161368.jpg&f=1&nofb=1&ipt=e001c1ed1b28fbbac602ab9c8a244b57b497b22521693c4ce28f83accbd883a1&ipo=images'
]


const MainContent = () => {
  return (
    <MainContentContainer>
        <LeftContent>
            <PhotoCard images={AdImages}></PhotoCard>
        </LeftContent>
        <RightContent>
            <SallerInfo></SallerInfo>
        </RightContent>
    </MainContentContainer>
  )
}

export default MainContent