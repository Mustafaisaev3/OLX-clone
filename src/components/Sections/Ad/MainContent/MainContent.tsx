import React from 'react'
import styled from 'styled-components'
import Card from '../../../UI/Card/Card'
import { MainContentContainer, LeftContent, RightContent } from './MainContent.elements'

const CardItem = styled.div`
    width: 100%;
    height: 500px;
`

const MainContent = () => {
  return (
    <MainContentContainer>
        <LeftContent>
            <Card>
            </Card>
        </LeftContent>
        <RightContent>
            <Card>
            </Card>
        </RightContent>
    </MainContentContainer>
  )
}

export default MainContent