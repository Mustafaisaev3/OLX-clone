import React from 'react'
import { BreadcrumbsContainer, BreadcrumbsItem } from './Breadcrumbs.elements'

interface BreadcrumbsInterface {
    breadcrumbs: string[]
}

const Breadcrumbs = ({breadcrumbs}: BreadcrumbsInterface) => {

  const lustItemIdex = breadcrumbs.length - 1

  return (
    <BreadcrumbsContainer>
        {breadcrumbs.map((el: any, index: number) => {
            return (
                <>
                    {lustItemIdex !== index ? (
                        <BreadcrumbsItem>
                            <a href='#'>{el}</a> 
                            <span> / </span>
                        </BreadcrumbsItem>
                    ) : (
                        <BreadcrumbsItem disabled={true}>
                            <a>{el}</a> 
                        </BreadcrumbsItem>
                        )
                    }
                </>
            )
        })}
    </BreadcrumbsContainer>
  )
}

export default Breadcrumbs