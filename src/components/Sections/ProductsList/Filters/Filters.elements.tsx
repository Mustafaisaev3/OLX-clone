import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const FiltersContainer = styled.div`
    
`

export const FiltersSectionTitle = styled.h4`
    font-size: 24px;
    line-height: 26px;
    font-weight: 500;
    color: ${Colors.text_main};
    margin: 0;
    margin-bottom: 16px;
`

export const FiltersGrid = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`

export const FiltersGridItem = styled.div`

`

export const FiltersGridItemTitle = styled.h4`
    color: ${Colors.text_main};
    padding-bottom: 5px;
    
`

export const FiltersGridItemContainer = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 3px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div{
        color: ${Colors.text_main};
    }
`