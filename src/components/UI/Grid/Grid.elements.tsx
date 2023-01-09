import styled from "styled-components";

interface GridInterface {
    column?: number,
    row?: number,
}

export const GridContainer = styled.div<any>`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: ${({column}: any) => column ? `repeat(${column}, 1fr)` : 1};
    grid-template-rows: ${({row}: any) => row ? `repeat(${row}, 1fr)` : 1};
`