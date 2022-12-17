import React from 'react'
import { Container } from '../../pages/globalStyles'
import { SeacrhFormContainer, SeacrhFormInner, SeacrhForm, SearchFormButton, SearchInputContainer } from './SearchForm.elements'
import Colors from '../../utils/css_variables/colors'

// Icons
import { BsSearch } from 'react-icons/bs'
import LocationSearch from '../LocationSearch/LocationSearch'

const SearchForm = () => {
  return (
    <SeacrhFormContainer>
        <Container>
            <SeacrhFormInner>
                <SeacrhForm>
                    <SearchInputContainer className='search-input__container'>
                        <BsSearch color={Colors.main_green} size={30}/>
                        <input placeholder='11 319 036 оголошень поруч' />
                    </SearchInputContainer>
                    <LocationSearch />
                    <SearchFormButton>
                        Пошук
                        <BsSearch size={25} className='search-input__icon'/>
                    </SearchFormButton>
                </SeacrhForm>
            </SeacrhFormInner>
        </Container>
    </SeacrhFormContainer>
  )
}

export default SearchForm