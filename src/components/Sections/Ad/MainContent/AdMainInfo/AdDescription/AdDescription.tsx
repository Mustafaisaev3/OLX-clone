import React from 'react'
import { AdDescriptionContainer, AdDescriptionTitle, Description } from './AdDescription.elements'

const AdDescription = ({description}: any) => {
  return (
    <AdDescriptionContainer>
        <AdDescriptionTitle>Опис</AdDescriptionTitle>
        <Description>{description}</Description>
    </AdDescriptionContainer>
  )
}

export default AdDescription