import React from 'react'
import { CardComp } from './Card.elements'

const Card = ({children}: any) => {
  return (
    <CardComp>
        {children}
    </CardComp>
  )
}

export default Card