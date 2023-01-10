import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Portal } from 'react-portal'
import { ToastType, useUI } from '../../../context/ui.context'
import { ToastTypes } from '../../../utils/toast_types/toast_types'
import Toast from './Toast'
import ToastItem from './ToastItem'

const ManagedToast = () => {
  const { toastList } = useUI()
  const newToastList = toastList.reverse()
 
  return (
    <AnimatePresence>
        {toastList.length 
            ?
            <Portal>
                <Toast>
                    {newToastList.map((toast: ToastType) => {
                        return <>
                            <ToastItem data={toast} />
                        </>
                    })} 
                </Toast>
            </Portal>
            :
            <></>
        }
    </AnimatePresence>
  )
}

export default ManagedToast