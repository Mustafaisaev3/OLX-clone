import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import Filters from '../components/Sections/ProductsList/Filters/Filters'
import Products from '../components/Sections/ProductsList/Products/Products'
import Checkbox from '../components/UI/Checkbox/Checkbox'

const Category = () => {
  return (
    <div>
        <SearchForm />
        <Filters />
        <Products />
    </div>
  )
}

export default Category