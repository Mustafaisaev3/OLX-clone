import styled from "styled-components";
import Colors from "../../../utils/css_variables/colors";

export const CardComp = styled.div<any>`
    width: 100%;
    height: auto;
    padding: ${({paddingSize}) => paddingSize};
    border-radius: 5px;
    background-color: white;
`

export const CardTitle = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: ${Colors.text_main};
    margin: 0px 0px 20px;
    text-transform: uppercase;
    font-weight: 700;
`

export const CardBlock = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10px;
`

export const CardSubTitle = styled.p`
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 1.29;
    color: ${Colors.text_main};
    margin: 0px 0px 10px;
    font-weight: 500;
`