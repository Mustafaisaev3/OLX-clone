import React from 'react'
import Card from '../../../../UI/Card/Card'
import AdDescription from './AdDescription/AdDescription'
import AdFooter from './AdFooter/AdFooter'
import AdHeader from './AdHeader/AdHeader'
import AdOptions from './AdOptionsContainer/AdOptions'

const AdMainInfo = () => {
  return (
    <Card>
        <AdHeader />
        <AdOptions />
        <AdDescription />
        <AdFooter />
    </Card>
  )
}

export default AdMainInfo