import styled from "styled-components";

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
    color: rgb(0, 47, 52);
    margin: 0px 0px 20px;
    text-transform: uppercase;
    font-weight: 700;
`