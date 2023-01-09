import React, { HTMLAttributes, useState } from 'react'
import { DropdownContainer, DropdownTitle, DropdownBody, DropdownBodyContainer, DropdownContainerTitle, DropdownContainerItems, DropdownContainerItem, DropdownButton } from './Dropdown.elements'
import { motion, AnimatePresence } from 'framer-motion'

interface DropdownInterface extends HTMLAttributes<HTMLDivElement> {
    children?: any, 
    title: string | any,
    titleColor?: string, 
    titleBg?: string, 
    leftIcon?: React.ReactNode, 
    rightIcon?: React.ReactNode,
    onClick?: any
}

const Dropdown = ({children, title, titleColor, titleBg, leftIcon, rightIcon, onClick}: DropdownInterface) => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false)

  const handleDropdownClick = () => {
    setActiveDropdown(!activeDropdown)
    if(onClick){
      onClick()
    }
  }



  return (
    <DropdownContainer>
        <DropdownTitle onClick={handleDropdownClick} active={activeDropdown} titleColor={titleColor} titleBg={titleBg}>
            {leftIcon}        
            {title}       
            {rightIcon}
        </DropdownTitle>

        <AnimatePresence>
        {activeDropdown && children
        }
        </AnimatePresence>
        
    </DropdownContainer>
  )
}

export default Dropdown

