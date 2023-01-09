import Image from 'next/image'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { useSelector } from 'react-redux'
import { useUI } from '../../../../context/ui.context'
import { selectActiveCategory } from '../../../../store/ducks/categories/selectors'
import Colors from '../../../../utils/css_variables/colors'
import Input from '../../../Form/Input/Input'
import Card from '../../../UI/Card/Card'
import { CardBlock, CardSubTitle, CardTitle } from '../../../UI/Card/Card.elements'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import { ContentWrapper } from '../MainContent.elements'
import { CategoryBtn, CategoryContent, CategoryContentSubtitle, CategoryContentTitle, CategoryImage, CheckedCategoryItem } from './Category.elements'

const Category = ({getData}: any) => {
  const activeCategory = useSelector(selectActiveCategory)
  const {openModal, setModalView } = useUI()

  const handleCategoryChooseBtn = () => {
    setModalView('SELECT_NEW_AD_CATEGORY_VIEW')
    // setSelectedCategory(true)
    // getData(activeCategory)
    return openModal()
  }
  
  return (
    <Card paddingSize='xl'>
        <ContentWrapper>
            <CardTitle>Опишіть у подробицях</CardTitle>
            <CardBlock>
              <CardSubTitle>Вкажіть назву*</CardSubTitle>
              <Input placeholder='Наприклад, iPhone 11 з гарантією' aria-required />
            </CardBlock>
            <CardBlock>
              <CardSubTitle>Категорія*</CardSubTitle>
              {!activeCategory 
                ?
                <Dropdown 
                  title='выберите категорию' 
                  titleColor='black' 
                  titleBg='#f2f4f5' 
                  rightIcon={<SlArrowDown color={Colors.text_main} size={20} />}
                  onClick={handleCategoryChooseBtn}
                />
                :
                <CheckedCategoryItem color={activeCategory.parent.color}>
                  <CategoryImage color={activeCategory.parent.color}>
                    <img src={activeCategory.parent.image} alt={activeCategory.name} />
                  </CategoryImage>
                  <CategoryContent>
                    <CategoryContentTitle>{activeCategory.name}</CategoryContentTitle>
                    <CategoryContentSubtitle>{activeCategory.parent.name} / {activeCategory.name}</CategoryContentSubtitle>
                  </CategoryContent>
                  <CategoryBtn onClick={handleCategoryChooseBtn}>Змінити</CategoryBtn>
                </CheckedCategoryItem>
              }
            </CardBlock>
          </ContentWrapper>
       </Card>
  )
}

export default Category