import React from 'react'
import { Container, Section } from '../../../../pages/globalStyles'
import Colors from '../../../../utils/css_variables/colors'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import { DropdownBody, DropdownBodyContainer } from '../../../UI/Dropdown/Dropdown.elements'
import { FiltersContainer, FiltersSectionTitle, FiltersGrid, FiltersGridItem, FiltersGridItemContainer, FiltersGridItemTitle } from './Filters.elements'

import {IoIosArrowDown} from 'react-icons/io'
import CheckboxFilter from '../../../Filters/CheckboxFilter/CheckboxFilter'
import FromToFilter from '../../../Filters/FromToFilter/FromToFilter'


const Filters = () => {
  return (
    <Section>
        <Container>
            <FiltersContainer>
                <FiltersSectionTitle>Фільтри</FiltersSectionTitle>
                <FiltersGrid>
                    <FiltersGridItem>
                        <FiltersGridItemTitle>Категорія</FiltersGridItemTitle>
                        <FiltersGridItemContainer>
                            <CheckboxFilter />
                        </FiltersGridItemContainer>
                    </FiltersGridItem>
                    <FiltersGridItem>
                        <FiltersGridItemTitle>Ціна</FiltersGridItemTitle>
                        <FiltersGridItemContainer bg='none'>
                            <FromToFilter />
                        </FiltersGridItemContainer>
                    </FiltersGridItem>
                </FiltersGrid>
            </FiltersContainer>
        </Container>
    </Section>
  )
}

export default Filters