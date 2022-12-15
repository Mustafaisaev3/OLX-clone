import styled from "styled-components";
import { motion } from 'framer-motion'
import Colors from "../../../utils/css_variables/colors"

interface DropdownInterface {
    active?: boolean
}


export const DropdownContainer = styled.div`
    width: auto;
    height: auto;
    position: relative;
`

export const DropdownTitle = styled.div<DropdownInterface>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    gap: 10px;
    color: white;
    cursor: pointer;

    .dropdown-title__right-icon {
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
    /* padding: 20px; */
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
    position: absolute;
    top: 150%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-shadow: 0px 2px 4px 2px rgba(217,214,217,1);
    -moz-box-shadow: 0px 2px 4px 2px rgba(217,214,217,1);
    box-shadow: 0px 2px 4px 2px rgba(217,214,217,1);
`

export const DropdownBodyContainer = styled.div`
    width: 100%;
    height: auto;
    padding-top: 20px;
`

export const DropdownContainerTitle = styled.div`
    padding: 5px 20px;
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