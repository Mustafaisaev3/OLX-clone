import React from 'react'
import Image from 'next/image'
import { Container, Section } from '../../../../pages/globalStyles'
import { SocialLinksInner, SocialLinksText, SocialLinksContainer, SocialLinksItem, SocialLink, SocialLinksIcon, SocialLinksSpan } from './SocialLinks.elements'

const SocialLinks = () => {
  return (
    <Section bg='#cbf7ee'>
        <Container>
            <SocialLinksInner>

                <Image src={'/assets/images/olx_logo_dark.png'} alt={'logo_dark'} width={110} height={60}/>
                <SocialLinksText>

                    Усі онлайн-оголошення України на OLX - тут ви знайдете те, що шукали! Натиснувши на кнопку Подати оголошення, ви<br></br> зможете розмістити оголошення на будь-яку тематику легко й швидко.<br></br> 
                    За допомогою сервісу OLX ви зможете купити чи продати з рук у руки практично все, що завгодно.
                </SocialLinksText>

                <SocialLinksContainer>
                    <SocialLinksItem>
                        <SocialLink href='#'>
                            <Image src={'/assets/images/social_icons/facebook.svg'} alt={'fs_icon'} width={100} height={50} />
                        </SocialLink>
                    </SocialLinksItem>
                    <SocialLinksItem>
                        <SocialLink href='#'>
                            <Image src={'/assets/images/social_icons/youtube.svg'} alt={'fs_icon'} width={100} height={50} />
                        </SocialLink>
                    </SocialLinksItem>
                    <SocialLinksItem>
                        <SocialLink href='#'>
                            <Image src={'/assets/images/social_icons/twitter.svg'} alt={'fs_icon'} width={100} height={50} />
                        </SocialLink>
                    </SocialLinksItem>
                </SocialLinksContainer>
                <SocialLinksSpan>Спільноти OLX в соціальних мережах</SocialLinksSpan>
            </SocialLinksInner>
        </Container>
    </Section>
  )
}

export default SocialLinks