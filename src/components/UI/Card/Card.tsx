import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { Padding, PaddingType } from '../../../utils/paddings/Padding'
import { CardComp } from './Card.elements'

interface CardInterface extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  paddingSize?: PaddingType
}

const Card: FC<CardInterface> = ({children, paddingSize = 'm'}) => {
  return (
    <CardComp paddingSize={Padding[paddingSize]}>
        {children}
    </CardComp>
  )
}

export default Card