import React from 'react'
import { PaginationContainer, PaginationItem, PaginationList, CustomLink} from './Pagination.elements'
import {GrPrevious, GrNext} from 'react-icons/gr'
import Colors from '../../utils/css_variables/colors'

export const Previous = ({href}: any) => {
    return (
        <CustomLink href={href}>
            <GrPrevious size={25} color={Colors.text_main} />
        </CustomLink>
    )
}

export const Next = ({href}: any) => {
    return (
        <CustomLink href={href}>
            <GrNext size={25} color={Colors.text_main} />
        </CustomLink>
    )
}

const Pagination = () => {
  return (
    <PaginationContainer>
        <PaginationList>
            <Previous href=''></Previous>
            <PaginationItem>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationItem>3</PaginationItem>
            <PaginationItem>...</PaginationItem>
            <PaginationItem>4</PaginationItem>
            <PaginationItem>5</PaginationItem>
            <Next href=''></Next>
        </PaginationList>
    </PaginationContainer>
  )
}

export default Pagination