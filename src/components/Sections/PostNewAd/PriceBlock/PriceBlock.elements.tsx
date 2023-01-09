import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const PriceBlockContainer = styled.div`
    width: fit-content;
    height: auto;

    display: inline-flex;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    background-color: rgb(242, 244, 245);
`

export const PriceBlockItem = styled.button<any>`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &.active{
        background-color: ${Colors.main_green};
        color: white;
    }
`

export const PriceForm = styled.div`
    padding-top: 10px;
`

export const SwitchBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SwitchBlockTitle = styled.h2`
    font-size: 15px;
    color: ${Colors.text_main};
`