import React from 'react'
import { FaHeart } from 'react-icons/fa'
import Card from '../UI/Card/Card'
import { CardFavoritesIcon, CardFooter, CardFooterContant, CardFooterInfo, CardImage, CardPrice, CardTitle, CardWrapper } from './ProductCard.elements'


const ProductCard = ({data}: any) => {
  return (
        <Card>
            <CardWrapper>
                <CardImage>
                    <img src={data.image} />
                </CardImage>
                <CardTitle>
                    {data.title}
                </CardTitle>
                <CardFooter>
                    <CardFooterInfo>{data.address}</CardFooterInfo>
                    <CardFooterContant>
                        <CardPrice>{data.price}</CardPrice>
                        <CardFavoritesIcon>
                            <FaHeart size={20}/>
                        </CardFavoritesIcon>
                    </CardFooterContant>
                </CardFooter>
            </CardWrapper>
        </Card>
  )
}

export default ProductCard


