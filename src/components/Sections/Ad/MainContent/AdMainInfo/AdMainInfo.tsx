import React from 'react'
import { useSelector } from 'react-redux'
import { selectAd } from '../../../../../store/ducks/ad/selectors'
import Card from '../../../../UI/Card/Card'
import AdDescription from './AdDescription/AdDescription'
import AdFooter from './AdFooter/AdFooter'
import AdHeader from './AdHeader/AdHeader'
import AdOptions from './AdOptionsContainer/AdOptions'

const AdMainInfo = () => {
  const ad = useSelector(selectAd)
  return (
    <Card>
        <AdHeader adData={ad}/>
        <AdOptions options={ad.options} />
        <AdDescription description={ad.description} />
        <AdFooter />
    </Card>
  )
}

export default AdMainInfo