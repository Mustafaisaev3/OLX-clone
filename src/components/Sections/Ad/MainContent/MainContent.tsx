import React, { useEffect, useState } from 'react'
import { MainContentContainer, LeftContent, RightContent } from './MainContent.elements'
import ImageSliderCard from './ImageSliderCard/ImageSliderCard'
import SallerInfo from './SallerInfo/SallerInfo'
import PlaceInfo from './PlaceInfo/PlaceInfo'
import AdMainInfo from './AdMainInfo/AdMainInfo'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectAd, selectAdPhotos, selectAdState, selectAdStatus } from '../../../../store/ducks/ad/selectors'
import { useDispatch } from 'react-redux'
import { fetchAdById } from '../../../../store/ducks/ad/action'
import { LoadingState } from '../../../../store/types'

const MainContent = () => {
  const adId = '63c076b1f307a46c8634bb2c'
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
  }, [dispatch, currentAdStatus])

  return (
    <>
      {currentAdStatus == LoadingState.SUCCESS 
        ?
      <MainContentContainer>
          <LeftContent>
              <ImageSliderCard images={currentAd.photos}></ImageSliderCard>
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