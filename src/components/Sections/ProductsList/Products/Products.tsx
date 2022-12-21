import React from 'react'
import { Container, Section } from '../../../../pages/globalStyles'
import Pagination from '../../../Pagination/Pagination'
import ProductsGrid from './ProductsGrid/ProductsGrid'
import ProductsNav from './ProductsNav/ProductsNav'

const Products = () => {
  return (
    <Section>
        <Container>
            <ProductsNav></ProductsNav>
            <ProductsGrid />
            <Pagination />
        </Container>
    </Section>
  )
}

export default Products