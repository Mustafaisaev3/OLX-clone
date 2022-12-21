import styled from "styled-components";
import Colors from "../../utils/css_variables/colors";

export const BreadcrumbsContainer = styled.ol`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
`

export const BreadcrumbsItem = styled.li<any>`
    & > a {
        color: ${({disabled}) => disabled ? 'gray' : Colors.text_main};
        
    }

    & > span{
        padding: 0px 10px;
    }
`