import styled from "styled-components";
import { motion } from 'framer-motion'
import Colors from "../../../utils/css_variables/colors"


interface DropdownTitleInterface {
    titleColor?: string,
    titleBg?: string,
    active?: boolean
}


export const DropdownContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const DropdownTitle = styled.div<DropdownTitleInterface>`
    /* width: 100%;
    height: 100%; */
    width: 100%;
    height: 50px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    padding: 0px 15px;
    gap: 10px;
    color: ${({titleColor}: any) => titleColor ? titleColor : 'white'};
    background-color: ${({titleBg}: any) => titleBg ? titleBg : ''};
    cursor: pointer;

    .dropdown-title__right-icon {
        color: ${({titleColor}: any) => titleColor ? titleColor : 'white'};
        transform: ${({active}) => active ? 'rotate(180deg)' : 'rotate(0)'};
        transition: all 0.1s;
    }
    
    &:hover {
        opacity: 0.5;
    }
`

// Dropdown Container
export const DropdownBody = styled(motion.div)`
    width: auto;
    height: auto;
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
    -webkit-box-shadow: 0px 2px 4px 2px rgba(217,214,217,1);
    -moz-box-shadow: 0px 2px 4px 2px rgba(217,214,217,1);
    box-shadow: 0px 2px 4px 2px rgba(217,214,217,1);
`

export const DropdownBodyContainer = styled.div`
    width: 100%;
    height: auto;
    /* padding-top: 20px; */
`

export const DropdownContainerTitle = styled.div`
    padding: 5px 20px;
    padding-top: 30px;
    font-size: 20px;
    color: rgb(127, 151, 153);
    
`

export const DropdownContainerItems = styled.ul`
    display: flex;
    flex-direction: column;
    
`

export const DropdownContainerItem = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    
    &:hover {
        color: white;
        background-color: ${Colors.main_green}
    }
    
`

export const DropdownButton = styled.button`
    width: 100%;
    height: auto;
    padding: 10px 20px;
    text-align: left;
    background-color: #fff;
    border-top: 1px solid #d7d7d7dc;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: ${Colors.main_green}
    }
`