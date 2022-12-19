import React from 'react'
import { Container, Section } from '../../../../pages/globalStyles'
import Colors from '../../../../utils/css_variables/colors'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import { DropdownBody, DropdownBodyContainer } from '../../../UI/Dropdown/Dropdown.elements'
import { FiltersContainer, FiltersSectionTitle, FiltersGrid, FiltersGridItem, FiltersGridItemContainer, FiltersGridItemTitle } from './Filters.elements'

import {IoIosArrowDown} from 'react-icons/io'
import CheckboxFilter from '../../../Filters/CheckboxFilter/CheckboxFilter'

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
                            <Dropdown title='Всі оголошення' titleColor={Colors.text_main} rightIcon={<IoIosArrowDown size={25} className='dropdown-title__right-icon ' />}>
                                <DropdownBody>
                                    <DropdownBodyContainer>
                                        <CheckboxFilter name='check' value='check' label='Повний робочий день'></CheckboxFilter>
                                        <CheckboxFilter name='check' value='check' label='Неповний робочий день'></CheckboxFilter>
                                        <CheckboxFilter name='hec' value='check' label='Повний робочий день'></CheckboxFilter>
                                        <CheckboxFilter name='check' value='check' label='Неповний робочий день'></CheckboxFilter>
                                    </DropdownBodyContainer>
                                </DropdownBody>
                            </Dropdown>
                        </FiltersGridItemContainer>
                    </FiltersGridItem>
                </FiltersGrid>
            </FiltersContainer>
        </Container>
    </Section>
  )
}

export default Filters