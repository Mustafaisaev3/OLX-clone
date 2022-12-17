import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const BusinessSection = styled.section`
    background-color: ${Colors.main_green};
`

export const BusinessInner = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

export const BusinessContent = styled.div`
    
`

export const BusinessTitle = styled.h4`
    font-size: 15px;
    color: ${Colors.text_second};
`

export const BusinessText = styled.h2`
    font-size: 20px;
    color: white;
`