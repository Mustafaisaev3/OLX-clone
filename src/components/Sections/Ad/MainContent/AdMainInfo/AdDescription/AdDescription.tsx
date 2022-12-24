import React from 'react'
import { AdDescriptionContainer, AdDescriptionTitle, Description } from './AdDescription.elements'

const AdDescription = () => {
  return (
    <AdDescriptionContainer>
        <AdDescriptionTitle>Опис</AdDescriptionTitle>
        <Description>Автомобіль в гарному стані, 1,4 турбо бензин, механічна коробка передач, гарна комплектація, перевірка на любому сто.</Description>
    </AdDescriptionContainer>
  )
}

export default AdDescription