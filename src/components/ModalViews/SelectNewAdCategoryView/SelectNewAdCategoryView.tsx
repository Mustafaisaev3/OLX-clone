import React, { HTMLAttributes, useState } from 'react'
import { CategoryGrid, CategoryGridItem, CategoryItemBlock, CategoryItemTitle, CategoryViewModal, Title } from './SelectNewAdCategoryView.elements'
import { MdArrowForwardIos } from 'react-icons/md'
import { Categories } from '../../../../adOptionsType'
import { useSelector } from 'react-redux'
import { selectCategoriesData } from '../../../store/ducks/categories/selectors'
import { useDispatch } from 'react-redux'
import { fetchCategory } from '../../../store/ducks/categories/action'
import { useUI } from '../../../context/ui.context'

interface CategoryItemInterface extends HTMLAttributes<HTMLDivElement> {
  title: string,
  arrow?: boolean,
  active?: boolean,
  onClick?: any
}

const CategoryItem: React.FC<CategoryItemInterface> = ({title, arrow, active, onClick}) => {
  return(
    <CategoryItemBlock className={`${active ? 'active' : ''}`} onClick={onClick}>
      <CategoryItemTitle>{title}</CategoryItemTitle>
      {arrow && <MdArrowForwardIos size={20} />}
    </CategoryItemBlock>
  )
}

const SelectNewAdCategoryView = () => {
  const {closeModal} = useUI()
  const dispatch = useDispatch()
  const [activeCategory, setActiveCategory] = useState(0)
  const categories = useSelector(selectCategoriesData)

  const handleChoseActiveCategoryBtnClick = (categoryId: string) => {
    console.log(categoryId)
    dispatch(fetchCategory(categoryId))
    closeModal()
  }

  return (
    <CategoryViewModal>
        <Title>Виберіть категорію</Title>
        <CategoryGrid>
            <CategoryGridItem>
              {
                categories && categories.map((category, id) => {
                  if(!category.parent){
                    return(
                      <CategoryItem key={id} title={category.name} arrow onClick={() => setActiveCategory(category._id)} />
                    )
                  }
                })
              }
            </CategoryGridItem>
            <CategoryGridItem>
              {/* {Categories[activeCategory].children?.map((subcategory) => {
                return(
                  <CategoryItem title={subcategory.name} onClick={handleChoseActiveCategoryBtnClick} />
                )
              })} */}
              {categories && categories.map((category, id) => {
                if(category.parent && category.parent._id == activeCategory){
                  console.log(category.parent._id, 'active category:' + activeCategory)
                  return(
                      <CategoryItem title={category.name} onClick={() => handleChoseActiveCategoryBtnClick(category._id)} />
                      )
                  }
                // return <CategoryItem title={category.name} onClick={handleChoseActiveCategoryBtnClick} />
              })}
            </CategoryGridItem>
        </CategoryGrid>
    </CategoryViewModal>
  )
}

export default SelectNewAdCategoryView