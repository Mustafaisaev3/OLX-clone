import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import MainContent from '../components/Sections/Ad/MainContent/MainContent'
import { Container, Section } from './globalStyles'

const breadcrumbs = [
    'Головна',
    'Авто',
    'Легкові автомобілі'
]

const Ad = () => {
  return (
    <Section>
        <Container>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <MainContent></MainContent>
        </Container>
    </Section>
  )
}

export default Ad