import React from 'react'
import { GridContainer } from './Grid.elements'

interface GridInterface {
    column?: number,
    row?: number,
    children?: any
}

const Grid = ({column, row, children}: GridInterface) => {
  return (
    <GridContainer column={column} row={row}>
        {children}
    </GridContainer>
  )
}

export default Grid