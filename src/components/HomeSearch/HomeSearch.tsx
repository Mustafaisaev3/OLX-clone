import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Container, Section, Title } from '../../pages/globalStyles'
import { HomeSearchGrid, HomeSearchGridInner, HomeSearchGridList, HomeSearchGridItem } from './HomeSearch.elements'
import { Categories } from '../../data/Categories'
import Colors from '../../utils/css_variables/colors'
import SearchForm from '../SearchForm/SearchForm'

const GridItemLink = styled(Link)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    &:hover > div{
        color: white;
        background-color: ${Colors.main_green};
    }
`

const GridItemImage = styled(Image)`
    border-radius: 100%;
`

const GridItemTitle = styled.div`
    width: 100%;
    height: auto;
    color: ${Colors.main_green};
    font-size: 18px;
    text-align: center;
`

const HomeSearch = () => {
  return (
    <Section>
        <SearchForm />
        <HomeSearchGrid>
            <Container>
                <HomeSearchGridInner>
                    <Title>Головні рубрики</Title>
                    <HomeSearchGridList>
                        {Categories.map((item) => {
                            return  <HomeSearchGridItem>
                                        <GridItemLink href='#'>
                                            <GridItemImage src={item.image} alt='category_image' width={100} height={100} style={{backgroundColor: item.background_color}} />
                                            <GridItemTitle>{item.name}</GridItemTitle>
                                        </GridItemLink>
                                    </HomeSearchGridItem>
                        })}

                    </HomeSearchGridList>
                </HomeSearchGridInner>
            </Container>
        </HomeSearchGrid>
    </Section>
  )
}

export default HomeSearch