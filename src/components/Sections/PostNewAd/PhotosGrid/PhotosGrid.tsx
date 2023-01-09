import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveCategory } from '../../../../store/ducks/categories/selectors'
import { CardTitle } from '../../../ProductCard/ProductCard.elements'
import Card from '../../../UI/Card/Card'
import { CardSubTitle } from '../../../UI/Card/Card.elements'
import PhotoCard from '../../../UI/PhotoCard/PhotoCard'
import { ContentWrapper } from '../MainContent.elements'
import { PhotosGridContainer } from './PhotosGrid.elements'

const PhotosGrid = ({getData}: any) => {
  const photosNum = useSelector(selectActiveCategory)?.photos_num
  const [imagesList, setImages] = useState<any>([])

  let numElem = (photosNum ? photosNum : 8) - imagesList.length
  // let numElem = null
  // if(photosNum){
  //   numElem = useRef<number>(photosNum).current - imagesList.length
  // } else {
  //   numElem = useRef<number>(8).current - imagesList.length
  // }
  let itemListNum = new Array(numElem).fill(0);

  // useEffect(() => {
  //   console.log('hello')
  // }, [photosNum])

  // const formData = new FormData()
  //       formData.append('file', file)

  useEffect(() => {
    getData(imagesList)
  }, [imagesList.length])

  return (
    <Card>
      <ContentWrapper>
        <CardTitle>Фото</CardTitle>
        <CardSubTitle>Перше фото буде на обкладинці оголошення. Перетягніть, щоб змінити порядок фото.</CardSubTitle>
        <PhotosGridContainer>
            {imagesList?.map((image: any) => {
              console.log(image)
                // return <PhotoCard key={Math.random()} image={image} getImage={setImages}></PhotoCard> 
                return <PhotoCard key={Math.random()} image={image} deleteImage={setImages} ></PhotoCard> 
            })}  

            {itemListNum.map(() =>{
                // return <PhotoCard key={Math.random()} getImage={setImages}></PhotoCard>
                return <PhotoCard key={Math.random()} getImage={setImages}></PhotoCard>
            })}
            {/* <PhotoCard getImage={setImages}></PhotoCard>
            <PhotoCard getImage={setImages}></PhotoCard>
            <PhotoCard getImage={setImages}></PhotoCard>
            <PhotoCard getImage={setImages}></PhotoCard>
            <PhotoCard getImage={setImages}></PhotoCard> */}
        </PhotosGridContainer>
      </ContentWrapper>
    </Card>
  )
}

export default PhotosGrid

