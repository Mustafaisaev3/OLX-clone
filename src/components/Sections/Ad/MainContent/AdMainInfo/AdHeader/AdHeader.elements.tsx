import styled from "styled-components";
import Colors from "../../../../../../utils/css_variables/colors";

export const AdHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
`

export const AdHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div{
        line-height: 16px;
        font-size: 12px;
        color: #406367;
        padding-bottom: 20px;
    }
`

export const AdTitle = styled.h2`
    font-size: 32px;
    font-weight: 500;
    line-height: 24px;
    color: ${Colors.text_main};
`

export const Price = styled.h2`
    font-size: 40px;
    line-height: 42px;
    margin-top: 16px;
    color: ${Colors.text_main};
`