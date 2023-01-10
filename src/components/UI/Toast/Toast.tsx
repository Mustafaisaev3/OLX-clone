import React, { ReactChild, ReactChildren } from 'react'
import { ToastContainer } from './Toast.elements';

interface ToastProps {
    children: any;
  }  

const Toast = ({children}: ToastProps) => {
  return (
    <ToastContainer>{children}</ToastContainer>
  )
}

export default Toast