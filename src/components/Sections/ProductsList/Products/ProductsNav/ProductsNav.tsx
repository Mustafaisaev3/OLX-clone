import React from 'react'
import Breadcrumbs from '../../../../Breadcrumbs/Breadcrumbs'
import { ProductsNavContainer, ProductOptions, DidsplayBtnList, DidsplayBtnItem, CurrencyBlock, CurrencyBlockTitle, CurrencyBlockItems, CurrencyBlockItem, DisplaySortDropdown, DisplaySortTitle, DropdownContainerItem } from './ProductsNav.elements'
import {BsFillGridFill} from 'react-icons/bs'
// import {HiViewColumns} from 'react-icons/hi'
import { HiViewList } from 'react-icons/hi'
import Colors from '../../../../../utils/css_variables/colors'
import Dropdown from '../../../../UI/Dropdown/Dropdown'
import { DropdownBody, DropdownBodyContainer } from '../../../../UI/Dropdown/Dropdown.elements'

const breadcrumbs = [
    'Головна',
    'Категорії',
    'Інше'
]

const ProductsNav = () => {
  return (
    <ProductsNavContainer>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <ProductOptions>
            <DisplaySortDropdown>
                <DisplaySortTitle>Сортувати за:</DisplaySortTitle>
                <Dropdown title='Рекомендоване вам' titleColor={Colors.text_main} titleBg='white'>
                    <DropdownBody>
                        <DropdownBodyContainer>
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                        </DropdownBodyContainer>
                    </DropdownBody>
                </Dropdown>
            </DisplaySortDropdown>
            <DidsplayBtnList>
                <DidsplayBtnItem active={true}>
                    <BsFillGridFill size={25} />
                </DidsplayBtnItem>
                <DidsplayBtnItem>
                    <HiViewList size={25} />
                </DidsplayBtnItem>
            </DidsplayBtnList>
            <CurrencyBlock>
                <CurrencyBlockTitle>Валюта: </CurrencyBlockTitle>
                <CurrencyBlockItems>
                    <CurrencyBlockItem>грн.</CurrencyBlockItem>
                    <CurrencyBlockItem>$</CurrencyBlockItem>
                </CurrencyBlockItems>
            </CurrencyBlock>
        </ProductOptions>
    </ProductsNavContainer>
  )
}

export default ProductsNav