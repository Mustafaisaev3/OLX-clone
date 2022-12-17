import React from 'react'
import Image from 'next/image'
import { Container, Section } from '../../pages/globalStyles'
import { FooterInner, FooterLinks, FooterLinksItem, FooterLink, FooterStores, FooterStoreItem } from './Footer.elements'

const Footer = () => {
  return (
    <Section>
        <Container>
            <FooterInner>

                <FooterLinks>
                    <FooterLinksItem>
                        <FooterLink href='#'>Мобільні додатки</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Допомога та Зворотній зв'язок</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Платні послуги</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>OLX PRO</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Бізнес на OLX</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Для преси</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Реклама на сайті</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Блог OLX</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Умови користування</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Політика конфіденційності</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Партнери</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Як продавати й купувати?</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Правила безпеки</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Карта сайту</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Карта регіонів</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>OLX delivery</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Популярні запити</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>Робота в OLX</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLink href='#'>OLX Доставка</FooterLink>
                    </FooterLinksItem>
                </FooterLinks>
                <FooterStores>
                    <FooterStoreItem href='#'>
                        <Image src='/assets/images/social_icons/apple_store.svg' alt='apple_store' width={150} height={60} />
                    </FooterStoreItem>
                    <FooterStoreItem href='#'>
                        <Image src='/assets/images/social_icons/google_play.svg' alt='apple_store' width={150} height={60} />
                    </FooterStoreItem>
                </FooterStores>
            </FooterInner>
        </Container>
    </Section>
  )
}

export default Footer


