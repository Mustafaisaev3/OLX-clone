import { useRouter } from 'next/router'
import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import MainContent from '../../components/Sections/Ad/MainContent/MainContent'
import CardSlider from '../../components/Widgets/CardSlider/CardSlider'
import { ProductsData } from '../../data/Products'
import { Container, Section } from './../globalStyles'

const breadcrumbs = [
    'Головна',
    'Авто',
    'Легкові автомобілі'
]


const Ad = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  return (
    <Section>
        <Container>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <MainContent adId={id}></MainContent>
            <CardSlider title='Усі оголошення автора' data={ProductsData}></CardSlider>
            <CardSlider title='Схожі оголошення' data={ProductsData}></CardSlider>
        </Container>
    </Section>
  )
}

export default Ad