import React from 'react'
import { FaHeart } from 'react-icons/fa'
import ProductCard from '../../../../ProductCard/ProductCard'
import Card from '../../../../UI/Card/Card'
import { ProductsGridContainer } from './ProductsGrid.elements'

const ProductsGrid = ({data}: any) => {
  return (
    <ProductsGridContainer>
      {data && data.map((item: any) => {
        return(
          <ProductCard data={item} />  
        )
      })}

    </ProductsGridContainer>
  )
}

export default ProductsGrid