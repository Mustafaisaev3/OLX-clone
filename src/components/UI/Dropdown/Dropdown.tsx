import React, { useState } from 'react'
import { DropdownContainer, DropdownTitle, DropdownBody, DropdownBodyContainer, DropdownContainerTitle, DropdownContainerItems, DropdownContainerItem, DropdownButton } from './Dropdown.elements'
import { motion, AnimatePresence } from 'framer-motion'

interface DropdownInterface {
    children?: any, 
    title: string | React.ReactNode,
    titleColor?: string, 
    titleBg?: string, 
    leftIcon?: React.ReactNode, 
    rightIcon?: React.ReactNode,
}

const Dropdown = ({children, title, titleColor, titleBg, leftIcon, rightIcon}: DropdownInterface) => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false)

  const handleDropdownClick = () => {
    setActiveDropdown(!activeDropdown)
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

