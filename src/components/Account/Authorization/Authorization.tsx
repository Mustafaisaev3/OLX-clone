import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import { Abo, AuthorizationContainer, AuthorizationHeader, FacebookLoginBtn, FormContainer, HeaderAnimationStripe, HeaderItem, HeaderItemsContainer, Round } from './Authorization.elements'

const Authorization = ({children}: any) => {
  return (
    <AuthorizationContainer>
      <Round />
      <FormContainer>
        <AuthorizationHeader>
          <HeaderItemsContainer>
            <HeaderItem>Увійти</HeaderItem>
            <HeaderItem>Реєстрація</HeaderItem>
          </HeaderItemsContainer>
          <HeaderAnimationStripe></HeaderAnimationStripe>
        </AuthorizationHeader>
        <Card paddingSize='xl'>
            <FacebookLoginBtn>
            <Button type='primaryBordered'><ImFacebook2 size={25} /> Вхід з Facebook</Button>
            </FacebookLoginBtn>
            <Abo>АБО</Abo>
            {children}
        </Card>
      </FormContainer>
    </AuthorizationContainer>
  )
}

export default Authorization