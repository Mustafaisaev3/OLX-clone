import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const FromToFilterItem = styled.div`
    
`

export const FromToFilterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const From = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 3px;
`

export const To = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 3px;
`

export const FromToOptionItem = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 15px;
    color: ${Colors.text_main};
    background-color: white;

    &:hover{
        color: white;
        background-color: ${Colors.main_green};
    }
`