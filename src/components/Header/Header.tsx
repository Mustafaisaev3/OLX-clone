import Link from 'next/link'
import React from 'react'
import { Container } from '../../pages/globalStyles'
import { HeaderComp, HeaderInner, Logo, LogoLink, LogoImage, HeaderNav, Lang, LangItem, LangBr, UserBox, UserBoxItem, UserBoxLink } from './Header.elements'
import Dropdown from '../UI/Dropdown/Dropdown'
import { DropdownBody, DropdownBodyContainer, DropdownContainerTitle, DropdownContainerItems, DropdownContainerItem, DropdownButton} from '../UI/Dropdown/Dropdown.elements'


// Icons
import { BiMessageSquare } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import {HiOutlineUser} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'
import Button from '../UI/Button/Button'


const Header = () => {
  return (
    <HeaderComp>
        <Container>
            <HeaderInner>
                <Logo>
                    <LogoLink href='/'>
                        <LogoImage src='/assets/images/olx_logo.png' alt='logo_image' width={90} height={50} /> 
                    </LogoLink>
                </Logo>
                <HeaderNav>
                    <Lang>
                        <LangItem>язык</LangItem>
                        <LangBr />
                        <LangItem active={true}>мова</LangItem>
                    </Lang>
                    <UserBox>
                        <UserBoxItem>
                            <UserBoxLink href='#'>
                                <BiMessageSquare size={30} color='white'/>
                                <h2>Повідомлення</h2>
                            </UserBoxLink>
                        </UserBoxItem>
                        <UserBoxItem>
                            <UserBoxLink href='#'>
                                <FiHeart size={30} color='white'/>
                            </UserBoxLink>
                        </UserBoxItem>
                        <UserBoxItem>
                            <Dropdown 
                              title='Ваш профіль' 
                              leftIcon={<HiOutlineUser color='white' size={30} className='dropdown-title__icon' />}
                              rightIcon={<IoIosArrowDown color='white' size={30} className='dropdown-title__right-icon ' />}
                            >

                            <DropdownBody initial={{height: '0'}} animate={{height: 'auto'}} exit={{height: '0'}}>
                                <DropdownBodyContainer>
                                    <DropdownContainerTitle>Ваш профиль</DropdownContainerTitle>
                                    <DropdownContainerItems>
                                        <DropdownContainerItem>Оголошення</DropdownContainerItem>
                                        <DropdownContainerItem>Повідомлення</DropdownContainerItem>
                                        <DropdownContainerItem>Платежі</DropdownContainerItem>
                                        <DropdownContainerItem>Рахунок</DropdownContainerItem>
                                    </DropdownContainerItems>
                                </DropdownBodyContainer>
                                <DropdownBodyContainer>
                                    <DropdownContainerTitle>Обрані:</DropdownContainerTitle>
                                    <DropdownContainerItems>
                                        <DropdownContainerItem>Оголошення</DropdownContainerItem>
                                        <DropdownContainerItem>Пошуки</DropdownContainerItem>
                                    </DropdownContainerItems>
                                </DropdownBodyContainer>
                                <DropdownButton onClick={() => console.log('hello')}>Вийти</DropdownButton>
                            </DropdownBody>
                            </Dropdown>
                        </UserBoxItem>
                    </UserBox>
                    <Button type='primary'>Додати оголошення</Button>
                </HeaderNav>
            </HeaderInner>
        </Container>
    </HeaderComp>
  )
}

export default Header