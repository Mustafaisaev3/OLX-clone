import styled from "styled-components";
import Colors from "../../../../../utils/css_variables/colors";

export const ProductsNavContainer = styled.nav`
    width: 100%;
    height: auto;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProductOptions = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    gap: 30px;
`

export const DidsplayBtnList = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const DidsplayBtnItem = styled.div<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    color: ${({active}) => active ? 'white' : Colors.main_green};
    background-color: ${({active}) => active ? Colors.main_green : 'white'};

`

export const CurrencyBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const CurrencyBlockTitle = styled.h2`
    font-size: 15px;
`

export const CurrencyBlockItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const CurrencyBlockItem = styled.li`
    color: ${Colors.text_main};
    &:hover{
        color: white;
        background-color: ${Colors.main_green};
    }
`

export const DisplaySortDropdown = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const DisplaySortTitle = styled.h2`
    font-size: 15px;
`

export const SortDropdown = styled.div`
    /* width: auto;
    height: 100%;
    background-color: white; */
`
