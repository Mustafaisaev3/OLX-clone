import React from 'react'
import Card from '../../../../UI/Card/Card'
import { CardTitle } from '../../../../UI/Card/Card.elements'
import { PlaceInfoContainer, PlaceInfoContent, MapImage, AddressContainer, City, Region } from './PlaceInfo.elements'
import MapSvg from '../../../../../../public/assets/images/map_svg.svg'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import Colors from '../../../../../utils/css_variables/colors'

const PlaceInfo = () => {
   
  return (
    <Card>
        <CardTitle>Місцезнаходження</CardTitle>
        <PlaceInfoContainer>
            <PlaceInfoContent>
                <HiOutlineLocationMarker size={30} color={Colors.text_main} />
                <AddressContainer>
                    <City>Добропілля,</City>
                    <Region>Донецька область</Region>
                </AddressContainer>
            </PlaceInfoContent>
            <MapImage>
                <img src={MapSvg.src} />
            </MapImage>
        </PlaceInfoContainer>
    </Card>
  )
}

export default PlaceInfo