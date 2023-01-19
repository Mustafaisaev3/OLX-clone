import React from 'react'
import { Portal } from 'react-portal'

const ChatModal = ({children, open}: any) => {
  return (
    <Portal>
        {open && children}
    </Portal>
  )
}

export default ChatModal