import React, { useEffect, useState } from 'react'
import { MainContentContainer, LeftContent, RightContent } from './MainContent.elements'
import ImageSliderCard from './ImageSliderCard/ImageSliderCard'
import SallerInfo from './SallerInfo/SallerInfo'
import PlaceInfo from './PlaceInfo/PlaceInfo'
import AdMainInfo from './AdMainInfo/AdMainInfo'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectAd, selectAdState, selectAdStatus } from '../../../../store/ducks/ad/selectors'
import { useDispatch } from 'react-redux'
import { fetchAdById } from '../../../../store/ducks/ad/action'
import { LoadingState } from '../../../../store/types'

interface MainContentType {
  adId: string | undefined
}

const MainContent = ({ adId }: any) => {
  // const adId = '63c7ab25b6295473e68b5ac6'
  // const adId = '63c7ac36b6295473e68b5ada'
  // const [adData, setAdData] = useState<any>(null)
  // const [imagesArr, setImagesArr] = useState<any>([])
  // const getAdInfo = async () => {
  //   const responce = await axios.post('http://localhost:8888/getAd', {id: '63c076b1f307a46c8634bb2c'})
  //   setAdData(responce.data.data)
  //   setImagesArr([...responce.data.images])
  //   console.log(responce.data.images)
  // }
  const dispatch = useDispatch()
  const currentAd = useSelector(selectAd)
  const currentAdStatus = useSelector(selectAdStatus)
  console.log(currentAdStatus)

  useEffect(() => {
    dispatch(fetchAdById(adId))
  }, [dispatch, currentAdStatus, adId])

  return (
    <>
      {currentAdStatus == LoadingState.SUCCESS 
        ?
      <MainContentContainer>
          <LeftContent>
            {currentAd.photos ? (
              <ImageSliderCard images={currentAd.photos}></ImageSliderCard>
            ): null}
              <AdMainInfo></AdMainInfo>
          </LeftContent>
          <RightContent>
              <SallerInfo data={currentAd}></SallerInfo>
              <PlaceInfo></PlaceInfo>
          </RightContent>
      </MainContentContainer>     
        :  
        <div>Loading</div>
      }
    </>
  )
}

export default MainContent