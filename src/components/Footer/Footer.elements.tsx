import styled from "styled-components";
import Colors from "../../utils/css_variables/colors";

export const FooterInner = styled.footer`
    width: 100%;
    height: 300px;
    display: flex;

`

export const FooterLinks = styled.ul`
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 50px;
`

export const FooterLinksItem = styled.li`
    
`

export const FooterLink = styled.a`
    font-size: 20px;
    color: ${Colors.text_main};
    cursor: pointer;
    margin-bottom: 5px;
`

export const FooterStores = styled.div`
    margin-right: 50px;
    display: flex;
    gap: 20px;
`

export const FooterStoreItem = styled.a`
    
`