import { useRouter } from 'next/router'
import React from 'react'
import { Container, Section } from '../../../pages/globalStyles'
import Button from '../../UI/Button/Button'
import { EmptyAccountAdsContainer } from './EmptyAccountAds.elements'

const EmptyAccountAds = () => {
  const router = useRouter()
  const handleCreateAdBtnClick = () => {
    router.push('/post_new_ad')
  }
  
  return (
    <Section>
        <Container>
            <EmptyAccountAdsContainer>
                <img src='/assets/images/empty_ads.svg' /> 
                <h3>Активні оголошення відображаються тут до закінчення їх терміну дії</h3>
                <p>Ці оголошення доступні для перегляду всім і стають неактивними через 30 днів після їх активації.</p>
                <Button buttontype='secondary' onClick={handleCreateAdBtnClick}>Створити оголошення</Button>
            </EmptyAccountAdsContainer>
        </Container>
    </Section>
  )
}

export default EmptyAccountAds