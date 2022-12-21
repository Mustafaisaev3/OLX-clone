import React from 'react'
import Card from '../../../../UI/Card/Card'
import { CardTitle } from '../../../../UI/Card/Card.elements'
import { SallerInfoContainer } from './SalesrInfo.elements'

const SallerInfo = () => {
  return (
    <SallerInfoContainer>
        <Card>
            <CardTitle>Користувач</CardTitle>
        </Card>
    </SallerInfoContainer>
  )
}

export default SallerInfo