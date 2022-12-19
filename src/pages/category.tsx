import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import Filters from '../components/Sections/ProductsList/Filters/Filters'
import Checkbox from '../components/UI/Checkbox/Checkbox'

const Category = () => {
  return (
    <div>
        <SearchForm />
        <Filters />
    </div>
  )
}

export default Category