import styled from "styled-components";
import Colors from "../../../../utils/css_variables/colors";

export const TabsContainer = styled.div`
    width: auto;
    height: auto;
`

export const TabsLinks = styled.ul`
    display: flex;
    align-items: center;
`

export const TabsLinkItem = styled.li`
    width: auto;
    height: 60px;
    position: relative;
    border-bottom: 2px solid transparent;
    
    &.active {
        color: ${Colors.text_main};
        border-bottom: 2px solid ${Colors.text_main};
        
        & > a {
            color: ${Colors.text_main};
        }
    }
`

export const TabsLink = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(127, 151, 153);
    cursor: pointer;
    text-decoration: none;
    padding: 0px 20px;

    &:hover {
        color: ${Colors.text_main};
    }
`