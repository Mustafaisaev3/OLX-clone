import React from 'react'
import { Container, Section } from '../../../../pages/globalStyles'
import Colors from '../../../../utils/css_variables/colors'
import Button from '../../../UI/Button/Button'
import { BusinessSection, BusinessContent, BusinessInner, BusinessText, BusinessTitle } from './Business.elements'

const Business = () => {
  return (
    <BusinessSection>
        <Container>
            <BusinessInner>
                <img src="/assets/images/chart.svg" alt="" />
                <BusinessContent>
                    <BusinessTitle>Виділяйтеся як компанія!</BusinessTitle>
                    <BusinessText>Перегляньте пропозицію OLX для бізнесу</BusinessText>
                </BusinessContent>
                <Button>Детальніше</Button>
            </BusinessInner>
        </Container>
    </BusinessSection>
  )
}

export default Business