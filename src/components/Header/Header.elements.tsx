import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Colors from "../../utils/css_variables/colors";


// Header Main
export const HeaderComp = styled.header`
    width: 100%;
    height: 80px;
    background-color: ${Colors.main_green};
`

export const HeaderInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
`

export const LogoLink = styled(Link)`

`

export const LogoImage = styled(Image)`
    /* width: 70px;
    height: 50px; */
`

export const HeaderNav = styled.nav`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`

// Language

interface LangItemTypes {
    active?: boolean
}

export const Lang = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const LangItem = styled.div<LangItemTypes>`
    font-size: 15px;
    color: ${({active}) => active ? '#ffffffac' : '#fff'};
    cursor: ${({active}) => active ? '' : 'pointer'};

    &:hover {
        color: #ffffffac;
    }
`

export const LangBr = styled.div`
    width: 2px;
    height: 20px;
    background: #ffffffac;
`

// UserBox

export const UserBox = styled.ul`
    width: auto;
    height: auto;
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

export const UserBoxItem = styled.li`
    
`
export const UserBoxLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: white;

    &:hover {
        opacity: 0.5;
    }

    & > h2 {
        font-size: 20px;
        color: white;
    }
`

