import React from 'react'
import { Container, Section, Title } from '../../../../pages/globalStyles'
import Card from '../../../UI/Card/Card'
import { VIPinner, VIPgrid } from './VIPAd.elements'
import ProductCard from '../../../ProductCard/ProductCard'


const VIPAd = ({data}: any) => {
  return (
    <Section>
        <Container>
            <VIPinner>
                <Title>VIP обьявления</Title>
                <VIPgrid>
                  {data && data.map((item: any) => {
                    return(
                      <ProductCard data={item}/>
                    )
                  })}
                </VIPgrid>
            </VIPinner>
        </Container>
    </Section>
  )
}

export default VIPAd