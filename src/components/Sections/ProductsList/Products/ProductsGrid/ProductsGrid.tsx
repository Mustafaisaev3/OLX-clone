import React from 'react'
import { FaHeart } from 'react-icons/fa'
import ProductCard from '../../../../ProductCard/ProductCard'
import Card from '../../../../UI/Card/Card'
import { ProductsGridContainer } from './ProductsGrid.elements'

const ProductsGrid = () => {
  return (
    <ProductsGridContainer>
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
     <ProductCard />  
    </ProductsGridContainer>
  )
}

export default ProductsGrid