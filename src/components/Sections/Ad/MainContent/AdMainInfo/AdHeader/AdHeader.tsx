import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Title } from '../../../../../../pages/globalStyles'
import Colors from '../../../../../../utils/css_variables/colors'
import { AdHeaderContainer, AdHead, Price, AdTitle } from './AdHeader.elements'

const AdHeader = ({adData}: any) => {

  return (
    <AdHeaderContainer>
        <AdHead>
            <div>Опубліковано 21 грудня 2022 р.</div>
            <FiHeart size={25} color={Colors.text_main}/>
        </AdHead>
        <AdTitle>{adData.title}</AdTitle>
        <Price>{adData.price.price}$</Price>
    </AdHeaderContainer>
  )
}

export default AdHeader